const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      newDark: "#1D1D1D",
      "smoke-darkest": "rgba(0, 0, 0, 0.9)",
      "smoke-darker": "rgba(0, 0, 0, 0.75)",
      "smoke-dark": "rgba(0, 0, 0, 0.6)",
      smoke: "rgba(0, 0, 0, 0.5)",
      "smoke-light": "rgba(0, 0, 0, 0.4)",
      "smoke-lighter": "rgba(0, 0, 0, 0.25)",
      "smoke-lightest": "rgba(0, 0, 0, 0.1)",
    },
    padding: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "48px",
    },
    animation: {
      "spin-slow": "spin 12s linear infinite",
      ticker: "ticker 40s linear infinite",
      ticker2: "ticker2 40s linear infinite",
    },
    keyframes: {
      ticker: {
        "0%": {
          transform: "translateX(100%)",
        },
        "100%": {
          transform: "translateX(-100%)",
        },
      },
      ticker2: {
        "0%": {
          transform: "translateX(0)",
        },
        "100%": {
          transform: "translateX(-200%)",
        },
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
