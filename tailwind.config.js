/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/sections/*/*.{js,jsx}",
    "./src/svg/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ["var(--roboto-condensed)"],
        poppins: ["var(--font-poppins)"],
      },
      backgroundColor: {
        dark: "var(--color-dark)",
        primary: "var(--color-primary)",
        lightDark: "var(--color-light-dark)",
        slightDark: "var(--color-slight-dark)",
      },
      textColor: {
        dark: "var(--color-dark)",
        primary: "var(--color-primary)",
        lightDark: "var(--color-light-dark)",
        slightDark: "var(--color-slight-dark)",
        lightGray: "var(--color-white-gray)",
      },
      screens: {
        "2xl": { max: "1400px" },
        "1xl": { max: "1150px" },
        xl: { max: "1024px" },
        l: { max: "900px" },
        lg: { max: "768px" },
        md: { max: "640px" },
        sm: { max: "320px" },
        "2xl-min": { min: "1400px" },
        "1xl-min": { min: "1150px" },
        "xl-min": { min: "1024px" },
        "lg-min": { min: "768px" },
        "md-min": { min: "640px" },
        "sm-min": { min: "320px" },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
