import React from "react";
import { useState } from "react";
import styled from "styled-components";
import matchingnum from "../style/img/matchingnum.png";
import PickRole from "./pickRole";
import tving from "../style/img/tving.png";
import PickMyOtt from "./pickMyOtt";

const AddPartyPage = () => {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <WeekMatch>
        최근 일주일 매칭 현황{" "}
        <div>
          <span>0000명 </span>
          <img alt="" src={matchingnum} width="50" />
        </div>
      </WeekMatch>
      {!toggle ? (
        <PickMyOtt toggle={toggle} setToggle={setToggle} />
      ) : (
        <Before>
          <div>
            <img alt="" src={tving} width="20" />{" "}
            <h4>프리미엄 • 최고화질 • 4인공유</h4>
          </div>

          <button onClick={clickedToggle} toggle={toggle}>
            변경
          </button>
        </Before>
      )}
      {!toggle ? (
        <Next>
          <div>2</div>
          <h4>이용 역할 선택</h4>
        </Next>
      ) : (
        <PickRole toggle={toggle} setToggle={setToggle} />
      )}
    </>
  );
};
export default AddPartyPage;

const WeekMatch = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 12px 55px 12px 12px;
  /* -webkit-box-align: center; */
  align-items: center;
  /* -webkit-box-pack: justify; */
  justify-content: space-between;
  background-color: var(--white);
  border: 1px solid var(--gray-100);
  border-radius: 8px;
  /* position: relative; */
  margin-top: 20px;
  span {
    margin-right: 10px;
  }

  img {
    position: absolute;
  }
`;

const Next = styled.div`
  /* transform: translateZ(0px); */
  border: 1px solid var(--gray-100);
  border-radius: 16px;
  background-color: var(--white);
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  color: var(--gray-900);
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--gray-400);
  font-size: 16px;
  div {
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-400);
    color: var(--white);
    margin: auto 15px;
  }
`;
const Before = styled.div`
  border: 1px solid var(--gray-100);
  border-radius: 16px;
  background-color: var(--white);
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  margin-top: 24px;
  color: var(--gray-600);
  div {
    margin: auto 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    h4 {
      margin-left: 15px;
    }
  }
  button {
    color: var(--gray-600);
    cursor: pointer;
    font-size: 13px;
    background-color: transparent;
    border: 0px;
  }
`;
