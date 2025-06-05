"use client";
import {motion} from "framer-motion";
import React from "react";

export interface WhySectionDict {
    why: {
        headline: string;
        reasons: Array<{
            title: string;
            description: string;
        }>;
    };
}

export function WhySection({dict}: { dict: WhySectionDict }) {
    return (
        <section
            id="why"
            className="relative bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-0"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <div className="mb-8 md:mb-12 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl leading-tight tracking-tight text-[var(--primary)] uppercase">
                        {dict.why.headline}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
                    {dict.why.reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            whileHover={{scale: 1.03, y: -6}}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{type: "spring", stiffness: 200, damping: 20}}
                            viewport={{once: true}}
                            className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] shadow-md hover:shadow-xl transition"
                        >
                            <h3 className="text-xl font-semibold text-blue-500">
                                {reason.title}
                            </h3>
                            <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}