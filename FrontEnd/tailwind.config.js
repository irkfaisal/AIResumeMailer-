/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'dark-gradient': 'linear-gradient(10.81deg, #0c1b3a -43.27%, #0a1733 -21.24%, #0a1130 12.19%, #090f29 29.82%, #070b23 51.94%, #040615 90.29%)',
      // },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(360.81deg, #0b162e -43.27%, #090e23 -21.24%, #080c20 5%, #07081d 20%, #050618 35%, #040515 51.94%, #02030e 70%, #000000 100%)',
      },
      
    },
  },
  plugins: [],
}
