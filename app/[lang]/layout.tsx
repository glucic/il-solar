// app/[lang]/layout.tsx
import "@/app/globals.css";
import {CookiePreferencesProvider} from "@/components/elements/CookiePreferenceContextProvider";
import {ReactNode} from "react";
import {Roboto} from "next/font/google";
import {Metadata} from "next";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    variable: "--font-roboto",
    display: "swap",
});

export const metadata: Metadata = {
    title: "IL-Solar – Photovoltaik Reinigung & Wartung",
    description:
        "Professionelle Reinigung & Wartung von Photovoltaikanlagen in Österreich. Steigern Sie Ihre Effizienz mit IL-Solar.",
    icons: {
        icon: "/favicon.ico",
    },
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
        <html lang={lang} suppressHydrationWarning>
        <body className={`${roboto.variable} bg-white text-black`}>
        <CookiePreferencesProvider>
            {children}
        </CookiePreferencesProvider>
        </body>
        </html>
    );
}