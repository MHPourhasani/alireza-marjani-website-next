/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        fontFamily: {
            iranyekan: ['iranyekan'],
        },
        extend: {
            colors: {
                bgColor: '#ECF0F3',
                darkBgColor: '#21252A',
                primary: '#FD014F',
                secondary: '#838485',
                gradientOne: '#EFF3F6',
                gradientTwo: '#ffffff',
                darkGradientOne: '#161A20',
                darkGradientTwo: '#23272C',
            },
        },
    },
    plugins: [],
};
