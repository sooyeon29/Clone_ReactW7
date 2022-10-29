import React from "react";
import styled from "styled-components";
import Header from "./header";

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
  background-color: blue;
`;

const Container = styled.div`
  width: 100%;
  max-width: 640px;
  box-sizing: border-box;
  display: block;
`;
