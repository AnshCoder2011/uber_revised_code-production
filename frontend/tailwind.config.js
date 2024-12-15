/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'ubermove': ['UberMoveMedium', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
