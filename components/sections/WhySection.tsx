"use client";
import {useReducedMotion} from "framer-motion";
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
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="why"
            className="relative bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 px-4 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-16"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                {/* Headline */}
                <div className="mb-8 md:mb-12 max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-[var(--primary)] mb-4 sm:mb-6 leading-tight">
                        {dict.why.headline}
                    </h2>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl text-left">
                    {dict.why.reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="flex gap-4 p-5 sm:p-6 rounded-3xl bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] shadow-md transition-transform duration-200 hover:scale-[1.015] hover:shadow-lg"
                        >
                            {/* Number */}
                            <div className="min-w-[3rem] text-2xl font-bold text-[var(--primary)] leading-none">
                                {reason.title}.
                            </div>

                            {/* Description */}
                            <div className="flex-1">
                                <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}