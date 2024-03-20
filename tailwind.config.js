/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'kolker-brush': ['Kolker Brush', 'cursive'],
      }
    },
    screens:{
      desktop:'1280px',

    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}