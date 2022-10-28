import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";

/*reducer toolkit Slice.reducer
 */

// 내가 만든 리듀서를 넣어준다
const store = configureStore({
  reducer: {},
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
