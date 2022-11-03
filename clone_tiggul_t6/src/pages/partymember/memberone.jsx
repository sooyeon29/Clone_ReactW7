import React, { useState } from "react";
import Layout from "../../elements/layout";
import Button from "../../elements/buttons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MyOttApi } from "../../tools/instance";

const MemberOne = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const initialState = {
    bank: "",
    card: "",
    MMYY: "",
    birth: "",
    password: "",
  };
  const memberinitial = {
    ottService: "",
  };
  const [cardinfo, setCardinfo] = useState(initialState);
  const [ottinfo, setOttinfo] = useState(memberinitial);
  const myOttName = JSON.parse(window.sessionStorage.getItem("getOtt"));
  setOttinfo(myOttName?.data?.ottService);

  const onCardHandler = (e) => {
    console.log("클릭했다.");
    if (
      cardinfo.bank === "" ||
      cardinfo.card === "" ||
      cardinfo.MMYY === "" ||
      cardinfo.birth === "" ||
      cardinfo.password === ""
    ) {
      return alert("모든 항목을 입력해주세요");
    } else {
      //console.log("클릭", cardinfo);
      MyOttApi.postcard({
        bank: cardinfo.bank,
        card: cardinfo.card,
        MMYY: cardinfo.MMYY,
        birth: cardinfo.birth,
        password: cardinfo.password,
      })
        .then((res) => {
          console.log(res);
          //alert(res.data.message);
          setCardinfo(initialState);
        })
        .catch((error) => {
          console.log("에러", error);
          alert(error.response.data.errorMessage);
        });

      MyOttApi.member({
        ottService: ottinfo,
      })
        .then((res) => {
          console.log(res);
          setCardinfo(initialState);
          alert(
            "매칭이 시작되었습니다.\n 매칭이 성공되면 문자로 알려드릴게요."
          );
          window.location.replace(`/myone`);
        })
        .catch((error) => {
          console.log("에러", error);
          alert(error.response.data.errorMessage);
        });
    }
  };

  return (
    <Layout>
      <Sth3>
        <span>매달 이용료 결제를 위한</span>
        <br />
        <span>카드 정보를 입력해주세요</span>
      </Sth3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onCardHandler(cardinfo);
        }}
      >
        <StWrap>
          <div>카드 회사</div>
          <StL />
          <StInputWraps>
            <input
              onChange={(ev) => {
                const { value } = ev.target;
                setCardinfo({
                  ...cardinfo,
                  bank: value,
                });
              }}
              maxLength={4}
              placeholder="카드 회사이름을 입력해주세요"
              pattern="^[가-힣]+$"
              inputMode="numeric"
            />
          </StInputWraps>
        </StWrap>
        <StWrap>
          <div>카드 번호</div>
          <StL />
          <StInputWraps>
            <input
              onChange={(ev) => {
                const { value } = ev.target;
                setCardinfo({
                  ...cardinfo,
                  card: value,
                });
              }}
              maxLength={16}
              placeholder="-를 제외한 카드번호를 입력해주세요"
              pattern="^[0-9]+$"
              inputMode="numeric"
            />
          </StInputWraps>
        </StWrap>
        <StWrap>
          <div>유효기간</div>
          <StL />
          <StInputWraps>
            <input
              onChange={(ev) => {
                const { value } = ev.target;
                setCardinfo({
                  ...cardinfo,
                  MMYY: value,
                });
              }}
              maxLength={4}
              placeholder="MMYY"
              pattern="^[0-9]{4}$"
              inputMode="numeric"
            />
          </StInputWraps>
        </StWrap>
        <StWrap>
          <div>생년월일</div>
          <StL />
          <StInputWraps>
            <input
              onChange={(ev) => {
                const { value } = ev.target;
                setCardinfo({
                  ...cardinfo,
                  birth: value,
                });
              }}
              maxLength={8}
              placeholder="생년월일 8자리"
              pattern="^[0-9]{8}$"
              inputMode="numeric"
            />
          </StInputWraps>
        </StWrap>
        <StWrap>
          <div>비밀번호</div>
          <StL />
          <StInputWraps>
            <input
              onChange={(ev) => {
                const { value } = ev.target;
                setCardinfo({
                  ...cardinfo,
                  password: value,
                });
              }}
              maxLength={2}
              placeholder="비밀번호 앞 2자리"
              pattern="^[0-9]{2}$"
              inputMode="numeric"
            />
          </StInputWraps>
        </StWrap>
        <Button>파티매칭 시작하기</Button>
      </form>
    </Layout>
  );
};
export default MemberOne;

const StL = styled.div`
  width: 100%;
  height: 16px;
`;

const StWrap = styled.div`
  height: 66px;
  border-bottom: 1px solid var(--gray-300);
  box-sizing: border-box;
  > div {
    color: var(--gray-700);
    font-size: 14px;
    line-height: 20px;
    margin: 0px;
    font-weight: normal;
  }
`;
const StInputWraps = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  height: 22px;
  > input {
    width: 100%;
    text-align: left;
    font-size: 16px;
    line-height: 22px;
    border: 0px;
    outline: 0px;
    margin: 0px;
    padding: 0px;
    caret-color: var(--primary-500);
    height: 22px;
    border-radius: 0px;
    font-family: SpoqaHanSansNeo;
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
    color: var(--grau-700);
    background: transparent;
  }
`;

const Sth3 = styled.h3`
  font-size: 22px;
  line-height: 30px;
  margin: 0px;
  font-weight: bold;
  color: var(--gray-800);
  letter-spacing: -0.03em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
