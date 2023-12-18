/*eslint no-undef: "error"*/
/*eslint-env node*/

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

import defaultTheme from 'tailwindcss/defaultTheme';

let gridAutoFills = {};
let i = 5;
while (i <= 75) {
  gridAutoFills[`auto-fill-${i * 10}`] = `repeat(auto-fill, minmax(${
    i * 10
  }px, 1fr))`;
  gridAutoFills[`auto-fit-${i * 10}`] = `repeat(auto-fit, minmax(${
    i * 10
  }px, 1fr))`;

  i += 1;
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '576px',
      md: '768px',
      lg: '912px',
      xl: '1024px',
      '2xl': '1280px',
      '3xl': '1536px',
    },
    fontFamily: {
      light: [
        ['TT-Commons-400', ...defaultTheme.fontFamily.sans],
        {
          fontVariationSettings: '"wght" 300',
        },
      ],
      regular: [
        ['TT-Commons-400', ...defaultTheme.fontFamily.sans],
        {
          fontVariationSettings: '"wght" 400',
        },
      ],
      bold: [
        ['TT-Commons-600', ...defaultTheme.fontFamily.sans],
        {
          fontVariationSettings: '"wght" 600',
        },
      ],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',

      primary: {
        DEFAULT: '#151A45',
        // 20: '#151A4533',
        // 80: '#151A45CC',
      },
      secondary: {
        DEFAULT: '#FEA353',
      },
      gray: {
        DEFAULT: '#3C3C3C',
        lines: '#D2D2D2',
        captions: '#8F8F8F',
        bg: '#EBEDEE',
      },
      link: {
        DEFAULT: '#434A8D',
        dark: '#BFC4F3',
      },
      blue: {
        DEFAULT: '#23295B',
        bg: '#202556',
        dark: '#121633',
        darker: '#0E1130',
      },
    },
    extend: {
      spacing: {
        30: '7.5rem',
      },
      fontSize: {
        '2xs': [
          '0.6875rem', {
            lineHeight: '0.875rem'
          }
        ]
      },
      boxShadow: {
        light: '0px 4px 16px 0px rgba(0, 0, 0, 0.08)',
        small: '0px 4px 16px 0px rgba(0, 0, 0, 0.16)',
        medium: '0px 8px 24px 0px rgba(0, 0, 0, 0.16)'
      },
      gridTemplateColumns: gridAutoFills,
      backgroundImage: {
        'gradient-primary': 'linear-gradient(89deg, theme("colors.primary.DEFAULT") 0.2%, theme("colors.link.DEFAULT") 99.48%)',
      },
    },
  },
  plugins: [
    // plugin(function({ addBase, addComponents, addUtilities, theme }) {
    plugin(function({ addComponents, addUtilities }) {
      addComponents({
        '.btn': {
          padding: '9px 18px',
          borderRadius: '46px',
          fontFamily: 'RobotoCondensed-Bold',
          display: 'inline-flex',
          justifyContent: 'center',
          gap: '10px',
          transition: 'all 0.3s ease-in-out',
          overflow: 'hidden',
        },
        '.btn-blue': {
          backgroundColor: 'theme("colors.link.DEFAULT")',
          color: 'theme("colors.white")',
        },
        '.btn-bright': {
          backgroundColor: 'theme("colors.link.dark")',
          color: 'theme("colors.primary.DEFAULT")',
          '&:hover': {
            color: 'theme("colors.link.dark")',
          },
        },
        '.btn-empty': {
          border: '1px solid theme("colors.link.dark")',
          color: 'theme("colors.link.dark")',
          '&:hover': {
            color: 'theme("colors.primary.DEFAULT")',
          },
          '.animated-ellipse': {
            backgroundColor: 'theme("colors.link.dark") !important',
            'div': {
              backgroundColor: 'theme("colors.link.dark") !important',
            }
          },
        },
      })
      addUtilities({
        '.bg-underline': {
          backgroundImage: 'linear-gradient(theme("colors.transparent"), theme("colors.transparent")), linear-gradient(theme("colors.current"), theme("colors.current"))',
          backgroundSize: '100% 0.1em, 0 0.1em',
          backgroundPosition: '100% calc(100% - 1px), 0 calc(100% - 1px)',
          backgroundRepeat: 'no-repeat',
          transition: 'background-size 0.4s 0.1s ease-out',
          '&.reverse': {
            backgroundPosition: '0% 100%, 100% 100%'
          }
        },
        // '.gradient-1': {
        //   background: `linear-gradient(89deg, ${theme(colors.primary,20)}, ${theme(colors.link.default)})`
        // },
      })
    }),
  ]
}