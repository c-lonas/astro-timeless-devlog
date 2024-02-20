/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	content: [
		'./shared/src/**/*.{astro,html,js,md,ts}',
		'./tech/src/**/*.{astro,html,js,md,ts}',
	  ],
	theme: {
		extend: {
			transitionDuration: {
				'600': '600ms'
			},
			spacing: {
				'68': '17rem'
			}
		},
		colors: {
			transparent: 'transparent',
      		current: 'currentColor',
			cyan: colors.cyan,
			neutral: colors.neutral,
			emerald: colors.emerald,
			fuchsia: colors.fuchsia,
			rose: colors.rose,
			teal: colors.teal,
			'light-gold': '#fcde9d',
			'dark-gold': '#9f5b22',
		},
		
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwind-scrollbar'),
	],
}
