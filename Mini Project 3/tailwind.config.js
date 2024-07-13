/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      Playwrite : ["Playwrite CU", "cursive"],
    }
  },
  plugins: [],
}
// npx tailwindcss -i ./input.css -o ./output.css --watch
// npx tailwindcss -i ../input.css -o ../output.css --watch