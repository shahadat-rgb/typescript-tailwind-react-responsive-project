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
            shadow:['1px 1px 14px #ccc6c686']
        },

      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }