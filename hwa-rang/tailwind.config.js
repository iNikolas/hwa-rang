/** @type {import('tailwindcss').Config} */

export default {
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
        extend: {
            fontSize: {
                12: "12px",
                14: "14px",
                18: "18px",
                24: "24px",
                32: "32px",
                42: "42px",
                58: "58px",
                80: "80px",
            },
            fontFamily: {
                fontMonument: ['"PP Monument Extended"'],
                Satoshi: ['"Satoshi"'],
            },
            screens: {
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
