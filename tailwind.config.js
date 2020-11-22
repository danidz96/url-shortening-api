module.exports = {
  purge: {
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { sans: ['Poppins'] },
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        darkBlue: 'hsl(255, 11%, 22%)',
        darkViolet: 'hsl(260, 8%, 14%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
