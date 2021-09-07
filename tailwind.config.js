module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({

        'degrad-left': "url('/degrad-left.webp')",

        'degrad-top': "url('/degrad-top.webp')",
       })

    },
  },
  variants: {
    extend: {
      transitionDelay: ['hover', 'focus']
    },
  },
  plugins: [],
}
