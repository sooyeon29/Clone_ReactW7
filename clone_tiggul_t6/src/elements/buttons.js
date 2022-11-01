import React from "react";
import styled from "styled-components";
import { darken } from "polished";

const Button = ({ children }) => {
  return (
    <>
      <Btn>{children}</Btn>
    </>
  );
};

export default Button;

const Btn = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 15px 16px;
  background-color: var(--primary-500);
  color: var(--white);
  border-radius: 8px;
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  font-family: SpoqaHanSansNeo;
  border: none;
  margin-top: 30px;
  &:hover {
    background-color: ${darken(0.01, "#4DCA9A")};
  }
`;
