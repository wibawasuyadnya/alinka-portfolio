import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Language } from "@/types/enum";

interface GlobalSliceInitialState {
  loading: boolean;
  theme: string;
  language: Language;
}

const getInitialTheme = (): string => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") || "light";
  }
  return "light";
};

const getInitialLanguage = (): Language => {
  if (typeof window !== "undefined") {
    const preferredLanguage = navigator.language.split("-")[0] as Language;
    if (Object.values(Language).includes(preferredLanguage)) {
      return preferredLanguage;
    }
  }
  return Language.ID;
};

export const initialState: GlobalSliceInitialState = {
  loading: false,
  theme: getInitialTheme(),
  language: getInitialLanguage(),
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", action.payload);
      }
    },
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export const { setLoading, setTheme, setLanguage } = globalSlice.actions;

export default globalSlice.reducer;
