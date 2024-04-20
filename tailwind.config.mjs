/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	
	theme: {
		extend: {
			animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2.5rem))",
          },
        },
      },
			fontFamily: {
				"clearface": ["Clearface", "sans-serif"],
				"karla": ["Karla", "sans-serif"],
			},
			colors: {
				"vushOrange": "#ffc696",
				"vushOrangeDark": "#ff9e5b",
				"vushYellow": "#ede891",
				"vushGray": "#f5f5f5",
				"vushYellowDark": "#e5d05b",
				"vushGreen": "#c9e89b",
				"vushGreenDark": "#a3d05b",
				"vushBlack": "#373737",
			}
		},
	},
}
