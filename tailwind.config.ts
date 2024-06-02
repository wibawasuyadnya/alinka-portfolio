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
          "primary-content": "#d9daff",
          "secondary": "#0072ff",
          "secondary-content": "#000416",
          "accent": "#f96a00",
          "accent-content": "#150400",
          "neutral": "#260b19",
          "neutral-content": "#d0c8cb",
          "base-100": "#fbfbfb",
          "base-200": "#fffff8",
          "base-300": "#bebeb8",
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
          "primary-content": "#e1d9ff",
          "secondary": "#0083ff",
          "secondary-content": "#000616",
          "accent": "#00a236",
          "accent-content": "#000a01",
          "neutral": "#100703",
          "neutral-content": "#c9c6c4",
          "base-100": "#202237",
          "base-200": "#0b201f",
          "base-300": "#071919",
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
