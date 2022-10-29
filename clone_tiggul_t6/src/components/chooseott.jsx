import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import styled from "styled-components";
import usePostOtt from "../hooks/usePostOtt";

const ChooseOtt = () => {
  const navigate = useNavigate();
  // 각 ott onClickHandler
  const [ChooseNetflix] = usePostOtt();
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
  return (
    <>
      <WrapAll>
        <Title>보고싶은 OTT를 선택해주세요</Title>
        <OttWrap>
          <Ott>
            <Icon onClick={() => ChooseNetflix(Netflix)}>넷플릭스</Icon>
            <Match>즉시매칭가능</Match>
          </Ott>
          <Ott>
            <Icon onClick={() => ChooseWavve(Wavve)}>웨이브</Icon>
            <Match>즉시매칭가능</Match>
          </Ott>
          <Ott>
            <Icon onClick={() => ChooseWatcha(Watcha)}>왓차</Icon>
            <Match>즉시매칭가능</Match>
          </Ott>
          <Ott>
            <Icon onClick={() => ChooseLaftel(Laftel)}>라프텔</Icon>
            <Match>즉시매칭가능</Match>
          </Ott>
          <Ott>
            <Icon onClick={() => ChooseTving(Tving)}>티빙</Icon>
            <Match>즉시매칭가능</Match>
          </Ott>
          <Ott>
            <Icon onClick={() => ChooseDisney(Disney)}>디즈니+</Icon>
            <Match>즉시매칭가능</Match>
          </Ott>
        </OttWrap>
        <OttPrice>
          {clickedglobalOtt.map((clickOtt) => {
            return (
              <PriceBox>
                <div>
                  {clickOtt.ottService}프리미엄 {clickOtt.price}원 나의부담금
                  {clickOtt.price / 4}
                </div>
                <div>
                  수수료 파티장{clickOtt.hostCommision}|파티원
                  {clickOtt.memberCommision}
                </div>
              </PriceBox>
            );
          })}
        </OttPrice>
        <button
          onClick={() => {
            navigate("/addtwo");
          }}
        >
          다음
        </button>
      </WrapAll>
    </>
  );
};
export default ChooseOtt;

const WrapAll = styled.div`
  width: 100%;
  max-width: 640px;
  padding: 16px 16px;
  margin: auto;
  background-color: aqua;
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
  background-color: lightblue;
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
`;
const Match = styled(OttWrap)`
  height: 34px;
  animation: 0.3s ease-out 0s 1 normal none running cJoqxJ;
  transition: height 0.3s ease-out 0s;
  overflow: hidden;
`;
const OttPrice = styled.div`
  flex-direction: row;
  width: 100%;
  max-width: 311px;
  -webkit-box-align: center;
  align-items: center;
  padding: 12px;
  background-color: pink;
  margin: auto;
  div {
    display: flex;
    flex-direction: column;
  }
`;
const PriceBox = styled.div``;
