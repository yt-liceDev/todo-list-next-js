/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")({ strategy: "class" })],
};
