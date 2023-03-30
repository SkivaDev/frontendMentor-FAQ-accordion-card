/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        '1260/66': '1260% 66%',
      }
    },
    screens: {
      'md': '940px',
    }
  },
  plugins: [],
}

