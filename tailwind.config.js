/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        profile:
          'linear-gradient(4.71239rad, rgb(102, 1, 229) 12%, rgb(196, 137, 255) 90%)',
        bannerImg:
          'linear-gradient(rgba(0, 0, 0, 0) 49.02%, rgba(0, 0, 0, 0.008) 52.42%, rgba(0, 0, 0, 0.035) 55.82%, rgba(0, 0, 0, 0.082) 59.22%, rgba(0, 0, 0, 0.15) 62.62%, rgba(0, 0, 0, 0.23) 66.02%, rgba(0, 0, 0, 0.333) 69.41%, rgba(0, 0, 0, 0.443) 72.81%, rgba(0, 0, 0, 0.557) 76.21%, rgba(0, 0, 0, 0.667) 79.61%, rgba(0, 0, 0, 0.77) 83.01%, rgba(0, 0, 0, 0.85) 86.41%, rgba(0, 0, 0, 0.918) 89.8%, rgba(0, 0, 0, 0.965) 93.2%, rgba(0, 0, 0, 0.992) 96.6%, rgb(0, 0, 0) 100%);',
        headerGradient:
          'linear-gradient(rgba(0, 0, 0, 0.5) 0.48%, rgba(0, 0, 0, 0.47) 3.73%, rgba(0, 0, 0, 0.443) 6.67%, rgba(0, 0, 0, 0.424) 9.29%, rgba(0, 0, 0, 0.404) 11.98%, rgba(0, 0, 0, 0.384) 14.88%, rgba(0, 0, 0, 0.37) 18.18%, rgba(0, 0, 0, 0.34) 25%, rgba(0, 0, 0, 0.32) 32.4%, rgba(0, 0, 0, 0.28) 39.23%, rgba(0, 0, 0, 0.24) 47.42%, rgba(0, 0, 0, 0.2) 57.17%, rgba(0, 0, 0, 0.12) 68.67%, rgba(0, 0, 0, 0.06) 82.12%, rgba(0, 0, 0, 0) 97.71%);',
      },
    },
  },
  plugins: [],
};
