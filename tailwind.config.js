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
    keyframes: {
      'scale-up-tr': {
        '0%': { transform: 'scale(0)', 'transform-origin': '100% 0%', display: 'hidden' },
        '100%': { transform: 'scale(1)', 'transform-origin': '100% 0%', display: 'flex' },
      },
      'scale-down-tr': {
        '0%': { transform: 'scale(1)', 'transform-origin': '100% 0%', display: 'flex' },
        '100%': { transform: 'scale(0)', ' transform-origin': '100% 0%', display: 'hidden' },
      },
    },
    animation: {
      'scale-up-tr': 'scale-up-tr 0.4s ease both',
      'scale-downs-tr': 'scale-down-tr 0.4s ease both',
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
