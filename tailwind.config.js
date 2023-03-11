/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "CircularBold": ["Circular Sp Vit Bold Web"],
        "CircularBook": ["Circular Sp Vit Book Web"],
        "CircularLight": ["Circular Sp Vit Light Web"],
        "CircularMedium": ["Circular Sp Vit Medium Web"],
      },
      colors: {
        primary: "#1ed760"
      }
    },
  },
  plugins: [],
}