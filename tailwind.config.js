/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        seasons: ['TheSeasons', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },

  plugins: [],
}