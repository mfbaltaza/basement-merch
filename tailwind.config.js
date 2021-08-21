const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      newDark: "#1D1D1D",
    },
    padding: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "48px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
