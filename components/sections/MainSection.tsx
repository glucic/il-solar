"use client";

import {motion} from "motion/react";
import Image from 'next/image';

export interface MainSectionDict {
    main: {
        headline: string;
        subtext: string;
        about: string;
        "team": string;
        contact: string;
        services: string;
    };
}

export function MainSection({dict}: { dict: MainSectionDict }) {
    return (
        <section id="main" className="relative w-full min-h-screen text-white">
            <Navbar/>

            {/* Background image layer (no pointer interference) */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <Image
                    src="/solar_panel_muted_gradient.png"
                    alt="Background"
                    fill
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"/>
            </div>

            {/* Content */}
            <div className="px-4 py-10 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 md:py-20">
                <h1 className="uppercase text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl max-w-5xl mx-auto leading-tight text-white drop-shadow-lg">
                    {dict.main.headline.split(" ").map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{opacity: 0, filter: "blur(4px)", y: 10}}
                            animate={{opacity: 1, filter: "blur(0px)", y: 0}}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1,
                                ease: "easeInOut",
                            }}
                            className="mr-2 inline-block"
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.3, delay: 0.8}}
                    className="mt-6 text-center text-base sm:text-lg font-normal max-w-2xl mx-auto text-neutral-200"
                >
                    {dict.main.subtext}
                </motion.p>

                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.3, delay: 0.8}}
                    className="mt-6 text-center text-base sm:text-lg font-normal max-w-2xl mx-auto text-neutral-200"
                >
                    {dict.main.about}
                </motion.p>

                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.3, delay: 0.8}}
                    className="mt-6 text-center text-base sm:text-lg font-normal max-w-2xl mx-auto text-neutral-200"
                >
                    {dict.main.team}
                </motion.p>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.3, delay: 1}}
                    className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
                >
                    <button
                        className="w-64 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-3 font-medium transition-all hover:opacity-90">
                        {dict.main.services}
                    </button>
                    <button
                        className="w-64 rounded-xl border border-white/40 bg-white/10 text-white px-6 py-3 font-medium transition-all hover:bg-white/20">
                        {dict.main.contact}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

const Navbar = () => {
    return (
        <nav
            className="w-full flex justify-between items-center bg-[var(--primary)] px-4 py-4 sm:px-6 md:px-8 text-[var(--primary-foreground)]">
            <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold md:text-2xl">IL-Solar</h1>
            </div>
        </nav>
    );
};