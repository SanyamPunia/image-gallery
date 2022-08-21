/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "noto-sans": ["Noto Sans"],
      "poppins": ["Poppins"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
