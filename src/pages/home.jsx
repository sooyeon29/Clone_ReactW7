import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../elements/layout";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Layout>
        <div>
          <button
            onClick={() => {
              navigate("/addmain");
            }}
          >
            파티추가메인
          </button>
          <button
            onClick={() => {
              navigate("/myone");
            }}
          >
            my파티1
          </button>
          <button
            onClick={() => {
              navigate("/mypage");
            }}
          >
            마이페이지
          </button>
        </div>
      </Layout>
      <Wrap>
        <SecoundWrap>
          <img src="img/back.png"></img>
          <Form></Form>
        </SecoundWrap>
      </Wrap>
    </div>
  );
};

export default Home;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  background-color: var(--gray-050);
`;

const SecoundWrap = styled.div`
  background: white;
  box-sizing: border-box;
  min-width: 640px;
  width: 100%;
  padding: 20px 16px;
  display: block;

  img {
    width: 640px;
    height: 640px;
    object-fit: cover;
  }
`;

const Form = styled.div`
  background-color: rosybrown;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding: 20px 16px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid var(--gray-100);
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
  backdrop-filter: blur(4px);
  border-radius: 16px;

  button {
    width: 212px;
    height: 50px;
    background: rgba(83, 227, 172, 0.8);
    border: 1px solid rgba(77, 202, 154, 0.5);
    box-shadow: var(--shadow-low);
    border-radius: 8px;
    color: var(--white);
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Week = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  width: 100%;
  background-color: var(--white); ;
`;

const Title = styled.div`
  background-color: green;
  font-size: 40px;
`;
