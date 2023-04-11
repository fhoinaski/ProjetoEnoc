/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#00FF00",
        btn_primary: "#00CC2C",
        color_card:"#0F3517",
        color_card2:"#006E00",
      },
    },
  },
  plugins: [require("daisyui")],
};
