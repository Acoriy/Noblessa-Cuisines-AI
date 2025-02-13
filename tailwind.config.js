/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        HelveticaNeue:['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        bodoni: ['"Bauer Bodoni"', 'serif'],
      },
      colors:{
        Primary : "#A48145",
        HoverColor : "#D1B17B",
        Textcolor : "#0D0802",
      },
      // wordSpacing: {
      //   'wide': '1rem',
      //   'wider': '1rem',
      //   'widest': '2rem',
      // }
    },
  },
  plugins: [],
}