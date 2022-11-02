import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import MyRole from "../addparty/myRole";
import useToggle from "../../hooks/useToggle";
import LoginModal from "../../components/loginmodal";
import { useState } from "react";
import Button from "../../elements/buttons";
import { useNavigate } from "react-router-dom";

const PickRole = () => {
  const [toggle, setToggle, clickedToggle] = useToggle();
  const [LoginModalOpen, setLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  const showLModal = () => {
    setLoginModalOpen(true);
  };
  const movePageHandler = () => {
    iAmLeader.isLeader && navigate(`/leaderone`);
    !iAmLeader.isLeader && navigate(`/memberone`);
  };

  const iAmLeader = JSON.parse(window.sessionStorage.getItem("isLeader"));
  console.log(iAmLeader);
  return (
    <>
      {!toggle && <MyRole toggle={toggle} clickedToggle={clickedToggle} />}
      {toggle && (
        <>
          <Before>
            <form>
              <div>
                <FontAwesomeIcon
                  style={{
                    color: "#4DCA9A",
                  }}
                  icon={faUser}
                />
              </div>
              <h4>
                {iAmLeader.isLeader ? "파티장으로 이용" : "파티원으로 이동"}
              </h4>
            </form>
            <button onClick={clickedToggle}>변경</button>
          </Before>
          <KakaoButton onClick={showLModal}>
            <FontAwesomeIcon
              style={{
                color: "#fdedb7",
                marginRight: "15",
              }}
              icon={faUser}
            />
            로그인하고 계속하기
          </KakaoButton>
          {LoginModalOpen && (
            <LoginModal setLoginModalOpen={setLoginModalOpen} />
          )}
          <Button onClick={movePageHandler}>
            {iAmLeader.isLeader ? "파티장으로 계속하기" : "파티원으로 계속하기"}
          </Button>
        </>
      )}
    </>
  );
};

export default PickRole;

const Before = styled.div`
  border: 1px solid var(--gray-100);
  border-radius: 16px;
  background-color: var(--white);
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  margin-top: 24px;
  color: var(--gray-600);
  form {
    /* margin: auto 15px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    div {
      margin: auto 15px;
      display: flex;
      /* flex-direction: row; */
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: var(--gray-200);
      color: var(--white);
      h4 {
        margin-left: 10px;
      }
    }
  }

  button {
    color: var(--gray-600);
    cursor: pointer;
    font-size: 13px;
    background-color: transparent;
    border: 0px;
    margin-right: 15px;
  }
`;
const KakaoButton = styled.button`
  height: 52px;
  padding: 11px 0px 10px;
  background: #ffcd2a;
  display: flex;
  /* -webkit-box-align: center; */
  align-items: center;
  /* -webkit-box-pack: center; */
  justify-content: center;
  width: 100%;
  border: 0px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-top: 32px;
  img {
    margin: auto 10px;
  }
`;
