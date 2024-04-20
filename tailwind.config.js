/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.js"],

  theme: {
    extend: {
      screens: {
        md: "800px",
      },
      colors: {
        primary: "#00BF73",
        secondary: "#555555",
        bgSecondary: "#ededed",
        color1: " #b0d590",
        color2: "#bfbbfd",
        color3: "#ffbcca",
        color4: "#a5dcf6",
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.js"],
};
