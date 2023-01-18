/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'profile': "linear-gradient(4.71239rad, rgb(102, 1, 229) 12%, rgb(196, 137, 255) 90%)",
     },
    },
  },
  plugins: [],
};
