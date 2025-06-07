"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export interface MainSectionDict {
    main: {
        headline: string;
        subtext: string;
        about: string;
        team: string;
        contact: string;
        services: string;
    };
}

export function MainSection({dict}: { dict: MainSectionDict }) {
    return (
        <section
            id="main"
            className="relative w-full min-h-[100dvh] overflow-hidden text-white flex items-center justify-center"
        >
            {/* Background image */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <Image
                    src="/images/8d6a9818-82e2-4b76-b767-283df978fdbf.png"
                    alt="Background"
                    fill
                    priority
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70"/>
            </div>

            {/* Content */}
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 max-w-6xl py-16 sm:py-24 text-center">
                {/* Headline */}
                <h1 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl max-w-5xl mx-auto leading-tight drop-shadow-lg">
                    <span className="text-white">{dict.main.headline}</span>
                    <span className="text-[var(--accent)] ml-2">IL-Solar</span>
                </h1>

                {/* Paragraphs */}
                {[dict.main.subtext, dict.main.about, dict.main.team].map((text, i) => (
                    <p
                        key={i}
                        className="mt-6 text-base sm:text-lg font-normal max-w-2xl mx-auto text-neutral-200"
                    >
                        {text}
                    </p>
                ))}

                {/* Animated Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                    <Link href="#services">
                        <motion.button
                            whileHover={{scale: 1.04}}
                            whileTap={{scale: 0.96}}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 25,
                                mass: 0.8,
                            }}
                            className="w-full sm:w-64 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-3 font-medium shadow-lg transition-all duration-200 hover:opacity-90"
                        >
                            {dict.main.services}
                        </motion.button>
                    </Link>

                    <Link href="#contact">
                        <motion.button
                            whileHover={{scale: 1.04}}
                            whileTap={{scale: 0.96}}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 25,
                                mass: 0.8,
                            }}
                            className="w-full sm:w-64 rounded-xl border border-white/40 bg-white/10 text-white px-6 py-3 font-medium shadow-md transition-all duration-200 hover:bg-white/20"
                        >
                            {dict.main.contact}
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
}