/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "480px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { max: "1440px" },
    },
  },

  plugins: [],
};
