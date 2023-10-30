/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradientShift: {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
      animation: {
        "gradient-shift": "gradientShift 2s infinite",
      },
      boxShadow: {
        custom: `0px 1px 3px 0px rgba(0, 0, 0, 0.1),
        0px 5px 5px 0px rgba(0, 0, 0, 0.09),
        0px 11px 6px 0px rgba(0, 0, 0, 0.05),
        0px 19px 8px 0px rgba(0, 0, 0, 0.01),
        0px 30px 8px 0px rgba(0, 0, 0, 0)
        `,
      },
      backgroundImage: {
        gradient:
          "linear-gradient(45deg,rgba(6, 19, 44, 1),rgba(107, 44, 104, 1),rgba(222, 75, 87, 1))",
        taekwondo: "url(/images/taekwondo.png)",
      },
      colors: {
        secondary: "#0D0D0D99",
        purple: "#6750A4",
        "dark-blue": "#29507F",
        border: "#0e0d0d",
        "custom-black": "#0D0D0D",
        "active-border": "rgba(6,19,44,1)",
        disabled: "#ADADAD",
        "tint-white": "#F7F1F1",
        background: "#F9FBFC",
      },
      fontSize: {
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        32: "32px",
        40: "40px",
        42: "42px",
        48: "48px",
        58: "58px",
        80: "80px",
      },
      fontFamily: {
        fontMonument: ['"PP Monument Extended"'],
        Satoshi: ["Satoshi"],
        MontserratBlack: ['"MontserratBlack"'],
        montserrat: ["Montserrat, sans-serif"],
      },
      screens: {
        tablet: { min: "639px", max: "1023px" },

        "2xl": { max: "1535px" },

        "1xl": { max: "1371px" },

        xl: { max: "1250px" },

        lg: { max: "1023px" },

        md: { max: "767px" },

        sm: { max: "639px" },

        xs: { max: "450px" },
      },
    },
  },
  plugins: [],
};
