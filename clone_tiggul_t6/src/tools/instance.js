import axios from "axios";
<<<<<<< HEAD

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOnsidXNlcklkIjoiMSJ9LCJpYXQiOjE2NjcyODgyODd9.enjRyabsUbMvONZb80h_YYdeNvXBZObabBqCyqCeEQg";

=======
// import { getCookie } from "../Components/estarlogin/cookiehook";
const token = document.cookie.replace("Authorization=", "");
// console.log(document.cookie);
// console.log(token);
>>>>>>> feature/wj
const instance = axios.create({
  // baseURL: "http://localhost:3001/",
  baseURL: "http://hi-prac.shop:3000/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const MyOttApi = {
  getOtt: (num) => instance.get(`/api/ott/${num}`),
  postBankAccount: (payload) => instance.post(`/mypage/account`),
  postBankAccount: (payload) => instance.post(`/api/mypage/account`),
  login: (payload) => instance.post(`/api/user/login`, payload),
  signup: (payload) => instance.post(`/api/user`, payload),
  postcard: (payload) => instance.post(`/api/mypage/card`, payload),
};

// 로그인할때 헤더에 토큰 붙여서 주는 방식사용할때 쓰는 식
// {
//   headers: {
//     Authorization: `Bearer ${getCookie("token")}`,
//   },
// }
