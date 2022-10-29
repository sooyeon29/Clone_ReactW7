import React from "react";
import { useNavigate } from "react-router-dom";

const LeaderTwo = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate("/leaderfour");
          }}
        >
          다음페이지로(리더장4 로ㄱㄱ)
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

export default LeaderTwo;
