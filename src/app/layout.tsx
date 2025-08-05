import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/ThemeProvider';
import { TimerController } from '@/components/Timer/TimerController';

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
        <html lang="en" data-mode="angel">
            <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <body className={`${catriel.variable} antialiased`}>
                <ThemeProvider>
                    {children}
                    <Toaster
                        position="top-center"
                        toastOptions={{
                            style: {
                                backgroundColor: '#06060599',
                            },
                            classNames: {
                                toast: '!text-primary !border-border',
                            },
                        }}
                    />
                    <TimerController/>
                </ThemeProvider>
            </body>
        </html>
    );
}
