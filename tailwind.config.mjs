/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,md,ts}'
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		function({ addUtilities }) {
			const newUtilities = {
			  '.hexagon-li': {
				clipPath: 'polygon(30% 0%, 70% 0%, 85% 50%, 70% 100%, 30% 100%, 15% 50%)',
				borderRadius: '15px',
				height: '40px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			  },
			}
			addUtilities(newUtilities, ['responsive', 'hover'])
		  }
	],
}
