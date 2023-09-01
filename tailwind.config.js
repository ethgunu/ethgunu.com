/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ptSans: ["PT Sans", ...defaultTheme.fontFamily.mono],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "gradient-x": "gradient-x 5s ease infinite",
        "gradient-y": "gradient-y 5s ease infinite",
        "gradient-xy": "gradient-xy 5s ease infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      colors: {
        gunuNavy: "#1B4DFF",
        // gunuPink: "#FFE1DD",
        gunuPink: "#DBB7B7",
        gunuOrange: "#FF4E26",
        gunuLightBlue: "#71D9FF",
        gunuTeal: "#9FFFFF",
        gunuDark: "#36364c",
      },
    },
  },
  plugins: [],
}
