module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, 
  theme: {
    extend: {},
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",
    },
    fontFamily: {
      main: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked", "disabled"],
    },
  },
  plugins: [],
};
