import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

function ModalBasic({ setModalOpen }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  //모달 바깥쪽 클릭시 닫기
  // const modalEl = useRef();
  // const [isOpen, setOpen] = useState(false);

  // const handleClickOutside = ({ target }) => {
  //   if (isOpen && !modalEl.current.contains(target)) setOpen(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("click", handleClickOutside);
  //   return () => {
  //     window.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  return (
    //<StWrap ref={modalEl}>
    <StWrap>
      <StContainer>
        <button onClick={closeModal}>X</button>
        <h4>로그인 | 회원가입</h4>
        <div></div>
        <StButton>
          <div>
            <h5>카카오로 시작하기</h5>
          </div>
        </StButton>
      </StContainer>
      <StBackground />
      <button onClick={closeModal}>X</button>
    </StWrap>
  );
}
export default ModalBasic;

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
  width: 328px;
  left: 50%;
  top: 950%;
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

const StButton = styled.div`
  border-radius: 12px;
  height: 45px;
  padding: 11px 0px 10px;
  background: rgb(254, 229, 0);
  > div {
    text-align: center;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    padding-left: 30%;
    > h5 {
      display: block;
      font-size: 16px;
      line-height: 22px;
      margin: 0px;
      font-weight: bold;
      color: var(--black);
      font-family: "SpoqaHanSansNeo-Regular";
    }
  }
`;
