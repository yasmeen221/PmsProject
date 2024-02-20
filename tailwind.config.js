import colors from "./src/themes/colors";
import fonts from "./src/themes/fonts";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
      fontFamily: fonts.fontFamily,
      fontSize: fonts.fontSize,
      fontWeight: fonts.fontWeight,
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
