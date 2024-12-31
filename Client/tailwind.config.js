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
      },
      objectPosition: {
        "top":"[10% 35%]"
      }
    },
     screens: {
      'sm': '340px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
 
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

