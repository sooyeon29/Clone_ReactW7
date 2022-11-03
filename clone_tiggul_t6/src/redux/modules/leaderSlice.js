import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { leaderApi } from "../../tools/instance";

const initialState = {
  board: [],
  isLoading: false,
  error: null,
};

export const __postLeader = createAsyncThunk(
  "leaderSlice/getUserInfo",
  async (payload, thunkAPI) => {
    console.log(payload.cookie);
    const ottService = payload.ottService;
    const ID = payload.ID;
    const password = payload.Password;
    console.log("나와줘", "ottService", ottService);
    try {
      const { data } = await leaderApi.leader({
        ottService: ottService,
        ID: ID,
        password: password,
      });
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getOttPw = createAsyncThunk(
  "GET_OTTPW",
  async (payload, thunkAPI) => {
    // console.log(payload);
    try {
      const data = await leaderApi.getottpw(payload);
      // console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __putOttPw = createAsyncThunk(
  "PUT_OTTPW",
  async (payload, thunkAPI) => {
    console.log("어떻게 생겼니?", payload);
    try {
      const data = await leaderApi.putottpw(payload);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __deleteOttPw = createAsyncThunk(
//   "Slice/delete",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.delete(
//         `https://chamchimayo.shop/users/${payload.userId}`,
//         { headers }
//       );
//       return thunkAPI.fulfillWithValue(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

const leaderSlice = createSlice({
  name: "leader",
  initialState,
  reducers: {},
  extraReducers: {
    [__postLeader.pending]: (state) => {
      state.isLoading = true;
    },
    [__postLeader.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [__postLeader.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [__getOttPw.pending]: (state) => {
      state.isLoading = true;
    },
    [__getOttPw.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      // console.log(action.payload.data);
    },
    [__getOttPw.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__putOttPw.pending]: (state) => {
      state.isLoading = true;
    },
    [__putOttPw.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      // console.log(action.payload.data);
    },
    [__putOttPw.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // [__deleteOttPw.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__deleteOttPw.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   window.location.href = "/";
    // },
    // [__deleteOttPw.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error;
    // },
  },
});

export const {} = leaderSlice.actions;
export default leaderSlice.reducer;
