import axios from "axios";

// import { getCookie } from "../Components/estarlogin/cookiehook";
const token = document.cookie.replace("Authorization=", "");
// console.log(document.cookie);
// console.log(token);
const instance = axios.create({
  baseURL: "http://hi-prac.shop:3000/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const MyOttApi = {
  getOtt: (num) => instance.get(`/api/ott/${num}`),
  postBankAccount: (payload) => instance.post(`/api/mypage/account`),
  login: (payload) => instance.post(`/api/user/login`, payload),
  signup: (payload) => instance.post(`/api/user`, payload),
  postcard: (payload) => instance.post(`/api/mypage/card`, payload),
};

export const leaderApi = {
  leader: (payload) => instance.post(`/api/addparty/leader`, payload),
  ottpw: (payload) => instance.get(`/api/myparty`),
};

// 로그인할때 헤더에 토큰 붙여서 주는 방식사용할때 쓰는 식
// {
//   headers: {
//     Authorization: `Bearer ${getCookie("token")}`,
//   },
// }
