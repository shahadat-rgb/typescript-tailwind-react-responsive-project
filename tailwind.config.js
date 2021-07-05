// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme:{
      extend: {
        fontFamily :{
          body : ['Poppins']
        },
        boxShadow:{
            shadow:['1px 1px 12px #d6cfcf']
        },

        padding:{
          left:['108px'],
          right:['108px']
        },
         
        gradientColorStops: theme => ({
          ...theme('colors'),
          'orchid': '#e499e2',
          
         })
        }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }