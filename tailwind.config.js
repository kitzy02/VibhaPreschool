/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#3498DB",
        primaryOrange: "#FF5733",
        earlyGreen: "#2ECC71",
        accentYellow: "#F1C40F",
      },
    },
  },
  plugins: [],
}
