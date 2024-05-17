/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-white": "#f1f6f9",
        "offwhite-opacity": "#f1f6f9",
        "navy-blue": "#394867",
        "navy-blue-dark": "#212a3e",
        "heavy-gray": "#9ba4b5",
        "light-orange": "#ff9933",
      },
      screens: {
        xs: "480px",
        "3xl": "1650px",
        "4xl": "2200px",
      },
    },
  },
  plugins: [],
};
