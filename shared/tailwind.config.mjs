/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	
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
			'light-gold': '#fcde9d',
			'dark-gold': '#9f5b22',
		},
		
	},
}
