import styled from "styled-components";
// import tving from "../style/img/tving.png";

const PickRole = () => {
  // const PickRole = ({ toggle, setToggle }) => {
  //   const clickedToggle = () => {
  //     setToggle((prev) => !prev);
  //   };
  return (
    <>
      <WrapAll>
        <Title>이용 역할을 선택해주세요</Title>
        <LeaderOrMember>
          <Leader>파티장</Leader>
          <Member>파티원</Member>
        </LeaderOrMember>
        <Info>
          이미지 넣기
          <hr></hr>
          4명에서 같이보면 4배 더 저렴하니깐!
          <br></br>
          파티장으로 시작하고 파티원으로 모집해보세요.
          <button>다음</button>
        </Info>
        <Event>정산보장제를 적용받아요</Event>
        <Event>파티원직접초대시 혜택을 받아요</Event>
        <button>파티장으로 월 0000원에 이용하기</button>
      </WrapAll>
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
const LeaderOrMember = styled.div``;
const Leader = styled.button``;
const Member = styled.button``;
const Info = styled.div`
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid var(--gray-100);
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
  background: var(--gray-050);
`;
const Event = styled.div`
  padding: 15px;
  background-color: var(--gray-050);
  border: 1px solid var(--gray-200);
  box-sizing: border-box;
  border-radius: 16px;
`;
