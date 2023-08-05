/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'ChosunGu': ['ChosunGu', 'sans-serif'],
        'WoojuR' : ['HakgyoansimWoojuR', 'sans-serif'],
        'NanumSquareRound' : ['NanumSquareRound', 'sans-serif'],
        'Pretendard' : ['Pretendard Variable', 'sans-serif'],
      },
      colors: {
        'primary': '#4238E2',
        // 'secondary': '#FF0000',
        'applegray' : '#888',
        'hoverbg' : '#EEF2FF',
      },
    },
  },
  plugins: [],
}
