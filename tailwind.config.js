/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                header:"var(--color-header)",
                textalt: "var(--color-special-text)",
                primary: "var(--color-primary)",
                border: "var(--color-border)",
                borderalt: "var(--color-border2)",
                background: "var(--color-background)",
                backgroundalt: "var(--color-background2)"
            },
            mixBlendMode: {
                'color-dodge': 'color-dodge',
            },
            fontFamily: {
                catriel: 'var(--font-catriel)',
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
            });
        },
    ],
};
