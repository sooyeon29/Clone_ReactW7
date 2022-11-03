import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../elements/layout";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [home, setHome] = useState("");
  const goToAddMain = () => {
    navigate("/addmain");
  };

  useEffect(() => {
    axios
      .get("https://hi-prac.shop/api/count")
      .then((res) => setHome(res.data.data));
  }, []);

  return (
    <Layout>
      <Main>
        <SideHeader>
          <Padding />
        </SideHeader>
        <Wrap>
          <First>
            <Secound>
              <User>
                최근 일주일 매칭 현황 <Member>{home}</Member>명
              </User>
              <OTT>대한민국 1등</OTT>
              <OTT>"OTT 계정공유 서비스"</OTT>
              <Text>넷플릭스, 티빙, 웨이브, 디즈니플러스 등…</Text>
              <Text>매달 나가는 구독료 부담스럽다면?</Text>
              <Text>⛓ 안전한 계정 공유로 더 저렴하게!</Text>
              <Bt onClick={goToAddMain}> 계정공유 시작하기</Bt>
              <Imgbox>
                <Img>
                  <img
                    style={{ transform: "scale(0.35)" }}
                    src="/img/netflix.png"
                  />
                </Img>
                <Img>
                  <img
                    style={{ transform: "scale(0.35)" }}
                    src="/img/watcha.png"
                  />
                </Img>
                <Img>
                  <img
                    style={{ transform: "scale(0.35)" }}
                    src="/img/wavve.png"
                  />
                </Img>
              </Imgbox>
              <Imgbox>
                <Img>
                  <img
                    style={{ transform: "scale(0.35)" }}
                    src="/img/laftel.png"
                  />
                </Img>
                <Img>
                  <img
                    style={{ transform: "scale(0.35)" }}
                    src="/img/tving.png"
                  />
                </Img>
                <Img>
                  <img
                    style={{ transform: "scale(0.4)" }}
                    src="/img/disney.png"
                  />
                </Img>
              </Imgbox>
            </Secound>
          </First>
        </Wrap>
      </Main>
    </Layout>
  );
};

export default Home;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  background-color: var(--gray-050);
  color: black;
`;

const SideHeader = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  background-color: var(--gray-050);
`;

const Padding = styled.div`
  display: block;
  width: 100%;
  height: 39px;
  box-sizing: border-box;
  display: block;
`;

const First = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 95%;
  margin: 20px;
  padding: 20px 16px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid var(--gray-100);
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
  backdrop-filter: blur(4px);
  border-radius: 16px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--gray-050);
  background-image: url(https://velog.velcdn.com/images/parkharoi/post/749c938f-3e10-45be-8e8d-5bf84fa2610a/image.png);
`;

const Secound = styled.div`
  position: relative;
  padding: 20px 16px;
  width: 100%;
  max-width: 640px;
  min-width: 390px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const User = styled.div`
  font-size: 17px;
  line-height: 46px;
  position: relative;
  font-weight: 400;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(48%);
  border-radius: 10px;
  margin: 0px 0px 30px;
  padding: 1px 15px 1px 15px;
  display: flex;
`;

const Member = styled.div`
  font-size: 17px;
  position: relative;
  padding: 0px 2px 0px 2px;
  font-weight: 400;
  margin: 0px 1px 0px 5px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(48%);
`;

const OTT = styled.div`
  top: 0px;
  position: absolute;
  height: 60px;
  font-size: 35px;
  line-height: 46px;
  position: relative;
  margin: 0px;
  font-weight: 700;
`;

const Text = styled.div`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 14px;
  line-height: 0px;
`;

const Bt = styled.div`
  width: 212px;
  height: 50px;
  background: rgba(83, 227, 172, 0.8);
  border: 1px solid rgba(77, 202, 154, 0.5);
  box-shadow: var(--shadow-low);
  border-radius: 8px;
  color: var(--white);
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  margin: 30px 0px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(7, 85, 42, 0.5);
  }
`;

const Imgbox = styled.div`
  display: flex;
  padding: 5px;
`;

const Img = styled.div`
  display: flex;
  width: 64px;
  height: 64px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
`;
