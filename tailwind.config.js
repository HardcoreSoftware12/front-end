/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      desktop:'1280px',

    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}