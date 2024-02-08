/** @type {import('tailwindcss').Config} */

const baseConfig = require("../shared/tailwind.config")

export default {
	...baseConfig,
	content: [
		'../shared/src/**/*.{astro,html,js,md,ts}',
		'../shared/tailwind.config.cjs',
		'./src/**/*.{astro,html,js,md,ts}',
		// Add other packages as needed
	  ],
	
}
