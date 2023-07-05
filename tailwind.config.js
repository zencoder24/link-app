/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#633cff",
        "purple-hover": "#beadff",
        "light-purple": "#efebff",
        "dark-grey": "#333333",
        grey: "#737373",
        "border-grey": "d9d9d9",
        "light-grey": "#fafafa",
        red: "#FF3939",
      },
    },
  },
  plugins: [],
};
