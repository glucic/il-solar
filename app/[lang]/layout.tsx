// app/[lang]/layout.tsx
import type {Metadata} from "next";
import {Geist_Mono} from "next/font/google";
import "@/app/globals.css";
import {ReactNode} from "react";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
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
        <html lang={lang} className={`${geistMono.variable} scroll-smooth`} suppressHydrationWarning>
        <body className="font-sans antialiased bg-[var(--background)] text-[var(--foreground)]">{children}</body>
        </html>
    );
}