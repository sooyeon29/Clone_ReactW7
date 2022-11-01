import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import kakao from "../style/img/kakao.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function SignupModal({ setSignupModalOpen }) {
  const navigate = useNavigate();
  // 모달 끄기
  const closeModal = () => {
    setSignupModalOpen(false);
  };

  const onlogin = () => {
    navigate("/addmain");
  };

  const [data, setData] = useState([]);

  const initialState = {
    nickname: "",
    password: "",
    confirm: "",
    email: "",
    address: "",
  };
  const [personal, setPersonal] = useState(initialState);

  console.log(personal);

  const onPersonalHandler = (e) => {
    //    personal.id === "" ? alert("아이디를 입력하세요!") : <></>;
    //    if (personal.nickname.length === 1 && personal.nickname.length <= 3) {
    //      alert("닉네임이 너무 짧습니다");
    //      return;
    //    }
    //    if (
    //      personal.id === "" ||
    //      personal.nickname === "" ||
    //      personal.password === "" ||
    //      personal.confirm === "" ||
    //      personal.address === "" ||
    //      personal.email === ""
    //    ) {
    //      return alert("모든 항목을 입력해주세요");
    //    } else {
    //      console.log("클릭", personal);
    //      RandomsApi.personal({
    //        nickname: personal.nickname,
    //        password: personal.password,
    //        confirm: personal.confirm,
    //        email: personal.email,
    //        address: personal.address,
    //      })
    //        .then((res) => {
    //          alert(res.data.message);
    //          setPersonal(initialState);
    //          navigate(-1);
    //        })
    //        .catch((error) => {
    //          alert(error);
    //        });
  };

  return (
    <StWrap>
      <StContainer>
        <StWraps>
          <Stxbutton onClick={() => navigate(-1)}>❌</Stxbutton>
          <h1>개인정보 수정</h1>
          <p>{data.message}</p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onPersonalHandler(personal);
            }}
          >
            <Stbox>
              <p>닉네임 </p>
              <Stinput
                onChange={(ev) => {
                  const { value } = ev.target;
                  setPersonal({
                    ...personal,
                    nickname: value,
                  });
                }}
                placeholder="수정할 닉네임을 입력하세요."
              ></Stinput>
              {personal.nickname.length === 0 ? (
                <div></div>
              ) : personal.nickname.length <= 2 ||
                personal.nickname.length >= 11 ? (
                <ErrorMessage>
                  닉네임은 대,소문자 또는 숫자를 포함한 3자 이상 10글자 이하로
                  적어주세요
                </ErrorMessage>
              ) : (
                <div></div>
              )}
            </Stbox>
            <Stbox>
              <p>비밀번호 </p>
              <Stinput
                onChange={(ev) => {
                  const { value } = ev.target;
                  setPersonal({
                    ...personal,
                    password: value,
                  });
                }}
                placeholder="수정할 비밀번호를 입력하세요."
              ></Stinput>
              {personal.password.length === 0 ? (
                <div></div>
              ) : personal.password
                  .replace(" ", "")
                  .includes(personal.nickname) ? (
                <ErrorMessage>
                  패스워드에 닉네임이 포함되어있습니다.
                </ErrorMessage>
              ) : personal.password.length <= 3 ||
                personal.password.length >= 30 ? (
                <ErrorMessage>
                  비밀번호는 대,소문자 또는 숫자를 포함한 4자 이상 30글자 이하로
                  적어주세요
                </ErrorMessage>
              ) : (
                <></>
              )}
            </Stbox>
            <Stbox>
              <p>비밀번호 확인 </p>
              <Stinput
                onChange={(ev) => {
                  const { value } = ev.target;
                  setPersonal({
                    ...personal,
                    confirm: value,
                  });
                }}
                placeholder="비밀번호를 다시 한번 입력해주세요."
              ></Stinput>
              {personal.password.length === 0 ? (
                <div></div>
              ) : personal.password !== personal.confirm ? (
                <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
              ) : (
                <div></div>
              )}
            </Stbox>
            <Stbox>
              <p>이메일 </p>
              <Stinput
                onChange={(ev) => {
                  const { value } = ev.target;
                  setPersonal({
                    ...personal,
                    email: value,
                  });
                }}
                placeholder="수정할 이메일을 입력하세요."
              ></Stinput>
              {personal.email.length === 0 ? (
                <div></div>
              ) : !personal.email.includes("@") ||
                !personal.email.includes(".") ? (
                <ErrorMessage>
                  @를 포함한 정상적인 이메일을 써주세요.
                </ErrorMessage>
              ) : (
                <div></div>
              )}
            </Stbox>
            <Stbox>
              <p>주소 </p>
              <Stinput
                onChange={(ev) => {
                  const { value } = ev.target;
                  setPersonal({
                    ...personal,
                    address: value,
                  });
                }}
                placeholder="수정할 주소를 입력하세요."
              ></Stinput>
            </Stbox>
            <Button size="md">수정 완료 </Button>
          </form>
        </StWraps>
      </StContainer>
      <StBackground onClick={closeModal} />
    </StWrap>
  );
}
export default SignupModal;

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

const StWraps = styled.div`
  > h1 {
    font-weight: bold;
  }
  > p {
    color: red;
    font-family: "LeferiPoint-WhiteObliqueA";
  }
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px 10px 50px;
  height: 100%;
  text-align: center;
`;
const Stbox = styled.div`
  border: 1px solid #9c9c9c38;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 0 10px 0px 10px;
  > p {
    text-align: left;
  }
`;
const Stinput = styled.input`
  font-family: "LeferiPoint-WhiteObliqueA";
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 0px 0 20px 0;
  width: 100%;
  min-width: 300px;
  font-family: "MonoplexKR-Regular";
`;

const Stxbutton = styled.div`
  margin-top: 10px;
  display: flex;
  margin-left: 340px;
  cursor: pointer;
`;
const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
  font-family: "MonoplexKR-Regular";
`;
