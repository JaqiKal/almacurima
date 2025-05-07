// 📁 tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",       // Background
        heading: "#0e0e0e",       // Text
        secondary: {
          "50": "#fcfcfc",
          "100": "#f9faf9",
          "200": "#f4f4f3",
          "300": "#eeefec",
          "400": "#e9e9e6",
          "500": "#e3e4e0",
          "600": "#b6b6b3",
          "700": "#888986",
          "800": "#5b5b5a",
          "900": "#2d2e2d"
        },
      },
    },
  },
  plugins: [],
}