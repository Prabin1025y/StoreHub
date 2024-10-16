/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppin":["Poppins", "sans-serif"],
        "roboto":["Roboto", "sans-serif"],
        "boogaloo":["Boogaloo", "sans-serif"],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

