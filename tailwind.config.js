/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mk-logo0': '#E2F1F0',
        'mk-logo1': '#8BD9D1',
        'mk-logo2': '#04BFBF',
        'mk-logo3': '#038C8C',
        'mk-logo4': '#023A40',
        'mk-logoPoint': '#FFD74A',
        'mk-light': '#F8F8F8',
        'mk-grey1': '#4D4D4D',
        'mk-grey2': '#717171',
        'mk-grey3': '#666666',
        'mk-darkgrey': '#6E6E6E',
        'mk-newgrey': '#B5B5B5',
        'mk-gangwon': '#CA0238',
        'mk-mint': '#8BD9D1',
        'mk-tag1': '#FFCDD2',
        'mk-tag2': '#FFF9C4',
        'mk-tag3': '#DCEDC8',
        'mk-tag4': '#B3E5FC',
        'mk-tag5': '#E1BEE7',
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
