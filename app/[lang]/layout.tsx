// app/[lang]/layout.tsx
import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "@/app/globals.css";
import {ReactNode} from "react";
import { CookiePreferencesProvider } from "@/components/elements/CookiePreferenceContextProvider";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--font-roboto',
});

export const metadata: Metadata = {
    title: "IL-Solar",
    description: "IL-Solar ist Ihr zuverlässiger Partner für die Reinigung und Wartung von Photovoltaik Anlagen",
};

export async function generateStaticParams() {
    return [{lang: 'de'}, {lang: 'hr'}];
}

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const {lang} = await params;

    return (
        <html lang={lang} className={`${roboto.variable} scroll-smooth`} suppressHydrationWarning>
            <body className="font-sans antialiased bg-[var(--background)] text-[var(--foreground)]">
            <CookiePreferencesProvider>
                {children}
            </CookiePreferencesProvider>
            </body>
        </html>
    );
}