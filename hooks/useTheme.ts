import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store"; 
import { setTheme } from "@/redux/slices/globalSlice"; 

export const useTheme = () => {
  const theme = useSelector((state: RootState) => state.global.theme);
  const dispatch = useDispatch();

  const changeTheme = (theme: string) => {
    dispatch(setTheme(theme));
  };

  return { theme, changeTheme };
};
