/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'form-bg': "url('/src/assets/bg2.webp')",
      },
      colors: {
        customPink: '#FF94D5',
      },
    },
  },
  plugins: [],
};
