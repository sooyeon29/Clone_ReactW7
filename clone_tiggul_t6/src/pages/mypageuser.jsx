import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import useToggle from "../hooks/useToggle";
import { MyPageApi } from "../tools/instance";

const MyPageUser = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isChange, setIsChange, wantToChange] = useToggle();
  const [cookies, setCookie, removeCookie] = useCookies(["Authorization"]);
  const [newInfo, setNewInfo] = useState({
    nickname: "",
    phone: "",
  });

  const fixUsersHandler = (e) => {
    const { name, value } = e.target;
    setNewInfo({ ...newInfo, [name]: value });
    console.log(name);
  };

  const saveChanges = (e) => {
    e.preventDefault();
    if (newInfo.nickname.trim() === "" || newInfo.phone.trim() === "") return;
    setIsChange((prev) => !prev);
    MyPageApi.putUsers(newInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log("수정실패라우...", error));
  };

  const exitHandler = () => {
    alert("정말로 회원탈퇴하시겠습니까?");
    MyPageApi.exit()
      .then((res) => {
        if (res.status === 200) alert("회원 탈퇴가 완료되었습니다.");
        removeCookie("Authorization");
        window.location.replace(`/`);
      })
      .catch((error) => alert("회원 탈퇴에 실패하였습니다."));
  };

  useEffect(() => {
    MyPageApi.getUsers()
      // 성공했을때 .then
      .then((response) => {
        // console.log("겟을 성공한다면", response);
        setUsers(response.data.data);
        // console.log(users);
      })
      // 실패했을때는 에러!
      .catch((error) => console.log("에러메세지를 보여줘", error));
  }, []);

  return (
    <>
      <Wrap>
        <Container>
          <LeaderHead>
            <button onClick={() => navigate(`/mypage`)}>
              <FontAwesomeIcon
                style={{
                  color: "#646F7C",
                  fontSize: "17",
                }}
                icon={faChevronLeft}
              />
            </button>
            <div>마이페이지</div>
            <div></div>
          </LeaderHead>
          {users?.map((user) => {
            return (
              <>
                <WrapOne key={user.userId}>
                  {!isChange && (
                    <div>
                      <div>😊 닉네임:{user.nickname}</div>
                      <span>📱 전화번호:{user.phone}</span>
                    </div>
                  )}
                  {isChange && (
                    <div>
                      <div>
                        😊 닉네임:
                        <input
                          type="text"
                          required
                          minLength="1"
                          title="정보를 입력해주세요"
                          placeholder={user.nickname}
                          name="nickname"
                          onChange={fixUsersHandler}
                        />
                      </div>

                      <div>
                        📱 전화번호:
                        <input
                          type="text"
                          required
                          minLength="1"
                          title="정보를 입력해주세요"
                          placeholder={user.phone}
                          name="phone"
                          onChange={fixUsersHandler}
                        />
                      </div>
                    </div>
                  )}

                  {!isChange && (
                    <button onClick={wantToChange}>수정하기</button>
                  )}
                  {isChange && <button onClick={saveChanges}>수정저장</button>}
                </WrapOne>
              </>
            );
          })}

          <WrapThree>
            <button onClick={exitHandler}>
              🥲 회원탈퇴
              <FontAwesomeIcon
                style={{
                  color: "#F1626D",
                  fontSize: "17",
                }}
                icon={faChevronRight}
              />
            </button>
          </WrapThree>
        </Container>
      </Wrap>
    </>
  );
};

export default MyPageUser;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-color: var(--gray-050);
  position: absolute;
  z-index: -1;
  left: 0px;
  top: 0px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 640px;
  box-sizing: border-box;
  display: block;
`;

const LeaderHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  width: 100%;
  max-width: 640px;
  height: 60px;
  margin-bottom: 8px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
  }
  button {
    border: 0px;
    border-radius: 30px;
    background-color: var(--gray-200);
    width: 24px;
  }
`;
const WrapOne = styled.div`
  width: 100%;
  max-width: 640px;
  padding: 16px 16px;
  margin: 24px auto;
  background-color: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
  border-radius: 15px;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  div {
    font-size: 16px;
    font-weight: bold;
  }
  span {
    font-size: 14px;
    color: var(--gray-700);
  }
  button {
    background-color: transparent;
    border: 0px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
    padding: 3px;
  }
`;

const WrapThree = styled(WrapOne)`
  button {
    color: red;
    font-weight: 500;
    font-size: 16px;
    box-shadow: none;
    width: 100%;
    border: 0px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
`;
