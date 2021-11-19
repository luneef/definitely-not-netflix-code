module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        heroimg: "url('/dnnhero.png')",
      },

      fontFamily: {
        body: ["Roboto"],
      },

      colors: {
        "custom-gray": "#303030",
        "custom-yellow": "#757575",
        "custom-red": "#E50914",
      },
    },

    screens: {
      "2xl": { max: "1538px" },
      xl: { max: "1282px" },
      lg: { max: "1026px" },
      md: { max: "770px" },
      sm: { max: "642px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
