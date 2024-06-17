/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bv: "'Be Vietnam Pro', sans-serif",
      },
      colors: {
        primary: "#F8FAFC",
      },
    },
  },
  plugins: [],
};
