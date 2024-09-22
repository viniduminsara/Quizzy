/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#08FE90',
                secondary: '#828282',
                blue: '#49CDFF',
            },
            backgroundImage: {
                'gradient': 'linear-gradient(to right, #1884FF, #49CDFF)',
            },
        },
    },
    plugins: [],
}

