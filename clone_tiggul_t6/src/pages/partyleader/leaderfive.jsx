import React, { useRef } from "react";
import styled from "styled-components";
import Layout from "../../elements/layout";
import Button from "../../elements/buttons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { __postLeader } from "../../redux/modules/leaderSlice";

// const cookies = new Cookies();

// export const setCookie = (name, value, option) => {
//   return cookies.set(name, value, { ...option });
// };

// export const getCookie = (name) => {
//   return cookies.get(name);
// };

const LeaderFive = () => {
  const idRef = useRef("");
  const pwRef = useRef("");
  const navigate = useNavigate();

  const myOttName = JSON.parse(window.sessionStorage.getItem("getOtt"));
  console.log("나는너가고른고!!", myOttName.data);

  const [cookies] = useCookies();
  // const [isLogin, setIsLogin] = useState(false);
  // useEffect(() => {
  //   console.log("cookies콘솔", cookies);
  //   if (cookies.Authorization) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // });

  const dispatch = useDispatch();

  return (
    <Layout>
      <Before>
        {/* {getOtt.product.map((item) => ( */}
        <div>
          <Last>
            마지막으로,
            <br /> {myOttName.data.ottService} 계정을 등록해주세요 !
          </Last>
          <p>{myOttName.data.ottService} 바로가기</p>

          <Ott>
            <Acount>✔️ 계정을 준비해주세요</Acount>
            <Ready>
              <img style={{ transform: "scale(0.4)" }} src="/img/admit.png" />
              <Color>{myOttName.data.ottService} 프리미엄 이용권</Color>{" "}
              (4인공유) 구독중인 계정
            </Ready>
          </Ott>

          <Ott>
            ⚠️ 주의해주세요
            <Worning>
              · {myOttName.data.ottService} ID가 아닌 계정은 공유 불가능 (CJ One
              등)
            </Worning>
            <Worning>· 웹이 아닌 APP에서는 티빙이 최대 15% 더 비싸요</Worning>
          </Ott>

          <Inbox>
            <Id>
              ID
              <input ref={idRef} placeholder="아이디 입력" />
            </Id>
          </Inbox>

          <Inbox>
            <Id>
              PW
              <input ref={pwRef} type="password" placeholder="패스워드 입력" />
            </Id>
          </Inbox>
        </div>
        {/* ))} */}
      </Before>
      <Button
        onClick={(e) => {
          if (idRef.current.value == "" || pwRef.current.value == "") {
            alert("내용을 입력해 주세요");
            return;
          }
          const login = {
            ottService: myOttName.data.ottService,
            ID: idRef.current.value,
            Password: pwRef.current.value,
          };
          console.log(login);
          dispatch(__postLeader(login));
          window.alert("매칭이 시작되었습니다!");
          navigate("/myone");
        }}
      >
        다음
      </Button>
    </Layout>
  );
};
export default LeaderFive;

const Before = styled.div`
  border: 1px solid var(--gray-100);
  border-radius: 16px;
  background-color: var(--white);
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  font-size: 16px;
  margin-top: 24px;
  padding: 20px;
`;
const Last = styled.div`
  display: block;
  font-size: 18px;
  line-height: 24px;
  margin: 0px;
  font-weight: bold;
  color: var(--gray-800);
`;

const Ott = styled.div`
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

const Worning = styled.div`
  display: block;
  font-size: 14px;
  line-height: 18px;
  margin: 7px;
  font-weight: normal;
  color: var(--gray-600);
`;

const Color = styled.div`
  font-weight: bold;
  color: var(--primary-600);
`;

const Inbox = styled.div`
  padding: 10px 16px;
  height: 48px;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  background-color: var(--white);
  margin-top: 6px;
`;

const Id = styled.div`
  display: flex;

  > input {
    width: 100%;
    border: 0px;
    outline: 0px;
    caret-color: var(--primary-500);
    font-family: SpoqaHanSansNeo;
    font-size: 16px;
    line-height: 22px;
    text-align: left;
    font-weight: normal;
    color: var(--gray-600);
  }
`;
