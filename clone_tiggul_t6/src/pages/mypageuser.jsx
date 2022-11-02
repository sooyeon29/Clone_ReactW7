import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import useToggle from "../hooks/useToggle";
import { MyPageApi } from "../tools/instance";

const MyPageUser = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [wantToChange] = useToggle();
  const [newInfo, fixUsersHandler] = useInput({
    nickname: "",
    phone: "",
  });

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

  const saveChanges = () => {
    setIsEditMode((prev) => !prev);
    MyPageApi.putUsers()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log("수정실패라우...", error));
  };

  const exitHandler = () => {
    alert("정말로 회원탈퇴하시겠습니까?");
    MyPageApi.exit().then((res) => console.log(res));
  };

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
              {!isEditMode && (
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
              {isEditMode && (
                <div>
                  😊
                  <div>
                    <input
                      type="text"
                      required
                      minLength="1"
                      placeholder={user.nickname}
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
                      onChange={fixUsersHandler}
                    />
                  </div>
                </div>
              )}

              {!isEditMode && <button onClick={wantToChange}>수정하기</button>}
              {isEditMode && (
                <button onClick={() => saveChanges(newInfo)}>수정저장</button>
              )}
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
