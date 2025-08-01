/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#A7928E',
                accent: '#574E49'
            },
            mixBlendMode: {
                'color-dodge': 'color-dodge',
            },
            fontFamily: {
                catriel: 'var(--font-catriel)'
            },
        },
        screens: {
            xs: '400px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
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