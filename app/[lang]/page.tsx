// app/[lang]/page.tsx
import {getDictionary} from './dictionaries';
import {ThemeProvider} from 'next-themes';
import {
    ComparisonSection,
    ContactSection,
    GallerySection,
    MainSection,
    ServicesSection,
    WhySection
} from '@/components/sections';
import Image from "next/image";
import React from "react";

export async function generateStaticParams() {
    return [{lang: 'de'}, {lang: 'hr'}];
}

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ lang: 'de' | 'hr' }>;
}) {
    const {lang} = await params;
    const dict = await getDictionary(lang);

    return (
        <div>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
                <MainSection dict={dict}/>
                <WhySection dict={dict}/>
                <ComparisonSection/>
                <ServicesSection dict={dict}/>
                <GallerySection/>
                <ContactSection dict={dict} />
            </ThemeProvider>
        </div>
    );
}