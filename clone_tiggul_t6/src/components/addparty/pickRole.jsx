import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import kakao from "../../style/img/kakao.png";
import MyRole from "../addparty/myRole";
import useToggle from "../../hooks/useToggle";

const PickRole = () => {
  const [toggle, setToggle, clickedToggle] = useToggle();
  const iAmLeader = JSON.parse(
    window.sessionStorage.getItem("isLeader")
  ).isLeader;
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
              <h4>{iAmLeader ? "파티장으로 이용" : "파티원으로 이동"}</h4>
            </form>
            <button onClick={clickedToggle} setToggle={setToggle}>
              변경
            </button>
          </Before>
          <KakaoButton>
            <img alt="" src={kakao} width="24" />
            카카오로 계속하기
          </KakaoButton>
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
  background: rgb(254, 229, 0);
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
