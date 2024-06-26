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
