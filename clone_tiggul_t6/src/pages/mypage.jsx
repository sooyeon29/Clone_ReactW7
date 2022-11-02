import { faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <LeaderHead>
        <div></div>
        <div>마이페이지</div>
        <button onClick={() => navigate(`/`)}>
          <FontAwesomeIcon
            style={{
              color: "#646F7C",
              fontSize: "20",
            }}
            icon={faXmark}
          />
        </button>
      </LeaderHead>
      <WrapAll>
        <button
          // className="hover-button"
          onClick={() => navigate(`/mypageuser`)}
        >
          😊 계정 관리
          <FontAwesomeIcon
            style={{
              color: "#AEB4BF",
              fontSize: "17",
            }}
            icon={faChevronRight}
            // className="move-page"
          />
        </button>
        <button>
          💳 결제카드 관리
          <FontAwesomeIcon
            style={{
              color: "#AEB4BF",
              fontSize: "17",
            }}
            icon={faChevronRight}
          />
        </button>
        <button>
          💰 정산계좌 관리
          <FontAwesomeIcon
            style={{
              color: "#AEB4BF",
              fontSize: "17",
            }}
            icon={faChevronRight}
          />
        </button>
        <button>
          🗣️ 자주 묻는 질문
          <FontAwesomeIcon
            style={{
              color: "#AEB4BF",
              fontSize: "17",
            }}
            icon={faChevronRight}
          />
        </button>
        <button>
          📮 건의하기
          <FontAwesomeIcon
            style={{
              color: "#AEB4BF",
              fontSize: "17",
            }}
            icon={faChevronRight}
          />
        </button>
      </WrapAll>
      <Logout>로그아웃</Logout>
    </>
  );
};

export default MyPage;

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
const WrapAll = styled.div`
  width: 100%;
  max-width: 640px;
  padding: 16px 16px;
  margin: 24px auto;
  background-color: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    width: 100%;
    border: 0px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    cursor: pointer;
  }
  /* hover-button:hover.move-page {
    color: #282b30;
  } */
`;

const Logout = styled.button`
  float: right;
  background-color: transparent;
  border: 0px;
  color: red;
  cursor: pointer;
  font-size: 16px;
`;
