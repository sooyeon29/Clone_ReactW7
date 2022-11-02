import styled from "styled-components";
import kakao from "../style/img/kakao.png";
import React, { useRef, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie"; // useCookies import
import useInput from "../hooks/useInput";
import { MyOttApi } from "../tools/instance";

function LoginModal({ setLoginModalOpen }) {
  const navigate = useNavigate();
  // 모달 끄기
  const closeModal = () => {
    setLoginModalOpen(false);
  };

  const [loginid, onChangeId] = useInput("");
  const [loginpwd, onChangePwd] = useInput("");

  const formRef = useRef();
  const [tokens, setTokens] = useCookies(["Authorization"]); // 쿠키 훅

  //   console.log(typeof loginid);
  //   console.log(typeof loginpwd);

  const login = (e) => {
    // console.log(formRef.current.nickname.value);
    // console.log(formRef.current.password.value);

    e.preventDefault();
    MyOttApi.login({
      nickname: formRef.current.nickname.value,
      password: formRef.current.password.value,
    })
      .then((res) => {
        setTokens("Authorization", res.data.token);
        alert("로그인 성공!");
        setLoginModalOpen(false);
      })
      .catch((error) => {
        alert(error.response.data.Message);
        //console("로그인에러", error.response.data.Message);
        //console("로그인에러", error);
      });
  };

  return (
    <StWrap>
      <StContainer>
        <StWraps>
          <h1>로그인</h1>
          <form ref={formRef} onSubmit={login}>
            <div>
              <div>
                <Stinput
                  placeholder="아이디를 입력하세요."
                  id="nickname"
                  type="text"
                  minLength="1"
                  value={loginid}
                  onChange={onChangeId}
                />
              </div>
              <div>
                <Stinput
                  placeholder="비밀번호를 입력하세요."
                  id="password"
                  type="password"
                  minLength="1"
                  value={loginpwd}
                  onChange={onChangePwd}
                />
              </div>
            </div>
            <Button size="md" type="submit">
              로그인
            </Button>
          </form>
          <Link to="/PasswordEdit" style={{ textDecoration: "none" }}>
            <Stp> 비밀번호를 잊어버리셨나요?</Stp>
          </Link>
        </StWraps>
      </StContainer>
      <StBackground onClick={closeModal} />
    </StWrap>
  );
}
export default LoginModal;

const StWrap = styled.div`
  position: fixed;
  z-index: 40;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
`;

const StContainer = styled.div`
  position: fixed;
  width: 400px;
  left: 50%;
  top: 50vh;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  padding: 24px 24px 40px;
  background-color: var(--white);
  z-index: 42;
  box-sizing: border-box;
  display: block;
  > h4 {
    font-size: 20px;
    font-weight: 700;
    font-family: "SpoqaHanSansNeo-Regular";
  }
`;

const StBackground = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  background-color: var(--black);
  opacity: 0.8;
  z-index: 41;
  box-sizing: border-box;
  display: block;
`;

const StWraps = styled.div`
  > h1 {
    font-weight: bold;
  }

  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const Stinput = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0 30px 0;
  width: 100%;
  min-width: 300px;
  font-family: "MonoplexKR-Regular";
`;

const BtContain = styled.div`
  margin-bottom: 30px;
  margin-top: 10px;
`;

const Stp = styled.p`
  color: #626262;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  font-family: "LeferiPoint-WhiteObliqueA";
`;
const Button = styled.button`
  border-radius: 20px;
  border: none;
  background-color: #ffcd29;
  color: black;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  width: 145px;
  height: 45px;
  text-decoration-line: none;
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    color: white;
    cursor: pointer;
    scale: 95%;
  }
`;
