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
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Abril Fatface", ...defaultTheme.fontFamily.serif],
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
        gunuNavy: {
          DEFAULT: "#1B4DFF",
          50: "#e8edff",
          100: "#d1dbff",
          200: "#a4b8ff",
          300: "#7694ff",
          400: "#4971ff",
          500: "#1B4DFF",
          600: "#163ecc",
          700: "#102e99",
          800: "#0b1f66",
          900: "#050f33",
        },
        gunuPinkLighter: "#FFE1DD",
        gunuPink: "#DBB7B7",
        gunuOrange: "#FF4E26",
        gunuLightBlue: "#71D9FF",
        gunuTeal: "#9FFFFF",
        gunuDark: "#36364c",
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(to bottom, #FFE1DD, #D2D2FF)",
        "gradient-2": "linear-gradient(to bottom, #D2D2FF, #D2FFE6)",
        "gradient-3": "linear-gradient(to bottom, #D2FFE6, #FFE1DD)",
      },
    },
  },
  plugins: [],
}
