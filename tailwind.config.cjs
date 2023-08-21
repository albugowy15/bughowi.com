/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        darkPrimary: '#0F172A',
        darkSecondary: '#1E293B',
        lightPrimary: '#EDF6F9',
        lightSecondary: '#FFFFFF',
        blueAccent: '#255FF5',
        redAccent: '#d62424',
        yellowAccent: '#F2BB02',
        grayAccent: '#413C58',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
