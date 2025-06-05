"use client";
import { motion } from "framer-motion";
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

export function WhySection({ dict }: { dict: WhySectionDict }) {
    return (
        <section
            id="why"
            className="relative bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-0"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                {/* Section Headline */}
                <div className="mb-8 md:mb-12 max-w-3xl">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl uppercase text-[var(--primary)] mb-6">
                        {dict.why.headline}
                    </h2>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl text-left">
                    {dict.why.reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex gap-4 p-6 rounded-3xl bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] shadow-md transition-all duration-150 ease-in-out hover:scale-[1.015] hover:shadow-xl"
                        >
                            {/* Number column */}
                            <div className="min-w-[3rem] text-2xl font-bold text-[var(--primary)] leading-none">
                                {reason.title}.
                            </div>

                            {/* Text column */}
                            <div className="flex-1">
                                <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}