import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../elements/layout";
import MypartyCard from "../../components/mypartycard";
import { useDispatch, useSelector } from "react-redux";
// import { __getPartys } from "../../redux/modules/getMypartySlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

const MyOne = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const items = useSelector((state) => state.items);

  // useEffect(() => {
  //   dispatch(__getPartys());
  // }, [dispatch]);

  return (
    <Layout>
      <StDiv />

      {/* {partys?.map((item) => {
        return <MypartyCard key={party.id} itemData={party} />;
      })} */}

      <StContainer>
        <MypartyCard />
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
          OTT 2개를 <br />
          <span>17,205원</span> 에 즐기고 있어요.
        </h3>
        <div>혼자 쓸 때보다 월 13,695원씩 절약중!</div>
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
