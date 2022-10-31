import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MyOttApi } from "../../tools/instance";

export const __postMyOtt = createAsyncThunk(
  "otts/postMyOtt",
  async (payload, thunkApi) => {
    console.log("잘 받았니", payload);
    try {
      const { data } = await MyOttApi.postOtt(payload);
      console.log(data);
      return thunkApi.fulfillWithValue(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState = {
  addparty: [
    {
      ottService: "",
      price: 0,
      hostCommision: 0,
      memberCommision: 0,
      isClick: false,
      id: 0,
    },
  ],
  isLoading: false,
  error: null,
};

const addPartySlice = createSlice({
  name: "addparty",
  initialState,
  reducers: {
    // 동기적인 액션은 리듀서에서 관리
  },
  extraReducers: {
    // 선택한 ott 서비스를 POST
    [__postMyOtt.pending]: (state) => {
      state.isLoading = true;
    },
    [__postMyOtt.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.addparty.push(action.payload);
      console.log("fulfilled 상태", state, action);
    },
    [__postMyOtt.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default addPartySlice.reducer;
