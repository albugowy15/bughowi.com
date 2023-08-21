/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{astro,md,mdx,ts,tsx}'],
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
