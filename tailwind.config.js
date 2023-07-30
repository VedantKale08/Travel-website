/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    backgroundImage: {
      "goa-image": "url('/public/assets/goa.jpg')",
      "himalaya-image": "url('/public/assets/Himalaya.jpg')",
      "gate-image": "url('/public/assets/gateOfIndia.jpg')",
      "taj-image": "url('/public/assets/taj.jpg')",
    },
  },
  plugins: [],
}
