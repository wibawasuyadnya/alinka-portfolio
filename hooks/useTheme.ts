import { RootState } from "@/redux/store"; 
import { setTheme } from "@/redux/slices/globalSlice"; 
import { useAppSelector, useAppDispatch } from "@/redux/hook";

export const useTheme = () => {
  const theme = useAppSelector((state: RootState) => state.global.theme);
  const dispatch = useAppDispatch();

  const changeTheme = (theme: string) => {
    dispatch(setTheme(theme));
  };

  return { theme, changeTheme };
};
