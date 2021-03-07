module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '2px',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      fontFamily: {
        'body': 'Nunito'
      },
      colors: {
        'primaryPink': "#F31868",
        'secondaryPink': "rgba(242,24,104,0.1)",
        'gray-900': "#131414",
        'd-bg-container':"#212424",
        'd-secondary':'#1a1f1f'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd'],
    },
  },
  plugins: [],
}
