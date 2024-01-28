/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	content: [
		'./src/**/*.{astro,html,js,md,ts}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'hero': "url('/src/assets/images/common/backgrounds/3.png')"
			},
			
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
