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
        secondary: "#e3e4e0",     // Sections, grids etc
        heading: "#0e0e0e",       // Text
      },
    },
  },
  plugins: [],
}