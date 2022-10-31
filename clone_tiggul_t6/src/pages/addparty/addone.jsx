import React from "react";
import { useNavigate } from "react-router-dom";
import MyRole from "../../components/myRole";
import Header from "../../elements/header";

const AddOne = () => {
  const navigate = useNavigate();
  return (
    <>
      <MyRole />
      <Header />
      <div>
        <button
          onClick={() => {
            navigate("/addtwo");
          }}
        >
          다음페이지로(파티추가2 로ㄱㄱ)
        </button>
        <button
          onClick={() => {
            navigate("/leaderone");
          }}
        >
          다음페이지로(파티장 으로ㄱㄱ)
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로!!!
        </button>
      </div>
    </>
  );
};

export default AddOne;
