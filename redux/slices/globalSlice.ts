import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GlobalSliceInitialState {
  loading: boolean;
  theme: string;

}

export const initialState: GlobalSliceInitialState = {
  loading: false,
  theme: typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  extraReducers: (builder) => {
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", action.payload);
      }
    },
  },
});

export const { setLoading, setTheme } = globalSlice.actions;

export default globalSlice.reducer;