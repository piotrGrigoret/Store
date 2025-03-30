export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@mui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primaryMain)",
        primaryDark: "var(--primaryDark)",
        primaryLight: "var(--primaryLight)",
        secondary: "var(--secondaryMain)",
        secondaryDark: "var(--secondaryDark)",
        bg: "var(--backgroundDefault)",
        bgLight: "var(--backgroundPaper)",
      },
      fontFamily: {
        montserrat: "var(--monsterrat)", 
      },
    },
  },
  plugins: [],
};
