/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#185519",
        "second": "#FCDE70",
        "bgColor": "#F5F7F8",
        "textColor": "#0C1C0E",
      },
      fontFamily: {
        "YS": "'YS'",
        "Asimov": "'Asimov'",
      }
    },
  },
  plugins: [],
}