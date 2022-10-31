import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import kakao from "../style/img/kakao.png";
// import test from "../style/img/test.JPG";
import MyRole from "./myRole";
import useToggle from "../hooks/useToggle";

const PickRole = ({ toggle }) => {
  const [toggle2, clickedToggle2] = useToggle();

  // const [isHost, setIsHost] = useState(false);

  return (
    <>
      {!toggle2 && (
        <MyRole />
        // <WrapAll>
        //   <Title>이용 역할을 선택해주세요</Title>
        //   <LeaderOrMember>
        //     <Leader>파티장</Leader>
        //     <Member onClick={() => setIsHost(!isHost)}>파티원</Member>
        //   </LeaderOrMember>
        //   <Info>
        //     <img alt="" src={test} width="100%" />
        //     <InfoDiv>
        //       <span>4명에서 같이보면 4배 더 저렴하니깐!</span>
        //       <br />
        //       <span>파티장으로 시작하고 파티원으로 모집해보세요.</span>
        //       <div>
        //         <button>
        //           다음
        //           <FontAwesomeIcon
        //             style={{
        //               color: "black",
        //               marginLeft: "10px",
        //             }}
        //             icon={faArrowRight}
        //             beat
        //           />
        //         </button>
        //       </div>
        //     </InfoDiv>
        //   </Info>
        //   <Event>
        //     <div>💰'정산 보장제'를 적용받아요</div>
        //     <li>
        //       파티원이 구해지지 않아도 <span>정산받는 금액 100% 보장</span>
        //     </li>
        //   </Event>
        //   <Event>
        //     <div>🎁파티원 직접초대시 혜택을 받아요</div>
        //     <li>
        //       파티원을 1명이상 직접초대하면 <span>수수료 서로할인</span> 적용
        //     </li>
        //     <span>
        //       (파티장 <span>490원</span>→ 0원 | 초대받은 파티원{" "}
        //       <span>990원</span>→ 490원
        //     </span>
        //   </Event>
        //   <button onClick={clickedToggle2} toggle={toggle2}>
        //     파티장으로 월 0000원에 이용하기
        //   </button>
        // </WrapAll>
      )}
      {/* {!toggle2 && !isHost(<div>파티원일때</div>)} */}
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

            <button onClick={clickedToggle2} toggle={toggle2}>
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
