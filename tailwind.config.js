const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Mulish", ...fontFamily.sans],
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
    },
  },
  plugins: [],
};
