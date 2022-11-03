import React from "react";
import styled from "styled-components";
import Layout from "../../elements/layout";
import Button from "../../elements/buttons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { __getMyOtt } from "../../redux/modules/addPartySlice";
import { useNavigate } from "react-router-dom";

const LeaderTwo = () => {
  const navigate = useNavigate();
  const goToNext = () => {
    window.location.replace(`/leaderfour`);
  };
  const getOtt = useSelector((state) => state.data.data);
  console.log("과연 디비값을가져올수 있을까", getOtt);
  // window.sessionStorage.setItem("getOtt", JSON.stringify(PickOtt));

  //   axios.get("https://hi-prac.shop/api/ott/1").then((res) => {
  //     console.log(res.data.data);
  //     // localStorage.setItem('token', res.data.token);
  //     // if (res.status === 200) {
  //     //   navigate('/home');
  //     // }
  //   });

  return (
    <Layout>
      <Before>
        <Last>매월 정산받는 금액을 확인해주세요</Last>
        <Ott>
          <Inbox>
            {getOtt.ottService} 프리미엄
            <Color>
              <BlueBox></BlueBox>
              <YellowBox></YellowBox>
              <YellowBox></YellowBox>
              <YellowBox></YellowBox>
            </Color>
            티빙 이용권 금액이 다른가요?
          </Inbox>
          <FirstMoney>
            <BlueMiniBox />내 1/4 부담금
            {/* {res.data.data.price / 4} */}
            <br />
            <YellowMiniBox />
            {/* {(getOtt.price / 4) * 3} */}
          </FirstMoney>
        </Ott>
        <Ott>
          피클플러스 수수료
          <br />
          매월 정산받는 금액
        </Ott>
      </Before>
      <Button onClick={goToNext}>다음</Button>
    </Layout>
  );
};
export default LeaderTwo;

const Before = styled.div`
  border: 1px solid var(--gray-100);
  border-radius: 16px;
  background-color: var(--white);
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  margin-top: 24px;
  padding: 20px;
`;
const Last = styled.div`
  display: block;
  font-size: 18px;
  line-height: 24px;
  margin: 0px;
  font-weight: bold;
  color: var(--gray-800);
`;

const Ott = styled.div`
  padding: 15px;
  background-color: var(--gray-050);
  border: 1px solid var(--gray-200);
  box-sizing: border-box;
  border-radius: 16px;
  margin: 15px 0px 20px;
`;

const Inbox = styled.div`
  padding: 20px 16px;
  transform: translateZ(0px);
  border: 1px solid var(--gray-100);
  border-radius: 16px;
  background-color: var(--white);
  width: 100%;
  max-width: 311px;
  margin: 0px auto;
`;
const Color = styled.div`
  display: block;
  font-size: 11px;
  line-height: 15px;
  margin: 0px;
  padding: 0%;
  font-weight: normal;
  position: absolute;
  display: flex;
  justify-content: center;
`;

const BlueBox = styled.div`
  background-color: var(--blue-500);
  transition: flex-grow 0.3s ease-out 0s;
  color: var(--white);
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  padding: 2px 20px 2px 20px;
  margin: 1px;
`;

const YellowBox = styled.div`
  background-color: var(--yellow-400);
  transition: flex-grow 0.3s ease-out 0s;
  color: var(--white);
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  margin: 1px;
  padding: 2px 20px 2px 20px;
`;

const FirstMoney = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BlueMiniBox = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: var(--blue-500);
  margin: 4px;
`;

const YellowMiniBox = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: var(--yellow-400);
  margin: 4px;
`;
