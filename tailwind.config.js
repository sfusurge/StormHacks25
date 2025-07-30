/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            mixBlendMode: {
                'color-dodge': 'color-dodge',
            },
            fontFamily: {
                catriel: 'var(--font-catriel)'
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.mix-blend-color-dodge': {
                    'mix-blend-mode': 'color-dodge',
                },
            })
        }
    ],
}