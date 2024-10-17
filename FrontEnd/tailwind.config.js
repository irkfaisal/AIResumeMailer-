/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-gradient': 'linear-gradient(360.81deg, #0b162e -43.27%, #090e23 -21.24%, #080c20 5%, #07081d 20%, #050618 35%, #040515 51.94%, #02030e 70%, #000000 100%)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },  
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      ms: "820px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
