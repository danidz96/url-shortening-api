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
        violet: {
          light: 'hsl(257, 7%, 63%)',
          DEFAULT: 'hsl(257, 27%, 26%)',
          dark: 'hsl(260, 8%, 14%)',
        },
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        blue: {
          dark: 'hsl(255, 11%, 22%)',
        },
      },
    },
    borders: {
      'border-1': { 'border-width': '1px' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
