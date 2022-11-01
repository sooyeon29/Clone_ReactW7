import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MyOttApi } from "../../tools/instance";

export const __getMyOtt = createAsyncThunk(
  "otts/getMyOtt",
  async (payload, thunkApi) => {
    console.log("잘 받았니", payload);
    try {
      const { data } = await MyOttApi.getOtt(payload);
      console.log(data);
      return thunkApi.fulfillWithValue(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState = {
  data: {
    Netflix: {
      ottService: "Netflix",
      price: 170000,
      hostCommision: 490,
      memberCommision: 990,
    },
  },
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
    [__getMyOtt.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyOtt.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      console.log("fulfilled 상태", state, action, state.data);
    },
    [__getMyOtt.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default addPartySlice.reducer;
