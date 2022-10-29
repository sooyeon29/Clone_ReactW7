import React from "react";
import styled from "styled-components";
import Header from "../elements/header";

const Layout = ({ children }) => {
  return (
    <>
      <Wrap>
        <Header />
        <Container>{children}</Container>
      </Wrap>
    </>
  );
};

export default Layout;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--gray-050);
`;

const Container = styled.div`
  width: 100%;
  max-width: 640px;
  box-sizing: border-box;
  display: block;
`;
