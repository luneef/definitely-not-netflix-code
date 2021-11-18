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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
