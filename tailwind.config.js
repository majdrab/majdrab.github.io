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
        DEFAULT: '#151736',
        '60': '#15173699',
        '30': '#1517364D',
        light: '#434165',
      },
      secondary: {
        DEFAULT: '#00C894',
      },
      gray: {
        DEFAULT: '#313136',
        dark: '#202020',
        '400': '#67686B',
        '300': '#9EA0A5',
        '200': '#CECFD2',
        '100': '#F1EDFF',
      },
      purple: {
        DEFAULT: '#5B2E58',
        light: '#A44A65',
      },
      orange: {
        DEFAULT: '#DE7561',
        light: '#FDB25B',
      },
      yellow: '#F9F871',
      beige: {
        DEFAULT: '#FFFADE',
        stronger: '#E8D5B5',
      },
      lavender: '#BFBBE5',
      tech: {
        vue: '#41B883',
        github: '#171515',
        sass: '#CC6699',
        js: '#F0DB4F',
        css: '#264DE4',
        html: '#E34C26',
      },
    },
    extend: {
      spacing: {
        '15': '3.75rem',
        '30': '7.5rem',
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
        '.v-hidden': {
          opacity: '0',
          visibility: 'hidden',
          pointerEvents: 'none',
          userSelect: 'none',
        },
        '.v-visible': {
          opacity: '1',
          visibility: 'visible',
          pointerEvents: 'auto',
          userSelect: 'auto',
        },
        '.v-transition': {
          transitionProperty: 'opacity, visibility, pointer-events, user-select',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '0.3s',
        },
        // '.gradient-1': {
        //   background: `linear-gradient(89deg, ${theme(colors.primary,20)}, ${theme(colors.link.default)})`
        // },
      })
    }),
  ]
}