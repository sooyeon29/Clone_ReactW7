import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../elements/layout";
import MypartyCard from "../../components/mypartycard";
import { useDispatch, useSelector } from "react-redux";
import { MyOttApi } from "../../tools/instance";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

const MyOne = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [partys, setPartys] = useState([]);

  useEffect(() => {
    MyOttApi.getmyparty().then((res) => {
      //console.log(res.data.data);
      setPartys(res.data.data);
    });
  }, []);

  // console.log(partys);
  // console.log(partys[0].ottService);

  if (!partys) {
    return null;
  }
  let pricesum = 0;
  let price = 0;

  for (let i = 0; i < partys.length; i++) {
    if (partys[i].ottService === "Netflix") {
      price += 43500;
    } else if (partys[i].ottService === "Wavve") {
      price += 35750;
    } else if (partys[i].ottService === "Watcha") {
      price += 33250;
    } else if (partys[i].ottService === "Laftel") {
      price += 38250;
    } else if (partys[i].ottService === "DisneyPlus") {
      price += 25750;
    } else if (partys[i].ottService === "Tving") {
      price += 35750;
    } else {
      return;
    }
  }
  for (let i = 0; i < partys.length; i++) {
    if (partys[i].ottService === "Netflix") {
      pricesum += 170000;
    } else if (partys[i].ottService === "Wavve") {
      pricesum += 139000;
    } else if (partys[i].ottService === "Watcha") {
      pricesum += 129000;
    } else if (partys[i].ottService === "Laftel") {
      pricesum += 149000;
    } else if (partys[i].ottService === "DisneyPlus") {
      pricesum += 99000;
    } else if (partys[i].ottService === "Tving") {
      pricesum += 139000;
    } else {
      return;
    }
  }

  return (
    <Layout>
      <StDiv />
      <StContainer>
        {partys?.map((party) => {
          return <MypartyCard key={party.id} partyData={party} />;
        })}
        <StAddPartyWrap
          onClick={() => {
            navigate("/addmain");
          }}
        >
          <div>
            <StPlus>
              <FontAwesomeIcon
                style={{
                  color: "#AEB4BF",
                }}
                icon={faCirclePlus}
              />
            </StPlus>
            <div />
            <StAddParty>
              <h3>파티 추가</h3>
              <div></div>
              <h5>새로운 파티를 이용해보세요</h5>
            </StAddParty>
          </div>
          <StIcon>
            <FontAwesomeIcon
              style={{
                color: "#7a7a7a",
              }}
              icon={faChevronRight}
            />
          </StIcon>
        </StAddPartyWrap>
      </StContainer>
      <br />
      <StOttPrice>
        <h3>
          OTT {partys.length}개를 <br />
          <span>{price}원</span> 에 즐기고 있어요.
        </h3>
        <div>혼자 쓸 때보다 월 {pricesum - price}원씩 절약중!</div>
      </StOttPrice>
    </Layout>
  );
};

export default MyOne;

const StContainer = styled.div`
  padding: 8px 0px;
  border: 1px solid var(--gray-100);
  box-shadow: var(--shadow-low);
  border-radius: 16px;
  background-color: var(--white);
  &:hover {
    color: var(--gray-800);
  }
`;

const StDiv = styled.div`
  width: 100%;
  height: 32px;
`;

const StOttPrice = styled.div`
  color: white;
  padding: 20px 16px;
  background-color: var(--blue-400);
  border-radius: 16px;
  border: 1px solid var(--blue-500);
  box-shadow: var(--shadow-low);
  position: relative;
  > h3 {
    font-family: "SpoqaHanSansNeo-Regular";
    > span {
      font-family: "SpoqaHanSansNeo-Regular";
      color: var(--yellow-300);
    }
  }
  > div {
    font-family: "SpoqaHanSansNeo-Regular";
  }
`;

const StAddPartyWrap = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;
  box-sizing: border-box;
  > div {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    box-sizing: border-box;
  }
`;

const StIcon = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;
const StPlus = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--gray-100);
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  color: var(--gray-700);
  margin-right: 16px;
`;
const StAddParty = styled.div`
  > h3 {
    display: block;
    font-size: 16px;
    line-height: 24px;
    margin: 0px;
    font-weight: bold;
    color: var(--gray-700);
  }
  > h5 {
    display: block;
    font-size: 14px;
    line-height: 20px;
    margin: 0px;
    font-weight: normal;
    color: var(--gray-500);
  }
`;
