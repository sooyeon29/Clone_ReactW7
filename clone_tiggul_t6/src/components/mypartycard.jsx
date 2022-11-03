import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import netflix from "../style/img/netflix.png";
import disney from "../style/img/disney.png";
import laftel from "../style/img/laftel.png";
import tving from "../style/img/tving.png";
import watcha from "../style/img/watcha.png";
import wavve from "../style/img/wavve.png";

const MypartyCard = ({ partyData }) => {
  const navigate = useNavigate();

  if (!partyData) {
    return null;
  }

  let role = "";
  let img = "";

  if (partyData.isLeader === false) {
    role = "파티원";
  } else if (partyData.isLeader === true) {
    role = "파티장";
  } else {
    return;
  }
  const partyid = partyData.partyId;
  //console.log(partyid);

  if (partyData.ottService === "Netflix") {
    img = netflix;
  } else if (partyData.ottService === "Disneyplus") {
    img = disney;
  } else if (partyData.ottService === "Laftel") {
    img = laftel;
  } else if (partyData.ottService === "Tving") {
    img = tving;
  } else if (partyData.ottService === "Watcha") {
    img = watcha;
  } else if (partyData.ottService === "Wavve") {
    img = wavve;
  }

  return (
    <StAddPartyWrap onClick={() => navigate(`/mytwo:${partyid}`)}>
      <div>
        <StPlus>
          <Stimg src={img} alt="" />
          {/* <FontAwesomeIcon
            style={{
              color: "#AEB4BF",
            }}
            icon={faCirclePlus}
          /> */}
        </StPlus>
        <div />
        <StAddParty>
          <h3>{partyData.ottService}</h3>
          <div></div>
          <h5>{role}으로 이용중</h5>
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

const Stimg = styled.img`
  width: 30px;
  height: 30px;
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
