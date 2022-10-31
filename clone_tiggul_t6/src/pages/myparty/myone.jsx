import React from "react";
import { useNavigate } from "react-router-dom";

const MyOne = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate("/mytwo");
          }}
        >
          다음페이지로(마이파티2 로ㄱㄱ)
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

export default MyOne;
