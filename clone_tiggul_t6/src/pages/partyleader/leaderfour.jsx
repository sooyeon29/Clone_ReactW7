import React, { useState } from "react";
import Layout from "../../elements/layout";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import lock from "../../style/img/lock.png";
import Button from "../../elements/buttons";
import { MyOttApi } from "../../tools/instance";
import { useForm } from "react-hook-form";

const LeaderFour = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const initialState = {
    bank: "",
    account: "",
  };
  const [accountinfo, setAccountinfo] = useState(initialState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onAccountHandler = (e) => {
    // console.log("클릭했다.");
    if (accountinfo.bank === "" || accountinfo.account === "") {
      return alert("모든 항목을 입력해주세요");
    } else {
      //console.log("클릭", accountinfo);
      MyOttApi.postBankAccount({
        bank: accountinfo.bank,
        account: accountinfo.account,
      })
        .then((res) => {
          console.log("성공", res);
          setAccountinfo(initialState);
          navigate("/leaderfive");
        })
        .catch((error) => {
          alert(error.response.data.Message);
          //console.log("에러", error.response.data.Message);
        });
    }
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit((event) => {
          onAccountHandler(accountinfo);
          // event.preventDefault();
        })}
      >
        <StDiv />
        <Stcontainer>
          <div>
            <h4>계좌번호를 입력해주세요</h4>
            <div>
              <img src={lock} alt="" />
              <h6>안전을 위해 본인 명의의 계좌만 등록 가능해요</h6>
            </div>
            <br />
            <StInputWrap>
              <StInputs>
                <Stinput
                  {...register("bank", {
                    required: "은행 이름을 입력해주세요",
                    minLength: {
                      value: 1,
                      message: "1글자 이상 입력해주세요.",
                    },
                    pattern: {
                      value: /^[가-힣]{1,10}$/,
                      message: "한글만 가능합니다.",
                    },
                  })}
                  onChange={(ev) => {
                    const { value } = ev.target;
                    setAccountinfo({
                      ...accountinfo,
                      bank: value,
                    });
                  }}
                  placeholder="은행 이름을 입력해주세요"
                ></Stinput>
                <Warn>{errors?.bank?.message}</Warn>
              </StInputs>
              <StInputs>
                <Stinput
                  {...register("account", {
                    required: "계좌번호를 입력해주세요",
                    minLength: {
                      value: 3,
                      message: "3글자 이상 입력해주세요.",
                    },
                    pattern: {
                      value: /^[0-9]{3,15}$/,
                      message: "숫자만 가능합니다",
                    },
                  })}
                  onChange={(ev) => {
                    const { value } = ev.target;
                    setAccountinfo({
                      ...accountinfo,
                      account: value,
                    });
                  }}
                  placeholder="-를 뺀 본인명의의 계좌번호를 숫자로 입력해주세요"
                ></Stinput>
                <Warn>{errors?.account?.message}</Warn>
              </StInputs>
            </StInputWrap>
          </div>
        </Stcontainer>
        <Button type="submit">다음</Button>
        <StDiv />
      </form>
    </Layout>
  );
};
export default LeaderFour;

const StDiv = styled.div`
  width: 100%;
  height: 8px;
`;
const Warn = styled.div`
  color: red;
  padding-left: 17px;
  font-size: 0.8rem;
  font-weight: 00;
  margin-top: 5px;
  margin-left: -180px;
`;

const StInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;
const StInputs = styled.div`
  display: flex;
  flex-direction: row;
  width: 576px;
  position: relative;
  box-sizing: border-box;
  margin-top: 15px;
`;
const Stinput = styled.input`
  border-radius: 8px;
  outline: 0px;
  margin: 0px;
  padding: 0px 16px;
  caret-color: var(--primary-500);
  width: 100%;
  height: 46px;
  font-family: SpoqaHanSansNeo;
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  text-align: left;
  color: var(--gray-700);
  border: 1px solid var(--primary-500);
`;

const Stcontainer = styled.div`
  height: 282px;
  transition: height 0.3s ease-out 0s;
  overflow: hidden;
  box-shadow: var(--shadow-low);
  padding: 20px 16px;
  transform: translateZ(0px);
  border: 1px solid var(--gray-100);
  border-radius: 16px;
  background-color: var(--white);
  > div {
    position: relative;
    padding: 0px;
    display: flex;
    flex-direction: column;
    > h4 {
      display: block;
      font-size: 18px;
      line-height: 24px;
      margin: 0px;
      font-weight: bold;
      margin-block-start: 1.33em;
      margin-block-end: 1.33em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
    > div {
      display: flex;
      width: 274px;
      height: 42px;
      -webkit-box-pack: center;
      justify-content: center;
      align-self: center;
      background-color: var(--gray-050);
      border-radius: 63px;
      -webkit-box-align: center;
      align-items: center;
      margin-bottom: 10px;
      > img {
        width: 16px;
        height: 16px;
      }
      > h6 {
        display: block;
        font-size: 12px;
        line-height: 18px;
        margin: 0px;
        padding: 0px;
        font-weight: normal;
        color: var(--gray-700);
        margin: 5px;
      }
    }
  }
`;
