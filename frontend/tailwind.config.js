/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      primaryYellow: "#FFB946",
      white: "#FFFFFF",
      offWhite: "#F9F9F9",
      darkBlue: "#334D6E",
      gray: "#C2CFE0",
      lightGray: "#EBEFF2",
      black: "#000000",
      red: "FF0000",
    },
    extend: {},
  },
  plugins: [],
};
