import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

const MypartyCard = () => {
  const navigate = useNavigate();

  return (
    <StAddPartyWrap>
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
          <h3>넷플릭스 파티</h3>
          <div></div>
          <h5>파티장으로 이용중</h5>
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
  );
};
export default MypartyCard;

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
