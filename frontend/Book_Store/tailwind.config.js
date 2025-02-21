
/** @type {import('tailwindcss/tailwind-config').TailwindConfig}*/

module.exports = {
    content: [  
        'index.html',
      './src/**/*.{html,js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        colors:{
            'primary':'#FFCE1A',
            'secondary':'#0D0842',
            'tertiary':'#F3F3F3',
            'Favorite':'#FF5841',
        },
        fontFamily: {
          'primary': ['Montserrat', 'sans-serif'],
            'secondary': ['Nunito Sans', 'sans-serif']
        }
      },

    },
    plugins: [],
  }