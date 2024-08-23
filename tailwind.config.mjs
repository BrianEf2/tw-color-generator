/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                'glass': "rgba(255,255,255, 0.05)"
            }
        },
	},
	plugins: [],
}
