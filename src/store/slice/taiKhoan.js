// import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
// import axios from "axios";

// const apiURL = import.meta.env.VITE_API_URL;

// export const fetchAllTaiKhoan = createAsyncThunk(
//   "taikhoan/fetch",
//   async () => {
//     const response = await axios.get(`${apiURL}/api/taikhoan`);
//     return response.data;
//   }
// );

// export const regisster = createAsyncThunk("taikhoan/register", async (data) => {
//   const response = await axios.post(`${apiURL}/api/taikhoan/register`, data);
//   return {response, data};
// });

// export const login = createAsyncThunk("taikhoan/login", async (data) => {
//   const response = await axios.post(`${apiURL}/api/taikhoan/login`, data);
//   return {response, data};
// });

// export const updateTaiKhoan = createAsyncThunk("taikhoan/update", async (data) => {
//   const response = await axios.put(`${apiURL}/api/taikhoan/update`, data);
//   return {response, data};
// });


// export const deleteTaiKhoan = createAsyncThunk("taikhoan/delete", async (id) => {
//   const response = await axios.delete(`${apiURL}/api/taikhoan/delete/${id}`);
//   return {response, id};
// });


// const taiKhoanSlice = createSlice({
//   name: "taiKhoan",
//   initialState: {
//     list: [],
//     filter: "",
//     loading: false,
//     error: null,
//     user: null,
//   },
//   reducers: {
//     setFilter: (state, { payload }) => {
//       state.filter = payload;
//     },
//     setError: (state, { payload }) => {
//       state.error = payload;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//     setUser: (state, { payload }) => {
//       state.user = payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllTaiKhoan.fulfilled, (state, { payload }) => {
//         state.list = payload || [];
//       })
//       .addCase(regisster.fulfilled, (state, { payload }) => {
//         state.list.push(payload.data);
//       })
//       .addCase(updateTaiKhoan.fulfilled, (state, { payload }) => {
//         const index = state.list.findIndex(item => item.MA_TK === payload.data.MA_TK);
//         if (index !== -1) {
//           state.list = [
//             ...state.list.slice(0, index),
//             payload.data,
//             ...state.list.slice(index + 1),
//           ];
//         }
//       })
//       .addCase(deleteTaiKhoan.fulfilled, (state, { payload }) => {
//         state.list = state.list.filter(x => x.MA_TK !== payload.id);
//       })
//       .addCase(fetchAllTaiKhoan.rejected, (state, { error }) => {
//         state.error = error.message || "Có lỗi xảy ra trong quá trình xử lý dữ liệu!";
//       })
//       .addCase(regisster.rejected, (state, { error }) => {
//         console.log(error);
//         state.error = error.message || "Có lỗi xảy ra trong quá trình xử lý dữ liệu!";
//       })
//       .addCase(updateTaiKhoan.rejected, (state, { error }) => {
//         state.error = error.message || "Có lỗi xảy ra trong quá trình xử lý dữ liệu!";
//       })
//       .addCase(deleteTaiKhoan.rejected, (state, { error }) => {
//         state.error = error.message || "Có lỗi xảy ra trong quá trình xử lý dữ liệu!";
//       })
//       .addCase(login.fulfilled, (state, { payload }) => {
//         state.user = payload.response.data.user;
//         const { TEN_KH, SDT, EMAIL, MA_TK } = payload.response.data.user;
//         const userLocalStorage = { TEN_KH, SDT, EMAIL, MA_TK };
//         localStorage.setItem("user", JSON.stringify(userLocalStorage));
//       })
//       .addCase(login.rejected, (state, { error }) => {
//         state.error = error.message || "Login failed!";
//       });
//   },
// });

// export default taiKhoanSlice;
