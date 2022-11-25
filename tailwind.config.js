const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      secondary: "#858fad",
      primary: "#3fa9f5",
      white: "#fff",
      black: "#000"
    },
    extend: {
      fontFamily: {
        // fontName: "fontName",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },

  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('xs-only', "@media screen and (max-width: theme('screens.md'))"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
    }),
  ],
};
