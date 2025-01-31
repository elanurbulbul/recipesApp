/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      handlee: ["Handlee", "cursive"],
    },
    extend: {
      colors: {
        orange: "#FF9800",         
        jet: "#282A36",           
        gray: "#9E9E9E",         
        "battleship-gray": "#848484", 
        green: "#4CAF50",         
        danger: "#E53935",     
        blue: "#3F51B5",          
        purple: "#9C27B0",        
       teal: "#009688",          

      },
    },
  },
  plugins: [],
};