import React from "react";
import styled from "styled-components";
import PartyHost1 from "../../components/partyhost1";

const LeaderOne = () => {
  return (
    <Wrap>
      <Container>
        <PartyHost1 />
      </Container>
    </Wrap>
  );
};

export default LeaderOne;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-color: var(--gray-050);
  position: absolute;
  z-index: -1;
  left: 0px;
  top: 0px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 640px;
  box-sizing: border-box;
  display: block;
`;
