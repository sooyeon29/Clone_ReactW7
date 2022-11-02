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
  }, [saveChanges]);

  return (
    <>
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
                  😊
                  <div>
                    <div>닉네임:{user.nickname}</div>
                  </div>
                  📱
                  <div>
                    <div>전화번호:{user.phone}</div>
                  </div>
                </div>
              )}
              {isChange && (
                <div>
                  😊
                  <div>
                    <input
                      type="text"
                      required
                      minLength="1"
                      placeholder={user.nickname}
                      name="nickname"
                      onChange={fixUsersHandler}
                    />
                  </div>
                  📱
                  <div>
                    <input
                      type="text"
                      required
                      minLength="1"
                      placeholder={user.phone}
                      name="phone"
                      onChange={fixUsersHandler}
                    />
                  </div>
                </div>
              )}

              {!isChange && <button onClick={wantToChange}>수정하기</button>}
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
    </>
  );
};

export default MyPageUser;

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
    background-color: var(--gray-100);
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    div {
      font-size: 16px;
      font-weight: bold;
      margin-left: 5px;
    }
  }
`;
const WrapTwo = styled(WrapOne)`
  div {
    div {
      font-size: 14px;
      color: var(--gray-700);
    }
  }
`;
const WrapThree = styled(WrapOne)`
  button {
    color: red;
    font-weight: 500;
    font-size: 16px;

    width: 100%;
    border: 0px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
`;
