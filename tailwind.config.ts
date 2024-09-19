import type { Config } from "tailwindcss";

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair_Display', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        'light': {
          "primary": "#6200ff",
          "primary-content": "#000000",
          "secondary": "#0072ff",
          "secondary-content": "#000416",
          "neutral": "#8133FF",
          "base-100": "#fbfbfb",
          "base-200": "#000000",
          "base-300": "#fdfbff",
          "base-content": "#161615",
          "info": "#00a5c5",
          "info-content": "#000a0e",
          "success": "#578e00",
          "success-content": "#030700",
          "warning": "#ffb100",
          "warning-content": "#160c00",
          "error": "#ff2974",
          "error-content": "#160105",
        },
      },
      {
        'dark': {
          "primary": "#7f00ff",
          "primary-content": "#ffffff",
          "secondary": "#8133FF",
          "secondary-content": "#000616",
          "neutral": "#AE51FF",
          "base-100": "#202237",
          "base-200": "#ffffff",
          "base-300": "#262840",
          "base-content": "#cad0d3",
          "info": "#0093ff",
          "info-content": "#000816",
          "success": "#008d00",
          "success-content": "#000700",
          "warning": "#ff5c00",
          "warning-content": "#160300",
          "error": "#de0043",
          "error-content": "#ffd7d8",
        },
      }
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
export default config;
