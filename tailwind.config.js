const colors = require("tailwindcss/colors");
module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    mode: "jit",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Open Sans", "sans-serif"],
            },
            colors: {
                ...colors,
                primary: "#6941C6",
                cardColor: "#121212",
                secondaryText: "#858383",
                borderColor: "#303030e6",
                secondary: "#8D8D8D",
                background: "#010101",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
