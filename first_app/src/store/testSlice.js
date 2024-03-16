import { createSlice } from "@reduxjs/toolkit";

export const {
  name,
  actions: { setUser, setError, setLoading },
  reducer,
} = createSlice({
  name: "test",
  initialState: {
    user: {},
    error: false,
    loading: true,
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});
