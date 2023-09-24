/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yellow: "#E1B168",
      ash: "#DEDEDE",
      white: "#ffffff",
    },
    fontSize: {
      sm: "12px",
      md: "14px",
      lg: "16px",
      "icon-sm": "20px",
      "icon-md": "24px",
      "icon-lg": "28px",
    },
    extend: {},
  },
  plugins: [],
};
