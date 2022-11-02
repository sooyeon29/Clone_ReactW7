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

export const TigguleApi = {
  getNum: () => instance.get(`api/count`),
};

export const MyOttApi = {
  getOtt: (num) => instance.get(`/api/ott/${num}`),
  postBankAccount: (payload) => instance.post(`/api/mypage/account`),
  login: (payload) => instance.post(`/api/user/login`, payload),
  signup: (payload) => instance.post(`/api/user`, payload),
  postcard: (payload) => instance.post(`/api/mypage/card`, payload),
};

export const leaderApi = {
  leader: () => instance.post(`/api/addparty/leader`),
  ottpw: () => instance.get(`/api/myparty/`),
};

export const MyPageApi = {
  getUsers: () => instance.get(`/api/mypage/`),
  putUsers: (payload) =>
    // console.log("페이로드너는누구", payload),
    instance.put(`/api/mypage`, {
      nickname: payload.nickname,
      phone: payload.phone,
    }),
  exit: () => instance.delete(`/api/mypage`),
};
