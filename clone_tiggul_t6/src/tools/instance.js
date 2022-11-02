import axios from "axios";
// import { getCookie } from "../Components/estarlogin/cookiehook";
const token = document.cookie.replace("Authorization=", "");
console.log(document.cookie);
console.log(token);
const instance = axios.create({
  baseURL: "http://hi-prac.shop:3000/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const MyOttApi = {
  getOtt: (num) => instance.get(`/api/ott/${num}`),
  postBankAccount: (payload) => instance.post(`/mypage/account`),
  login: (payload) => instance.post(`/api/user/login`, payload),
  signup: (payload) => instance.post(`/api/user`, payload),
};

export const MyPageApi = {
  getUsers: () => instance.get(`/api/mypage/`),
  putUsers: (payload) =>
    // console.log("페이로드너는누구", ),
    instance.put(`/api/mypage/user`, { nickname: payload }),

  exit: () => instance.delete(`/api/mypage/user`),
};
