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
      "gray-sub": "rgba(153, 153, 153, 1)",
    },
    padding: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "48px",
      modal: "211px",
    },
    extend: {
      animation: {
        marquee: "marquee 30s linear infinite",
        pop: "pop 0.35s ease-out",
        bump: "bump 0.3s ease-in-out",
      },
      keyframes: {
        marquee: {
          "0%": {transform: "translate3d(0,0,0)"},
          "100%": {transform: "translate3d(-50%,0,0)"},
        },
        pop: {
          "0%": {transform: "scale(0.6)", opacity: "0"},
          "60%": {transform: "scale(1.08)"},
          "100%": {transform: "scale(1)", opacity: "1"},
        },
        bump: {
          "0%, 100%": {transform: "scale(1)"},
          "40%": {transform: "scale(1.15)"},
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
