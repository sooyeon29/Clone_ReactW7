import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../elements/header";

const AddMain = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div>
        <button
          onClick={() => {
            navigate("/addone");
          }}
        >
          파티추가
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

export default AddMain;
