import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../style/img/logo.svg";
import { useCookies } from "react-cookie";
import LoginModal from "../components/loginModal";
import SignupModal from "../components/signupModal";

const Header = (props) => {
  const [show, setShow] = useState(true);
  const [myshow, setMyShow] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["Authorization"]);

  const logout = () => {
    removeCookie("Authorization");
    alert("로그아웃 되었습니다.");
    window.location.replace(`/`);
  };

  useEffect(() => {
    if (document.cookie !== "") {
      setMyShow(true);
      setShow(false);
    } else {
      setMyShow(false);
      setShow(true);
    }
  });

  const [LoginModalOpen, setLoginModalOpen] = useState(false);
  const showLModal = () => {
    setLoginModalOpen(true);
  };
  const [SignupModalOpen, setSignupModalOpen] = useState(false);
  const showSModal = () => {
    setSignupModalOpen(true);
  };
  // const [cookies, setCookie, removeCookie] = useCookies(["Authorization"]);

  // setCookie(
  //   "Authorization",
  //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOnsidXNlcklkIjoiMSJ9LCJpYXQiOjE2NjcyOTM2ODl9.sUHtaChcRVV - P2TkDhEresKdAoFx44n6WvqxodLaLjs"
  // );

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
              <img alt="" src={logo} />
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
                    navigate(`/addmain`);
                  }}
                >
                  파티추가
                </Sta>
              </StButton>
              <StButton>
                <Sta
                  onClick={() => {
                    navigate(`/myone`);
                  }}
                >
                  MY파티
                </Sta>
              </StButton>
            </StButtons>
          </StButtonsWrap>
          <StMypageWrap>
            {show && (
              <StUserbox>
                <StLogin onClick={showLModal}>로그인</StLogin>
                {LoginModalOpen && (
                  <LoginModal setLoginModalOpen={setLoginModalOpen} />
                )}
                <StLine2></StLine2>
                <StLogin onClick={showSModal}>회원가입</StLogin>
                {SignupModalOpen && (
                  <SignupModal setSignupModalOpen={setSignupModalOpen} />
                )}
              </StUserbox>
            )}
            {myshow && (
              <StUserbox>
                <StLogin>Mypage</StLogin>
                <StLogin onClick={logout}>Logout</StLogin>
              </StUserbox>
            )}
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
