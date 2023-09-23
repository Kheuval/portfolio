import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#427898",
        secondary: "#b76729",
      },
    },
  },
  plugins: [],
};
