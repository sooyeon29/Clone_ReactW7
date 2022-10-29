import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  board: [],
  isLoading: false,
  error: null,
};

export const __getUserInfo = createAsyncThunk(
  "leader/postOne",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/leader");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

const leaderSlice = createSlice({
  name: "leader",
  initialState,
  reducers: {},
  extraReducers: {
    [__getUserInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [__getUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [__getUserInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export const {} = leaderSlice.actions;
export default leaderSlice.reducer;
