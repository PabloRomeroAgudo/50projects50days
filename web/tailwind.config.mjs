/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f5f5f5',
					100: '#efefef',
					200: '#dcdcdc',
					300: '#bdbdbd',
					400: '#989898',
					500: '#7c7c7c',
					600: '#656565',
					700: '#525252',
					800: '#464646',
					900: '#3d3d3d',
					950: '#292929',
				},
				secondary: {
					50: '#edfcff',
					100: '#d6f7ff',
					200: '#b5f3ff',
					300: '#83eeff',
					400: '#48e1ff',
					500: '#48e1ff',
					600: '#48e1ff',
					700: '#0099ff',
					800: '#0874c5',
					900: '#0d629b',
					950: '#0e3b5d',
				},
			},
			screens: {
				md: '796px',
				otra: '1110px',
				lg: '1300px',
			},
		},
	},
	plugins: [],
}
