/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false,
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#363853",
        primary: "#0012FF",
        green: "#67D4CA",
        red: "#F28080",
      },
    },
  },
  plugins: [],
};
