import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <StNav>
        <StWrap>
          <StLogoWrap>
            <StLogo
              onClick={() => {
                navigate(`/`);
              }}
            >
              {" "}
              로고(홈으로이동)
            </StLogo>
          </StLogoWrap>
          <StButtonsWrap>
            <StButtons>
              <StButton
                onClick={() => {
                  navigate(`/`);
                }}
              >
                홈(홈으로이동)
              </StButton>
              <StButton
                onClick={() => {
                  navigate(`/addmain`);
                }}
              >
                파티추가
              </StButton>
              <StButton
                onClick={() => {
                  navigate(`/myone`);
                }}
              >
                MY파티
              </StButton>
            </StButtons>
          </StButtonsWrap>
          <StMypageWrap>
            <StMypage>마이페이지</StMypage>
          </StMypageWrap>
        </StWrap>
      </StNav>
    </>
  );
};

export default Header;

const StNav = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  background-color: var(--white);
  backdrop-filter: blur(20px);
  z-index: 5;
`;

const StWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 1080px;
  height: 60px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

const StLogoWrap = styled.div`
  width: 169px;
  box-sizing: border-box;
  display: block;
`;

const StLogo = styled.a`
  display: block;
  cursor: pointer;
  width: 86px;
  height: 28px;
`;

const StButtonsWrap = styled.nav`
  display: flex;
  flex-direction: row;
`;

const StButtons = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

const StButton = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
`;
const StMypageWrap = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  width: 169px;
`;

const StMypage = styled.div`
  cursor: pointer;
  width: 32;
  height: 32;
  fill: var(--gray-900);
  &:hover {
    fill: var(--primary-600);
  }
`;
