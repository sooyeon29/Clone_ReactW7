import axios from "axios";
import { getCookie } from "../Components/estarlogin/cookiehook";

// 인스턴스 사용 예시코드!!!!
const instance = axios.create({
  baseURL: "http://localhost:3001/",
});

export const detailApi = {
  getDetail: (id) => instance.get(`/api/star/comments/${id}`), //GET
  postDetail: (payload) =>
    instance.post(
      `/api/star/comments/${payload.id}`,
      { comment: payload.comment },
      {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }
    ), //POST
  deleteDetail: (commentId) =>
    instance.delete(`/api/star/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    }), //DELET
  patchDetail: (payload) =>
    // console.log(payload)
    instance.put(
      `/api/star/comments/${payload.commentId}`,
      { comment: payload.newComment },
      {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }
    ), //PATCH
};

// 아래 슬라이스는 인스턴스를 사용하여 청크를 만든것입니다
// 슬라이스 폴더에 들어가는 부분이겠죵!!ㅎㅎ
// 게시물별 댓글 post
// export const __postDetailComment = createAsyncThunk(
//     "comments/postComment",
//     async (payload, thunkAPI) => {
//       console.log("댓글저장으로 넘겨준값", payload);
//       try {
//         const { data } = await detailApi.postDetail(payload);
//         return thunkAPI.fulfillWithValue(payload);
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error);
//       }
//     }
//   );
//   // 게시물별  댓글 get
//   export const __getDetailComment = createAsyncThunk(
//     "comments/getComment",
//     async (payload, thunkAPI) => {
//       try {
//         const { data } = await detailApi.getDetail(payload);
//         console.log("너는무슨데이터?", data);
//         return thunkAPI.fulfillWithValue(data);
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error);
//       }
//     }
//   );
//   // 게시물별 댓글 삭제 DELET
//   export const __deleteDetailComment = createAsyncThunk(
//     "comments/deleteComment",
//     async (payload, thunkAPI) => {
//       try {
//         const { data } = await detailApi.deleteDetail(payload);
//         console.log(data);
//         return thunkAPI.fulfillWithValue(payload);
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error);
//       }
//     }
//   );
//   // 게시물별 댓글 PATCH 수정내용으로 저장!
//   export const __updateDetailComment = createAsyncThunk(
//     "comments/updateComment",
//     async (payload, thunkAPI) => {
//       try {
//         // const { newComment, newCommentId } = payload;
//         await detailApi.patchDetail(payload); // 서버한테 보낸상태
//         console.log("수정하기payload??", payload);
//         return thunkAPI.fulfillWithValue(payload);
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error);
//       }
//     }
//   );
