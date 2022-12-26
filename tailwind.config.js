module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'violetLivre': '#464568',
    'white': '#FFFFFF ' 
    },

    extend: {
      backgroundImage: {
        'bandeau': "url('/bandeau.png')",
        'fond': "url('/fond02.jpg')"
      }
        
    },
  },
  variants: {
    extend: {
      transitionDelay: ['hover', 'focus']
    },
  },
  plugins: [],
}
