import axios from "axios";
// import { getCookie } from "../Components/estarlogin/cookiehook";

// 인스턴스 사용 예시코드!!!!
const instance = axios.create({
  // baseURL: "http://localhost:3001/",
  baseURL: "http://hi-prac.shop:3000/",
});

export const MyOttApi = {
  getOtt: (num) => instance.get(`/api/ott/${num}`),
};

// 로그인할때 헤더에 토큰 붙여서 주는 방식사용할때 쓰는 식
// {
//   headers: {
//     Authorization: `Bearer ${getCookie("token")}`,
//   },
// }
