/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          900: "#064E3B",
          800: "#065F46",
          700: "#047857",
          600: "#059669",
          100: "#D1FAE5",
        },
        beige: {
          100: "#F5F5DC",
        },
      },
    },
  },
  plugins: [],
}
