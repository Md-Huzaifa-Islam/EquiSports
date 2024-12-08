/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarbg: "#1E293B", // Navbar background
        hovertext: "#FFB300", // Hover text color
        // Secondary button color
        backgroundDark: "#1a202c",
        backgroundLight: "#f7fafc",
        primary: "#4fd1c5",
        secondary: "#81e6d9",
        textLight: "#edf2f7",
        textDark: "#2d3748",
        borderGray: "#cbd5e0",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },

  plugins: [daisyui],
};
