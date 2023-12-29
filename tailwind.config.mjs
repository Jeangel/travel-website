/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
        'main': "url('/home-bg.jpg')",
      },
			fontFamily: {
				'sans': ['Montserrat', 'Poppins']
			}
		},
	},
	plugins: [],
}
