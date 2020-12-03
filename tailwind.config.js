module.exports = {
  purge: {
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { sans: ['Poppins'] },
      flexGrow: {
        DEFAULT: 1,
        2: 1,
      },
      colors: {
        cyan: {
          light: 'hsl(180, 66%, 80%)',
          DEFAULT: 'hsl(180, 66%, 49%)',
        },
        violet: {
          light: 'hsl(257, 7%, 63%)',
          DEFAULT: 'hsl(257, 27%, 26%)',
          dark: 'hsl(260, 8%, 14%)',
        },
        red: 'hsl(0, 87%, 67%)',
        gray: {
          light: 'hsl(225, 33%, 95%)',
          DEFAULT: 'hsl(0, 0%, 75%)',
        },
        blue: {
          dark: 'hsl(255, 11%, 22%)',
        },
      },
      backgroundImage: () => ({
        'shorten-mobile': "url('/images/bg-shorten-mobile.svg')",
        'shorten-desktop': "url('/images/bg-shorten-desktop.svg')",
        'boost-mobile': "url('/images/bg-boost-mobile.svg')",
        'boost-desktop': "url('/images/bg-boost-desktop.svg')",
      }),
    },
    keyframes: {
      'scale-up-tr': {
        '0%': { transform: 'scale(0)', 'transform-origin': '100% 0%' },
        '100%': { transform: 'scale(1)', 'transform-origin': '100% 0%' },
      },
      'scale-down-tr': {
        '0%': { transform: 'scale(1)', 'transform-origin': '100% 0%' },
        '100%': { transform: 'scale(0)', ' transform-origin': '100% 0%' },
      },
    },
    animation: {
      'scale-up-tr': 'scale-up-tr 0.4s forwards ',
      'scale-downs-tr': 'scale-down-tr 0.4s forwards ',
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
