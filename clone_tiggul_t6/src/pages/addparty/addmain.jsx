import React from "react";
import { useNavigate } from "react-router-dom";
import ChooseOtt from "../../components/chooseott";
import Layout from "../../elements/layout";

const AddMain = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <ChooseOtt />
      </Layout>
    </>
  );
};

export default AddMain;
