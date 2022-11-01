import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  board: [],
  isLoading: false,
  error: null,
};

export const __postUserInfo = createAsyncThunk(
  "leaderSlice/getUserInfo",
  async (payload, thunkAPI) => {
    console.log("안녕", payload);
    const token = localStorage.getItem("token");
    try {
      const getUser = await axios.post(
        `http://hi-prac.shop:3000/api/addparty/host`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return thunkAPI.fulfillWithValue(getUser.data.getUser);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const leaderSlice = createSlice({
  name: "leader",
  initialState,
  reducers: {},
  extraReducers: {
    [__postUserInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [__postUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [__postUserInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export const {} = leaderSlice.actions;
export default leaderSlice.reducer;
