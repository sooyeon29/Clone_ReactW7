import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../elements/layout";
import Button from "../../elements/buttons";
import Ott from "../../components/mytwo/ott";
import Patch from "../../components/mytwo/patch";
import { useSelector, useDispatch } from "react-redux";
import { __getOttPw } from "../../redux/modules/leaderSlice";

const LeaderFive = () => {
  const getottpw = useSelector((state) => state.leader.data);
  console.log("환영해", getottpw);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getOttPw());
  }, [dispatch]);

  // if(getottpw.isLeader= true){

  // }

  return (
    <Layout>
      <Before>
        <Ott />
        정산안내
        <div>
          <PriceBox>
            <PricePic>
              <OttPrice>
                <div> 프리미엄</div> 13,900원/월
              </OttPrice>
              <ColorBox>
                <PriceDiv>
                  <span>3,475</span>
                  <div>3,475</div>
                  <div>3,475</div>
                  <div>3,475</div>
                </PriceDiv>
                <div>
                  <button> 이용권 금액이 다른가요?</button>
                </div>
              </ColorBox>
            </PricePic>
            <MyPrice>
              <div>
                <div>
                  <div>.</div>
                  <span>내 1/4 부담금</span>
                </div>
                <div>3,475원/월</div>
              </div>
              <div>
                <div>
                  <div>.</div>
                  <span>파티원 3명의 몫</span>
                </div>
                <div>10,425원/월</div>
              </div>
              <Button>수수료 및 정산일 보기</Button>
            </MyPrice>
          </PriceBox>
        </div>
        ID/PW
        <Patch />
      </Before>
    </Layout>
  );
};
export default LeaderFive;

const CheckPrice = styled.div`
  width: 100%;
  max-width: 640px;
  padding: 16px 16px;
  margin: 24px auto;
  background-color: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
  border-radius: 15px;
  overflow: hidden;
`;
const PriceBox = styled.div`
  padding: 15px;
  background-color: var(--gray-050);
  border: 1px solid var(--gray-200);
  box-sizing: border-box;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;
const PricePic = styled.div`
  margin: auto 24px;
  padding: 20px 16px;
  transform: translateZ(0px);
  border: 1px solid var(--gray-100);
  border-radius: 16px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  button {
    /* position: absolute; */
    width: fit-content;
    margin: 12px auto 0px auto;
    text-decoration-line: underline;
    color: var(--gray-700);
    cursor: pointer;
    background-color: transparent;
    border: 0px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;

const Before = styled.div`
  border: 1px solid var(--gray-100);
  border-radius: 16px;
  background-color: var(--white);
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  font-size: 16px;
  margin-top: 24px;
  padding: 20px;
`;

const OttPrice = styled.div`
  font-size: 13px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceDiv = styled.div`
  display: flex;
  flex-direction: row;

  div {
    flex-basis: 0px;
    flex-grow: 1;
    background-color: var(--yellow-400);
    color: var(--white);
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    border: 1px solid white;
    text-align: center;
    height: 18px;
  }
  span {
    flex-basis: 0px;
    flex-grow: 1;
    background-color: var(--blue-500);
    color: var(--white);
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    border: 1px solid white;
    text-align: center;
    height: 18px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
const MyPrice = styled.div`
  margin-top: 16px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    font-weight: 400;
    color: var(--gray-700);
    div {
      span {
      }
      div {
        background-color: #1490ff;
        width: 10px;
        height: 10px;
        border: 1px;
        color: #1490ff;
        border-radius: 2px;
        margin-right: 10px;
      }
    }
  }
`;
