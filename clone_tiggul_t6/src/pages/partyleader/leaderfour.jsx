import React from "react";
import { useNavigate } from "react-router-dom";

const LeaderFour = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate("/leaderfive");
          }}
        >
          다음페이지로(리더장5 로ㄱㄱ)
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

export default LeaderFour;
