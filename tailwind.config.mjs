/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#0280D8',
				'secondary': '#28B8DB',
				'thirdy': '#012E89',
				'text': '#004765'
			},
			fontFamily: {
				'Barlow': 'Barlow',
				'Poppins': 'Poppins'
			}
			
		},
	},
	plugins: [],
}
