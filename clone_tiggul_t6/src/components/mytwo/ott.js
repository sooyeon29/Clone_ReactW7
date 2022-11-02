import styled from "styled-components";

const Ott = () => {
  return (
    <Wrap>
      <Acount>프리미엄 파티</Acount>
      <Ready>
        <Img>
          <img style={{ transform: "scale(0.4)" }} src="/img/user.png" />
        </Img>
        <Color>티빙 프리미엄 이용권</Color> (4인공유) 구독중인 계정
      </Ready>
    </Wrap>
  );
};
export default Ott;

const Wrap = styled.div`
  padding: 15px;
  background-color: var(--gray-050);
  border: 1px solid var(--gray-200);
  box-sizing: border-box;
  border-radius: 16px;
  margin: 15px 0px 20px;
  display: block;
  font-size: 15px;
  line-height: 20px;
`;

const Acount = styled.div`
  font-weight: bold;
  color: black;
`;

const Ready = styled.div`
  display: block;
  font-size: 14px;
  line-height: 18px;
  margin: 7px;
  font-weight: normal;
  color: var(--gray-600);
  text-align: center;

  > img {
    padding: 0px;
    margin: 0px;
  }
`;

const Color = styled.div`
  font-weight: bold;
  color: var(--primary-600);
`;

const Img = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 50%;
`;
