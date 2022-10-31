import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import usePostOtt from "../hooks/usePostOtt";
import netflix from "../style/img/netflix.png";
import wavve from "../style/img/wavve.png";
import watcha from "../style/img/watcha.png";
import laftel from "../style/img/laftel.png";
import tving from "../style/img/tving.png";
import disney from "../style/img/disney.png";
import { lighten } from "polished";

const PickMyOtt = ({ toggle, setToggle }) => {
  // 각 ott onClickHandler
  const [height, ChooseNetflix] = usePostOtt();
  const [ChooseWavve] = usePostOtt();
  const [ChooseWatcha] = usePostOtt();
  const [ChooseLaftel] = usePostOtt();
  const [ChooseTving] = usePostOtt();
  const [ChooseDisney] = usePostOtt();

  // 각 ott별 정보
  const Netflix = {
    ottService: "Netflix",
    price: 17000,
    hostCommision: 490,
    memberCommision: 990,
    isClick: false,
  };
  const Wavve = {
    ottService: "Wavve",
    price: 13900,
    hostCommision: 490,
    memberCommision: 990,
    isClick: false,
  };
  const Watcha = {
    ottService: "Watcha",
    price: 12900,
    hostCommision: 490,
    memberCommision: 990,
    isClick: false,
  };
  const Laftel = {
    ottService: "Laftel",
    price: 14900,
    hostCommision: 490,
    memberCommision: 990,
    isClick: false,
  };
  const Tving = {
    ottService: "Tving",
    price: 13900,
    hostCommision: 490,
    memberCommision: 990,
    isClick: false,
  };
  const Disney = {
    ottService: "Disney",
    price: 9900,
    hostCommision: 490,
    memberCommision: 990,
    isClick: false,
  };
  // 선택한 ott를 리덕스에서 꺼내옴
  const globalOtt = useSelector((state) => state.addparty.addparty);
  console.log(globalOtt);
  // 리덕스에서 꺼낸 ott중 isclick값이 true 인것만 선택
  const clickedglobalOtt = globalOtt.filter((ott) => ott.isClick === true);
  console.log(clickedglobalOtt);

  //   const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <WrapAll boxheight={height}>
        <Title>보고싶은 OTT를 선택해주세요</Title>
        <OttWrap>
          <Ott>
            <Icon onClick={() => ChooseNetflix(Netflix)}>
              <img alt="" src={netflix} width="40" />
              넷플릭스
            </Icon>
            <Match>✓ 즉시매칭 가능</Match>
          </Ott>
          <Ott>
            <Icon onClick={() => ChooseWavve(Wavve)}>
              <img alt="" src={wavve} width="40" />
              웨이브
            </Icon>
            <Match>✓ 즉시매칭 가능</Match>
          </Ott>
          <Ott>
            <Icon onClick={() => ChooseWatcha(Watcha)}>
              {" "}
              <img alt="" src={watcha} width="40" />
              왓차
            </Icon>
            <Match>✓ 즉시매칭 가능</Match>
          </Ott>
          <Ott>
            <Icon onClick={() => ChooseLaftel(Laftel)}>
              <img alt="" src={laftel} width="40" />
              라프텔
            </Icon>
            <Match>✓ 즉시매칭 가능</Match>
          </Ott>
          <Ott>
            <Icon onClick={() => ChooseTving(Tving)}>
              {" "}
              <img alt="" src={tving} width="40" />
              티빙
            </Icon>
            <Match>✓ 즉시매칭 가능</Match>
          </Ott>
          <Ott>
            <Icon onClick={() => ChooseDisney(Disney)}>
              <img alt="" src={disney} width="40" />
              디즈니+
            </Icon>
            <Match>✓ 즉시매칭 가능</Match>
          </Ott>
        </OttWrap>
        <OttPrice>
          {clickedglobalOtt.map((clickOtt) => {
            return (
              <HideBox>
                <PriceBox key={clickOtt.id}>
                  💵
                  <Mymoney>
                    {clickOtt.ottService}프리미엄
                    <Howmuch>
                      <span>{clickOtt.price}원</span> → {clickOtt.price / 4}원
                    </Howmuch>
                  </Mymoney>
                  <Mymoney>
                    수수료
                    <Howmuch>
                      파티장{clickOtt.hostCommision} | 파티원
                      {clickOtt.memberCommision}
                    </Howmuch>
                  </Mymoney>
                </PriceBox>
              </HideBox>
            );
          })}
          <button
            // onClick={() => {
            //   navigate("/addone");
            // }}
            onClick={clickedToggle}
            toggle={toggle}
          >
            다음
          </button>
        </OttPrice>
        {/* <p>{window.sessionStorage.getItem("myott")}</p> */}
      </WrapAll>
    </>
  );
};

export default PickMyOtt;

const WrapAll = styled.div`
  width: 100%;
  /* height: 320px; */
  height: ${(props) => (props.boxheight ? "auto" : "315px")};
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
const OttWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-top: 10px;
`;
const Ott = styled(OttWrap)`
  display: flex;
  flex-direction: column;
  flex: 1 0 28%;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
const Icon = styled.button`
  display: flex;
  flex-direction: column;
  height: 75px;
  -webkit-box-align: center;
  align-items: center;
  background-color: var(--gray-050);
  border-radius: 8px;
  cursor: pointer;
  border: none;
  box-sizing: border-box;
  position: relative;
  padding-top: 7px;
  z-index: 0;
  &:hover {
    background-color: ${lighten(0.3, "#4DCA9A")};
    /* opacity: 0.2; */
    /* z-index: 999; */
  }
`;
const Match = styled(OttWrap)`
  /* 즉시매칭가능 */
  height: 34px;
  transition: height 0.3s ease-out 0s;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* display: block; */
  font-size: 12px;
  line-height: 18px;
  margin: 0px;
  padding: 0px;
  font-weight: bold;
  color: var(--primary-600);
`;
const OttPrice = styled.div`
  /* overflow: hidden; */
`;
const HideBox = styled(OttPrice)`
  margin: 20px auto;
  padding: 10px;
  flex-direction: row;
  width: 100%;
  max-width: 311px;
  -webkit-box-align: center;
  align-items: center;
  background-color: var(--gray-050);
  border: 1px solid var(--gray-200);
  box-sizing: border-box;
  border-radius: 16px;
  display: flex;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 5px;
`;
const Mymoney = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  color: var(--gray-700);
  margin: 0 12px;
`;
const Howmuch = styled.div`
  font-size: 11px;
  line-height: 15px;

  font-weight: normal;
  color: var(--gray-600);
  span {
    text-decoration: line-through;
    color: var(--gray-400);
    font-size: 11px;
    line-height: 15px;
  }
`;
