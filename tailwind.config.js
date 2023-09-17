/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/index.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'toxic': '#C9FC5F'
      },
      textColor: {
        'gray': '#404044'
      }
    },
  },
  plugins: [],
}

