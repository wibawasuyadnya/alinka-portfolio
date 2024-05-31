import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const useChangeTheme = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    changeTheme(newTheme);
  };

  return { theme, toggleTheme };
};

export default useChangeTheme;
