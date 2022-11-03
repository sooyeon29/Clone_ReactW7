import axios from "axios";

// import { getCookie } from "../Components/estarlogin/cookiehook";
const token = document.cookie.replace("Authorization=", "");
// console.log(document.cookie);
// console.log(token);
const instance = axios.create({
  baseURL: "https://hi-prac.shop/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const TigguleApi = {
  getNum: () => instance.get(`api/count`),
};

export const MyOttApi = {
  getOtt: (num) => instance.get(`/api/ott/${num}`),
  postBankAccount: (payload) => instance.post(`/api/mypage/account`, payload),
  login: (payload) => instance.post(`/api/user/login`, payload),
  signup: (payload) => instance.post(`/api/user`, payload),
  postcard: (payload) => instance.post(`/api/mypage/card`, payload),
  editbank: (payload) => instance.put(`/api/mypage/account`, payload),
  editcard: (payload) => instance.put(`/api/mypage/card`, payload),
  getmyparty: (payload) => instance.get(`/api/myparty`),
  member: (payload) => instance.post(`/api/addparty/member`, payload),
};

export const leaderApi = {
  leader: (payload) => instance.post(`/api/addparty/leader`, payload),
  getottpw: (payload) => instance.get(`/api/myparty/${payload.partyid}`),
  putottpw: (payload) =>
    instance.get(`/api/myparty/${payload.partyid}`, payload),
  // delottpw: (payload) => instance.delete(`/api/myparty/${payload.partyid}`),
};

export const MyPageApi = {
  getUsers: () => instance.get(`api/mypage/`),
  putUsers: (payload) =>
    // console.log("페이로드너는누구", payload),
    instance.put(`/api/mypage`, {
      nickname: payload.nickname,
      phone: payload.phone,
    }),
  exit: () => instance.delete(`/api/mypage`),
};
