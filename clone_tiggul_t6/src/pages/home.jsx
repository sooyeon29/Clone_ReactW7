import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../elements/layout";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Main>
        홈화면입니다
        <div>layout배경을 잘보이려고파란색으로해놨어용ㅋㅋ</div>
      </Main>
    </Layout>
  );
};

export default Home;

const Main = styled.div`
  color: white;
`;
