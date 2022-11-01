import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import kakao from "../../style/img/kakao.png";
import MyRole from "../addparty/myRole";
import useToggle from "../../hooks/useToggle";

const PickRole = () => {
  const [toggle2, setToggle2, clickedToggle2] = useToggle();

  return (
    <>
      {!toggle2 && <MyRole toggle2={toggle2} clickedToggle2={clickedToggle2} />}
      {toggle2 && (
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
              <h4>파티장으로 이용</h4>
            </form>
            <button onClick={clickedToggle2} setToggle2={setToggle2}>
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

const WrapAll = styled.div`
  width: 100%;
  max-width: 640px;
  padding: 16px 16px;
  margin: 24px auto;
  background-color: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
  border-radius: 15px;
  overflow: hidden;
`;
const Title = styled.div`
  display: block;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  margin: auto;
  color: var(--gray-800);
`;
const LeaderOrMember = styled.div`
  display: flex;
  height: 38px;
  justify-content: center;
  /* position: relative; */
  z-index: 1;
  width: 256px;
  /* height: 100%; */
  background-color: var(--gray-050);
  border: 1px solid var(--gray-100);
  /* padding: 0px; */
  border-radius: 8px;
  /* box-sizing: border-box; */
  margin: 28px auto 20px auto;
`;
const Leader = styled.button`
  z-index: 2;
  width: 126px;
  height: 100%;
  background-color: var(--white);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--gray-200);
  border-radius: 7px;
  border: 0px;
`;
const Member = styled.button`
  /* z-index: 2;
  width: 126px;
  height: 100%;
  background-color: var(--white);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--gray-200);
  border-radius: 7px;
  border: 0px; */
  width: 128px;
  height: 100%;
  text-align: center;
  align-items: center;
  cursor: pointer;
  border: 0px;
`;
const Info = styled.div`
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid var(--gray-100);
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
  background: var(--gray-050);
  margin-bottom: 20px;
  img {
    object-fit: cover;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
`;

const InfoDiv = styled.div`
  padding: 12px 11px;
  background-color: var(--white);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  span {
    /* display: block; */
    font-size: 13px;
    /* line-height: 20px; */
    /* margin: 0px; */
    font-weight: normal;
    color: var(--gray-600);
  }
  div {
    /* position: absolute; */
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
    button {
      display: flex;
      /* -webkit-box-align: center; */
      align-items: center;
      visibility: visible;
      width: 69px;
      height: 28px;
      background-color: var(--gray-100);
      border-radius: 16px;
      border: 0px;
      cursor: pointer;
      padding: 10px;
    }
  }
`;

const Event = styled.div`
  padding: 15px;
  background-color: var(--gray-050);
  border: 1px solid var(--gray-200);
  box-sizing: border-box;
  border-radius: 16px;
  margin-bottom: 20px;
  div {
    font-size: 13px;
    font-weight: bold;
    color: var(--gray-700);
  }
  li {
    font-size: 12px;
    font-weight: normal;
    color: var(--gray-600);
    span {
      color: var(--primary-600);
      font-weight: bold;
    }
  }
  span {
    font-size: 11px;
    color: var(--gray-500);
    span {
      color: var(--gray-300);
      text-decoration: line-through;
    }
  }
`;
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
        margin-left: 15px;
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
