module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
