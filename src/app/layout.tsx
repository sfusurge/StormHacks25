import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
    title: 'StormHacks 2025',
    description:
        "SFU Surge's 24-hour hackathon at SFU Burnaby Campus from October 4th to 5th, 2025.",
};

const catriel = localFont({
    src: [
        {
            path: '../../public/fonts/catriel-regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/catriel-bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/catriel-italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/catriel-bolditalic.ttf',
            weight: '700',
            style: 'italic',
        },
    ],
    variable: '--font-catriel',
    display: 'swap',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${catriel.variable} antialiased`}>
                {children}
                <Toaster
                    position='top-center'
                    toastOptions={{
                        style: {
                            backgroundColor: '#06060599',
                            borderColor: '#372F2F',
                            color: '#a7928e',
                        },
                    }}
                />
            </body>
        </html>
    );
}
