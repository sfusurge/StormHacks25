/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                main: 'var(--color-main)',
                primary: 'var(--color-primary)',
                accent: 'var(--color-accent)',
                background: 'var(--color-background)',
                border: 'var(--color-border)',
                'hover-button': 'var(--color-hover-button)',
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
