/** @type {import('tailwindcss').Config} */
export default {
  mode:"jit",
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './index.html',
     './src/components/**/*.{html,js,jsx,ts,tsx}', 
  ], 
  theme: {
    extend: {
      fontSize:{
       "tiny":"7px"
      },
      borderRadius:{
        "full":"50%"
      },
      width:{
        "webkit":"-webkit-fill-available"
      }
    },
  },
  plugins: [
    // ...
    require( 'tailwind-scrollbar' )( { preferredStrategy: 'pseudoelements' } ),  // default: 'standard'
    //  plugin(function ({ addComponents, theme }) {
    //   addComponents({
    //     '.card': {
    //       backgroundColor: theme('colors.white'),
    //       borderRadius: theme('borderRadius.lg'),
    //       padding: theme('spacing.6'),
    //       boxShadow: theme('boxShadow.xl'),
    //     }
    //   })
    // })
],
}

