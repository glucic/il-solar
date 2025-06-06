// app/[lang]/page.tsx
import {getDictionary} from './dictionaries';
import {ThemeProvider} from 'next-themes';
import {
    ComparisonSection,
    ContactSection, FooterSection,
    GallerySection,
    MainSection, ProjectSection,
    ServicesSection,
    WhySection
} from '@/components/sections';
import Image from "next/image";
import React from "react";
import {Navbar} from "@/components/sections/Navbar";

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
                <Navbar dict={dict}/>
                <MainSection dict={dict}/>
                <WhySection dict={dict}/>
                <section className="relative min-h-screen w-full h-[60vh] mt-24 overflow-hidden">
                    <Image
                        src="/images/8aea016e-7957-4c15-a647-4f770bd18b0f.png"
                        alt="Section divider"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"/>
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center drop-shadow-lg">
                            Qualität, die man sehen kann
                        </h2>
                    </div>
                </section>
                <ComparisonSection/>
                <ServicesSection dict={dict}/>
                <ProjectSection dict={dict} />
                <section className="relative min-h-screen w-full h-[100vh] overflow-hidden">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/videos/e4aa3dae-e43e-436c-9656-20cca811b131.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>

                    {/* Overlay gradient and optional text */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"/>
                </section>
                <GallerySection/>
                <ContactSection dict={dict}/>
                <FooterSection dict={dict}/>
            </ThemeProvider>
        </div>
    );
}