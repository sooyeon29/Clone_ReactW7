import React from "react";
import { useNavigate } from "react-router-dom";
import ChooseOtt from "../../components/chooseott";
import Header from "../../elements/header";

const AddMain = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <ChooseOtt />
    </>
  );
};

export default AddMain;
