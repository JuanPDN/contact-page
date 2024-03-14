/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily:{
        be_Vietnam_Pro: ['"Be Vietnam Pro"', 'sans-serif']
      },
      backgroundImage:{
        'bg-image': "url('/src/assets/bg-image.svg')"
      }
    },
  },
  plugins: [],
}

