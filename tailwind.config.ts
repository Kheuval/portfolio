import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",
  content: [
    "./index.html",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#333",
        secondary: "#F7AB04",
      },
    },
  },
  plugins: [],
};
