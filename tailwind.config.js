/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
	content: ['./src/**/*.{astro,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Inter', ...fontFamily.sans],
			},
			colors: {
				darkPrimary: '#16181a',
				darkSecondary: '#23222B',
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

export default config;
