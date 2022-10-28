import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../elements/header";

const AddTwo = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div>
        <button
          onClick={() => {
            navigate("/myone");
          }}
        >
          다음페이지로(마이파티1 로ㄱㄱ)
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

export default AddTwo;
