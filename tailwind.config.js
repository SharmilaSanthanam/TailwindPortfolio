/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        sm:"480px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
      },
      fontFamily:{
        nunito:['Nunito', 'sans-serif']
      },
      colors: {
        'lime-green': '#d9f99d',
      },
    },
  },
  plugins: [],
}
