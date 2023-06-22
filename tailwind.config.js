/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "40px",
        md: "80px",
        lg: "160px",
        // lg: '0',
      },
    },
    fontFamily: {
      secondary: "Montserrat",
    },
    extend: {
      colors: {
        primary: "#f1f1f1",
        secondary: "#1e1e1e",
        tertiary: "#666",
        accent: "#26d586",
      },
      backgroundImage: {
        hero: "url('./assets/herobg.jpg')",
        about: "url('./assets/aboutbg.jpg')",
        contact: "url('./assets/contactbg.jpg')",
      },
    },
  },
  plugins: [],
};
