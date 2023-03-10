/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  purge: [
    './src/**/*.{js,ts,jsx,tsx}'
    // Add more here
  ],
  theme: {
    screens: {
      medium: '768px',
      large: '1920px'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)']
      }
    }
  }
};
