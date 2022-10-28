import React from "react";
import { useNavigate } from "react-router-dom";

const MyTwo = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        {" "}
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

export default MyTwo;
