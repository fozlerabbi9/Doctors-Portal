/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  // plugins: [],
  daisyui: {
    themes: [
      {
        doctorstheme: {
          // primary: "#a991f7",
          // primary: "rgb(200, 241, 18)",
          primary: "#0FCFEC",
          // secondary: "#f6d860",
          secondary: "#19D3AE",
          accent: "#37cdbe",
          neutral: "#3A4256",
          // whitegray:"#3A4256",
          "base-100": "#ffffff",
          // "base-100" : "#FF0000",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms')
  ],
}
