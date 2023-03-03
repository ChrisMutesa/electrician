/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "912px",
      xl: "1440px",
    },
    colors: {
      gold: "#d59f4e",
      noir: "#374151",
      noir1: "#7a808d",
      noir2: "#9ca3af",
      noir3: "#000000",
      blanc: "#ffffff",
      blanc1: "rgb(250,250,250)",
      blanc2: "rgb(212,212,216)",
      blanc3: "rgb(161,161,170)",
      blanc4: "rgb(113,113,122)",
      darkBlue: "hsl(217, 28%, 15%)",
      darkBlue1: "hsl(218, 28%, 13%)",
      darkBlue2: "hsl(216, 53%, 9%)",
      darkBlue3: "hsl(219, 30%, 18%)",
    },
    extend: {
      fontFamily: {},
      letterSpacing: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
