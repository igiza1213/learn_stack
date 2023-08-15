/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ["./*.{js,jsx,ts,tsx}"],
    content: ["./*.{html,js}"],
    theme: {
        extend: {},
        screens: {
            sm: "465px",
            md: "768px",
            lg: "1024px",
            xl: "1640px",
        },
    },
    plugins: [],
};
