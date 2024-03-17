/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"clearface": ["Clearface", "sans-serif"],
				"karla": ["Karla", "sans-serif"],
			},
			colors: {
				"vushOrange": "#ffc696",
				"vushYellow": "#ede891",
				"vushGreen": "#c9e89b",
				"vushBlack": "#373737",
			}
		},
	},
	plugins: [],
}
