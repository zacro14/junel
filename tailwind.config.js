/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      main: "#e8e4e6",
      secondary: "#abd1c6",
      tertiary: "#e16162",
      higlight: "#f9bc60",
      stroke: "#001e1d",
    },
    extend: {},
  },
  plugins: [],
};
