"use client";

import Script from "next/script";


export function GA() {
    return <Script async src='https://www.googletagmanager.com/gtag/js?id=G-59SF0M6208'
        onLoad={() => {
            // @ts-expect-error expected
            window.dataLayer = window.dataLayer || [];
            // @ts-expect-error expected
            // eslint-disable-next-line prefer-rest-params
            function gtag() { dataLayer.push(arguments); }
            // @ts-expect-error expected
            gtag('js', new Date());
            // @ts-expect-error expected

            gtag('config', 'G-59SF0M6208');
        }}></Script>

}