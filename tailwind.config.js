/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Karla", ...fontFamily.sans],
      },
      colors: {
        darkPrimary: "#121212",
        darkSecondary: "#212121",
        lightPrimary: "#EDF6F9",
        lightSecondary: "#FFFFFF",
        blueAccent: "#255FF5",
        redAccent: "#d62424",
        yellowAccent: "#F2BB02",
        grayAccent: "#413C58",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "15%": { transform: "rotate(14.0deg)" },
          "30%": { transform: "rotate(-8.0deg)" },
          "40%": { transform: "rotate(14.0deg)" },
          "50%": { transform: "rotate(-4.0deg)" },
          "60%": { transform: "rotate(10.0deg)" },
          "70%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        wave: "wave 1.5s infinite",
      },
    },
  },
  variants: {
    extends: {},
  },
  plugins: [],
};
