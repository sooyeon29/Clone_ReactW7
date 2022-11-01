import axios from "axios";
// import { getCookie } from "../Components/estarlogin/cookiehook";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOnsidXNlcklkIjoiMSJ9LCJpYXQiOjE2NjcyODgyODd9.enjRyabsUbMvONZb80h_YYdeNvXBZObabBqCyqCeEQg";
// 인스턴스 사용 예시코드!!!!
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
  login: (payload) => instance.post(`/api/user/login`, payload),
  signup: (payload) => instance.post(`/api/user`, payload),
};

// 로그인할때 헤더에 토큰 붙여서 주는 방식사용할때 쓰는 식
// {
//   headers: {
//     Authorization: `Bearer ${getCookie("token")}`,
//   },
// }
