const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      slate: colors.slate,
      blue: colors.blue,
      gray: colors.gray,
      teal: colors.teal,
      green: colors.green,
      c1: "#082032",
      c2: "#2C394B",
      c3: "#334756",
      c4: "#FF4C29",
    },
  },
  plugins: [],
};
