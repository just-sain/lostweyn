/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#16161a',
				card: '#16161a',
				paragraph: '#94a1b2',
				primary: '#7f5af0',
				secondary: '#2cb67d',
			},
		},
	},
	plugins: [],
};
