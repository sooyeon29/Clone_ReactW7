import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import MyPage from "../pages/mypage";
import AddMain from "../pages/addparty/addmain";
import AddOne from "../pages/addparty/addone";
import MyOne from "../pages/myparty/myone";
import MyTwo from "../pages/myparty/mytwo";
import LeaderFive from "../pages/partyleader/leaderfive";
import LeaderFour from "../pages/partyleader/leaderfour";
import LeaderTwo from "../pages/partyleader/leadertwo";
import LeaderOne from "../pages/partyleader/leaderone";
import MyPageUser from "../pages/mypageuser";
import MemberOne from "../pages/partymember/memberone";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypageuser" element={<MyPageUser />} />
        <Route path="/addmain" element={<AddMain />} />
        <Route path="/addone" element={<AddOne />} />
        <Route path="/myone" element={<MyOne />} />
        <Route path="/mytwo" element={<MyTwo />} />
        <Route path="/leaderone" element={<LeaderOne />} />
        <Route path="/leadertwo" element={<LeaderTwo />} />
        <Route path="/leaderfour" element={<LeaderFour />} />
        <Route path="/leaderfive" element={<LeaderFive />} />
        <Route path="/memberone" element={<MemberOne />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
