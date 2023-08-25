/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        400: '480px',
        635: '635px',
        700: '700px',
      },
    },
  },
  plugins: [],
};
