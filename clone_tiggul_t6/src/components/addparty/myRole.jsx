import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import test from "../../style/img/test.JPG";
import Button from "../../elements/buttons";

const MyRole = ({ toggle2, clickedToggle2 }) => {
  const [isLeader, setIsLeader] = useState(false);

  const LeaderHandler = () => {
    setIsLeader(!isLeader);
    const iAmLeader = { isLeader: isLeader };
    window.sessionStorage.setItem("isLeader", JSON.stringify(iAmLeader));
  };

  // 제이슨 스트링을 풀어주는 방법! JSON.parse
  const myOttName = JSON.parse(window.sessionStorage.getItem("getOtt")).name;
  console.log(myOttName.price);
  return (
    <>
      <WrapAll>
        <Title>이용 역할을 선택해주세요</Title>
        {!isLeader && (
          <>
            <LeaderOrMember>
              <Leader>파티장</Leader>
              <Member
                onClick={
                  LeaderHandler
                  // () => {
                  // return setIsLeader(!isLeader)
                  // const Leader = {name: isLeader}
                  // window.sessionStorage.setItem("isLeader", JSON.stringify(iAmLeader))
                  // }
                }
              >
                파티원
              </Member>
            </LeaderOrMember>
            <Info>
              <img alt="" src={test} width="100%" />
              <InfoDiv>
                <span>4명에서 같이보면 4배 더 저렴하니깐!</span>
                <br />
                <span>파티장으로 시작하고 파티원으로 모집해보세요.</span>
                <div>
                  <button>
                    다음
                    <FontAwesomeIcon
                      style={{
                        color: "black",
                        marginLeft: "10px",
                      }}
                      icon={faArrowRight}
                      beat
                    />
                  </button>
                </div>
              </InfoDiv>
            </Info>
            <Event>
              <div>💰'정산 보장제'를 적용받아요</div>
              <li>
                파티원이 구해지지 않아도 <span>정산받는 금액 100% 보장</span>
              </li>
            </Event>
            <Event>
              <div>🎁파티원 직접초대시 혜택을 받아요</div>
              <li>
                파티원을 1명이상 직접초대하면 <span>수수료 서로할인</span> 적용
              </li>
              <span>
                (파티장 <span>490원</span>→ 0원 | 초대받은 파티원{" "}
                <span>990원</span>→ 490원
              </span>
            </Event>
          </>
        )}
        {isLeader && (
          <>
            <LeaderOrMember>
              <Member
                onClick={
                  LeaderHandler
                  // () => setIsLeader(!isLeader)
                }
              >
                파티장
              </Member>
              <Leader>파티원</Leader>
            </LeaderOrMember>
            <NowMatch>
              🚀 지금 시작하면 대기시간 없이 <span> 즉시 매칭 </span> 가능!
            </NowMatch>
            <Info>
              <img alt="" src={test} width="100%" />
              <InfoDiv>
                <span>4명에서 같이보면 4배 더 저렴하니깐!</span>
                <br />
                <span>파티원으로 파티를 매칭받아보세요.</span>
                <div>
                  <button>
                    다음
                    <FontAwesomeIcon
                      style={{
                        color: "black",
                        marginLeft: "10px",
                      }}
                      icon={faArrowRight}
                      beat
                    />
                  </button>
                </div>
              </InfoDiv>
            </Info>
            <Event>
              <div>🚨 파티에 문제가 발생해도 즉시 해결해줘요</div>
              <li>
                파티 문제 발생시 <span>남은 기간만큼 100% 환불</span> 가능
              </li>
              <li>
                파티가 해체돼도 <span>최우선순위</span>로 새로운 파티 재매칭
              </li>
              <li>
                365일 연중무휴 <span>고객센터</span> 운영중
              </li>
            </Event>
          </>
        )}
        <Button onClick={clickedToggle2} toggle={toggle2}>
          {!isLeader
            ? `파티장으로 월 ${myOttName.price / 4}원에 이용하기`
            : `파티원으로 월 ${myOttName.price / 4}원에 이용하기`}
        </Button>
      </WrapAll>
    </>
  );
};

export default MyRole;

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
  width: 128px;
  height: 100%;
  text-align: center;
  align-items: center;
  cursor: pointer;
  border: 0px;
`;
const NowMatch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 63px;
  background-color: var(--gray-050);
  border: 1px solid var(--gray-100);
  margin-bottom: 20px;
  font-size: 13px;
  color: var(--gray-700);
  span {
    color: var(--primary-600);
    font-weight: bold;
  }
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
