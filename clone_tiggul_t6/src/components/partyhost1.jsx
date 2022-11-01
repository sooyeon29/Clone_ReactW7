import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import tving from "../style/img/tving.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../elements/buttons";

const PartyHost1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <LeaderHead>
        <button onClick={() => navigate(`/addmain`)}>
          <FontAwesomeIcon
            style={{
              color: "#646F7C",
              fontSize: "17",
            }}
            icon={faChevronLeft}
          />
        </button>
        <div>
          <img alt="" src={tving} width="16" />
          티빙 파티 생성
        </div>
        <button onClick={() => navigate(`/`)}>
          <FontAwesomeIcon
            style={{
              color: "#646F7C",
              fontSize: "20",
            }}
            icon={faXmark}
          />
        </button>
      </LeaderHead>
      <CheckPrice>
        <Title>매월 정산받는 금액을 확인해주세요</Title>
        <PriceBox>
          <PricePic>
            <OttPrice>
              <div>티빙 프리미엄</div> 13,900원/월
            </OttPrice>
            <ColorBox>
              <PriceDiv>
                <span>3,475</span>
                <div>3,475</div>
                <div>3,475</div>
                <div>3,475</div>
              </PriceDiv>
              <div>
                <button>티빙 이용권 금액이 다른가요?</button>
              </div>
            </ColorBox>
          </PricePic>
          <MyPrice>
            <div>
              <div>
                <div>.</div>
                <span>내 1/4 부담금</span>
              </div>
              <div>3,475원/월</div>
            </div>
            <div>
              <div>
                <div>.</div>
                <span>파티원 3명의 몫</span>
              </div>
              <div>10,425원/월</div>
            </div>
          </MyPrice>
        </PriceBox>
        <TotalPriceBox>
          <div>
            피클플러스 수수료
            <div>
              <span>-990원</span>-490원
            </div>
          </div>
          <span>*파티장 할인 적용완료</span>
          <Line></Line>
          <form>
            <div>
              매월 정산받는 금액<span>+9,935원</span>
            </div>
            <span>(파티원 3명의 몫 - 피클플러스 수수료)</span>
          </form>
        </TotalPriceBox>
      </CheckPrice>
      <Button>다음</Button>
    </>
  );
};

export default PartyHost1;

const LeaderHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  width: 100%;
  max-width: 640px;
  height: 60px;
  margin-bottom: 8px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    img {
      margin-right: 10px;
    }
  }
  button {
    border: 0px;
    border-radius: 30px;
    background-color: var(--gray-100);
    width: 24px;
  }
`;
const CheckPrice = styled.div`
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
const PriceBox = styled.div`
  padding: 15px;
  background-color: var(--gray-050);
  border: 1px solid var(--gray-200);
  box-sizing: border-box;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;
const PricePic = styled.div`
  margin: auto 24px;
  padding: 20px 16px;
  transform: translateZ(0px);
  border: 1px solid var(--gray-100);
  border-radius: 16px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  button {
    /* position: absolute; */
    width: fit-content;
    margin: 12px auto 0px auto;
    text-decoration-line: underline;
    color: var(--gray-700);
    cursor: pointer;
    background-color: transparent;
    border: 0px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;
const TotalPriceBox = styled.div`
  padding: 15px;
  background-color: var(--gray-050);
  border: 1px solid var(--gray-200);
  box-sizing: border-box;
  border-radius: 16px;
  color: var(--gray-600);
  font-size: 14px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    span {
      color: var(--gray-300);
      text-decoration: line-through;
      font-size: 14px;
    }
  }
  span {
    font-size: 11px;
    font-weight: bold;
    color: var(--primary-500);
    display: flex;
    justify-content: flex-end;
  }
  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    display: block;
    div {
      font-size: 18px;

      font-weight: bold;
      color: var(--gray-700);
      span {
        font-size: 18px;
        text-decoration: none;
        font-weight: bold;
        color: var(--gray-700);
      }
    }
    span {
      display: block;
      font-size: 11px;
      line-height: 15px;
      margin-top: 5px;
      padding: 0%;
      color: var(--gray-600);
    }
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--gray-200);
  margin: 16px auto;
`;
const OttPrice = styled.div`
  font-size: 13px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceDiv = styled.div`
  display: flex;
  flex-direction: row;

  div {
    flex-basis: 0px;
    flex-grow: 1;
    background-color: var(--yellow-400);
    color: var(--white);
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    border: 1px solid white;
    text-align: center;
    height: 18px;
  }
  span {
    flex-basis: 0px;
    flex-grow: 1;
    background-color: var(--blue-500);
    color: var(--white);
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    border: 1px solid white;
    text-align: center;
    height: 18px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
const MyPrice = styled.div`
  margin-top: 16px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    font-weight: 400;
    color: var(--gray-700);
    div {
      span {
      }
      div {
        background-color: #1490ff;
        width: 10px;
        height: 10px;
        border: 1px;
        color: #1490ff;
        border-radius: 2px;
        margin-right: 10px;
      }
    }
  }
`;
