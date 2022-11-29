/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      medium: '768px',
      large: '1920px'
    },
    extend: {}
  },
  plugins: [require('daisyui')]
};
