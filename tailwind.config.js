/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      xsm: "365px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        Wagon: ["Wagon", "serif"],
        WagonI: ["WagonI", "serif"],
        WagonB: ["WagonB", "serif"],
        Armate: ["Armate", "serif"],
        Neue: ["Neue", "serif"],
        NeueT: ["NeueT", "serif"],
        Climate: ["Climate", "serif"],
        BabylonH: [" BabylonH", "serif"],
        Domino: ["Domino", "serif"],
        Music: ["Music", "serif"],
        Oddval: [" Oddval", "serif"],
        tOdd: ["tOdd", "serif"],
        NeueLI: ["NeueLI", "serif"],
        NeueI: ["NeueI", "serif"],
        NeueBI: ["NeueLI", "serif"],
        OddL: ["OddL", "serif"],
        OddT: ["OddT", "serif"],
        OddM: ["OddM", "serif"],
        PvcB: ["PvcB", "serif"],
        PvcI: ["PvcI", "serif"],
      },
    },
  },
  plugins: [],
};
