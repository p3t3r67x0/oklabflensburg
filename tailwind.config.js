/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/**/*.js"],

  theme: {
    container: {
      center: true,
      padding: "16px",
     
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '984px',
      xl: '1240px',
      '2xl': '1240',
    },
    extend: {
      colors: {
        black: "#212b36",
        gray: "#3d3d3d",
        "gray-light": "#D4E7D4",
        dark: "#090E34",
        "dark-700": "#090e34b3",
        primary: "#00367d",
        secondary: "#0045f6",
        "body-color": "#637381",
        warning: "#FBBF24",
      },
      font:{
        bold: "letter-spacing: 1px",
        thin: "font-stretch: 110%"
      },
      spacing: {
        '1/1': '100%',
      },
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 60px 120px -20px #EBEFFD",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
