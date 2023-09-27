/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "13px",
      md: "15px",
      lg: "17px",
    },
    extend: {
      colors: {
        yellow: "#E1B168",
        ash: "#DEDEDE",
        white: "#ffffff",
        midblack: "#40464F",
        black: "#292E36",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        cormorant: ["Cormorant Infant", "serif"],
        zeyeda: ["Zeyada", "cursive"],
      },
      backgroundColor: {
        "mid-black": "#292E36",
        "light-pink": "#FFF8F5",
        "pure-white": "#ffffff",
      },
      fontSize: {
        "icon-sm": "20px",
        "icon-md": "24px",
        "icon-lg": "28px",
        "h1-lg": "90px",
        "h1-md": "70px",
        "h1-sm": "60px",
      },
      aspectRatio: {
        "2/1/": "2/1",
        "3/2": "3/2",
      },
    },
  },
  plugins: [],
};
