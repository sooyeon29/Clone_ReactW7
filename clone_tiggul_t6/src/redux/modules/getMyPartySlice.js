import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { detailApi } from "../../tools/instance";

const initialState = {
  partys: [],
  isLoading: false,
  error: null,
};

//GET
export const __getPartys = createAsyncThunk(
  "GET_PARTYS",
  async (payload, thunkAPI) => {
    try {
      const { data } = await detailApi.party(payload);
      //console.log('데이터', data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const PartysSlice = createSlice({
  name: "partys",
  initialState,
  reducers: {},
  extraReducers: {
    //GET
    [__getPartys.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPartys.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.partys = action.payload;
    },
    [__getPartys.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = PartysSlice.actions;
export default PartysSlice.reducer;
