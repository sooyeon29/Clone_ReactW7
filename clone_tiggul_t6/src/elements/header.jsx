import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../style/img/logo.svg";
import ModalBasic from "../components/loginmodal";

const Header = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

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
              <img src={logo} />
            </StLogo>
          </StLogoWrap>
          <StButtonsWrap>
            <StButtons>
              <StButton>
                <Sta
                  onClick={() => {
                    navigate(`/`);
                  }}
                >
                  홈
                </Sta>
              </StButton>
              <StButton>
                <Sta
                  onClick={() => {
                    navigate(`/`);
                  }}
                >
                  파티추가
                </Sta>
              </StButton>
              <StButton>
                <Sta
                  onClick={() => {
                    navigate(`/`);
                  }}
                >
                  MY파티
                </Sta>
              </StButton>
            </StButtons>
          </StButtonsWrap>
          <StMypageWrap>
            <StUserbox>
              <StLogin onClick={showModal}>로그인</StLogin>
              {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
              <StLine2></StLine2>
              <StLogin>회원가입</StLogin>
            </StUserbox>
          </StMypageWrap>
        </StWrap>
        <Stline />
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
const Stline = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--gray-100);
  box-sizing: border-box;
  display: block;
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
  margin-bottom: 20px;

  > img {
    display: block;
    cursor: pointer;
    width: 106px;
    height: 48px;
  }
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
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const StButton = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
`;

const Sta = styled.a`
  padding: 12px;
  margin-right: 22px;
  font-size: 18px;
  line-height: 24px;
  font-weight: normal;
  color: var(--gray-700);
  cursor: pointer;
  border-radius: 10px;
  text-decoration: none;
  font-family: "SpoqaHanSansNeo-Regular";

  &:focus {
    font-weight: bold;
  }
  &:active {
    font-weight: bold;
  }
  &:hover {
    background-color: var(--gray-100);
  }
`;
const StMypageWrap = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  width: 169px;
`;

const StUserbox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 169px;
  box-sizing: border-box;
`;

const StLogin = styled.button`
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  margin: 0px;
  padding: 12px;
  color: var(--gray-600);
  cursor: pointer;
  border-radius: 10px;
  border: none;
  font-family: SpoqaHanSansNeo;
  background-color: var(--white);
  &:hover {
    background-color: var(--gray-100);
  }
`;
const StLine2 = styled.div`
  width: 1px;
  height: 24px;
  background-color: rgb(196, 196, 196);
  margin: 0px 8px;
  display: block;
  box-sizing: border-box;
`;