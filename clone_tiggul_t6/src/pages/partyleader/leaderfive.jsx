import React from "react";
import styled from "styled-components";
import Layout from "../../elements/layout";
import Button from "../../elements/buttons";

const LeaderFive = () => {
  return (
    <Layout>
      <Before>
        <Last>
          마지막으로,
          <br /> (get) 계정을 등록해주세요 !
        </Last>
        <p>(get) 바로가기</p>

        <Ott>
          <Acount>✔️ 계정을 준비해주세요</Acount>
          <Ready>
            <img style={{ transform: "scale(0.4)" }} src="/img/admit.png" />
            <Color>티빙 프리미엄 이용권</Color> (4인공유) 구독중인 계정
          </Ready>
        </Ott>

        <Ott>
          ⚠️ 주의해주세요
          <Ready>· (get)ID가 아닌 계정은 공유 불가능 (CJ One 등) </Ready>
          <Ready>· 웹이 아닌 APP에서는 티빙이 최대 15% 더 비싸요</Ready>
        </Ott>

        <Inbox>
          <Id>
            ID
            <input placeholder="아이디 입력" />
          </Id>
        </Inbox>
      </Before>
      <Button></Button>
      파티생성 후 등록하기
    </Layout>
  );
};
export default LeaderFive;

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
  display: block;
  font-size: 15px;
  line-height: 20px;
`;

const Acount = styled.div`
  font-weight: bold;
  color: black;
`;

const Ready = styled.div`
  display: block;
  font-size: 14px;
  line-height: 18px;
  margin: 7px;
  font-weight: normal;
  color: var(--gray-600);
  text-align: center;

  > img {
    padding: 0px;
    margin: 0px;
  }
`;

const Color = styled.div`
  font-weight: bold;
  color: var(--primary-600);
`;

const Inbox = styled.div`
  padding: 10px 16px;
  height: 48px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--white);
`;

const Id = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 33px;
  color: var(--gray-600);
  font-weight: bold;
  padding: 0px 16px;
  height: 48px;
  border-radius: 8px;

  > input {
    width: 100%;
    border: 0px;
    outline: 0px;
    caret-color: var(--primary-500);
    font-family: SpoqaHanSansNeo;
    font-size: 16px;
    line-height: 22px;
    text-align: left;
    font-weight: normal;
    color: var(--gray-600);
  }
`;
