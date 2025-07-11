export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow"', "sans-serif"],
        sans: ['"Barlow"', "sans-serif"], // Esto la establece como fuente predeterminada
      },
    },
  },
  plugins: [],
};
