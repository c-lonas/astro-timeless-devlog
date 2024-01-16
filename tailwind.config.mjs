/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,md,ts}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'hero': "url('/src/assets/images/common/3.png')"
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
