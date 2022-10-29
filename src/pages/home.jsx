import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../elements/layout";

const Home = () => {
  const navigate = useNavigate();
  return (
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
  );
};

export default Home;
