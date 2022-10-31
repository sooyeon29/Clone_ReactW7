import React from "react";
import { useNavigate } from "react-router-dom";

const LeaderOne = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate("/leadertwo");
          }}
        >
          다음페이지로(리더장2 로ㄱㄱ)
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

export default LeaderOne;
