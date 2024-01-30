/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	content: [
		'./src/**/*.{astro,html,js,md,ts}'
	],
	theme: {
		colors: {
			transparent: 'transparent',
      		current: 'currentColor',
			cyan: colors.cyan,
			neutral: colors.neutral,
			'light-gold': '#fcde9d',
			'dark-gold': '#9f5b22',
		},
		
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwind-scrollbar'),
	],
}
