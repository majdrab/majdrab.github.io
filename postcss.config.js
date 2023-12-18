/*eslint no-undef: "error"*/
/*eslint-env node*/
// import tailwindcss from "tailwindcss";
// import eachInMap from "postcss-each-in-map";

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    "postcss-each": {},
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": { stage: 1, features: { "nesting-rules": false } },
  },
}
