module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./index.html",
    "./src/*.html"
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          base:"#F4F1ED",
          skyBlur:"#C5DCDD",
          orange:"#DF8051",
          brown:"#413937"
        }
      }
    },
  },
  plugins: [],
  mode:"jit",
}
