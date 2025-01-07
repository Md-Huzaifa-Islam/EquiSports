/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: ["#ffffff"], // Dark Charcoal - Main text for strong readability
        primary: ["#008DDA"], // Bright Blue - Energetic for primary elements
        secondary: ["#41C9E2"], // Vibrant Yellow - For secondary elements and highlights
        accent: ["#F7EEDD"], // Bold Red - For accents like CTAs and alerts
        background: ["#ACE2E1"],
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },

  plugins: [daisyui],
};
