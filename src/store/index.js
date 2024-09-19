/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
// import taiKhoanSlice from "./slice/taiKhoan";

const store = configureStore({
  reducer: {
    // taiKhoan: taiKhoanSlice.reducer,
  },
});

export default store;
