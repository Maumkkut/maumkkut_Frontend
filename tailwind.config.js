/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mk-logo1': '#8BD9D1',
        'mk-logo2': '#04BFBF',
        'mk-logo3': '#038C8C',
        'mk-logo4': '#023A40',
        'mk-logoPoint': '#FFD74A',
        'mk-light': '#F8F8F8',
        'mk-grey1': '#4D4D4D',
        'mk-grey2': '#717171',
        'mk-darkgray': '#6E6E6E',
        'mk-grey3': '#666666',
        'mk-newgrey': '#B5B5B5',
        'mk-gangwon': '#CA0238',
      },
      fontFamily: {
        tantan: ['gamtanTantan', 'sans-serif'],
        dotum: ['gamtanDotum', 'sans-serif'],
        pretendard: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
