import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOnsidXNlcklkIjoiMSJ9LCJpYXQiOjE2NjcyODgyODd9.enjRyabsUbMvONZb80h_YYdeNvXBZObabBqCyqCeEQg";

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
};

// 로그인할때 헤더에 토큰 붙여서 주는 방식사용할때 쓰는 식
// {
//   headers: {
//     Authorization: `Bearer ${getCookie("token")}`,
//   },
// }
