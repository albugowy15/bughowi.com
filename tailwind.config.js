/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
	content: ['./src/**/*.{astro,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Roboto Flex', ...fontFamily.sans],
			},
			colors: {
				// layout
				background: '#000000',
				foreground: '#ECEDEE',
				focus: '#006FEE',

				// content
				content1: '#18181b',
				content2: '#27272a',
				content3: '#3f3f46',
				content4: '#52525b',

				// base
				success: '#17c964',
				warning: '#f5a524',
				danger: '#f31260',

				// default:
				default: {
					DEFAULT: '#3f3f46',
					50: '#18181b',
					100: '#27272a',
					200: '#3f3f46',
					300: '#52525b',
					400: '#71717a',
					500: '#a1a1aa',
					600: '#d4d4d8',
					700: '#e4e4e7',
					800: '#f4f4f5',
					900: '#fafafa',
				},

				// primary:
				primary: {
					DEFAULT: '#006FEE',
					50: '#001731',
					100: '#002e62',
					200: '#004493',
					300: '#005bc4',
					400: '#006FEE',
					500: '#338ef7',
					600: '#66aaf9',
					700: '#99c7fb',
					800: '#cce3fd',
					900: '#e6f1fe',
				},

				// secondary:
				secondary: {
					DEFAULT: '#9353d3',
					50: '#180828',
					100: '#301050',
					200: '#481878',
					300: '#6020a0',
					400: '#7828c8',
					500: '#9353d3',
					600: '#ae7ede',
					700: '#c9a9e9',
					800: '#e4d4f4',
					900: '#f2eafa',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

export default config;
