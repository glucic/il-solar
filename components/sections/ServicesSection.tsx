"use client";
import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

export interface ServicesSectionDict {
    services: {
        headline: string;
        services: Array<{
            title: string;
            description: string;
            image: string;
        }>;
    };
}

export function ServicesSection({ dict }: { dict: ServicesSectionDict }) {
    return (
        <section
            id="services"
            className="min-h-screen relative bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 pt-16 pb-20 flex flex-col items-center justify-start"
        >
            {/* Headline */}
            <div className="text-center px-4 mb-12">
                <h2 className="text-4xl sm:text-5xl md:text-6xl uppercase text-[var(--primary)] mb-6">
                    {dict.services.headline}
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl px-4">
                {dict.services.services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center gap-4 p-8 rounded-3xl border border-[var(--border)] shadow-md hover:shadow-xl transition-all duration-150 ease-in-out backdrop-blur-xl bg-white/10 dark:bg-white/5"
                    >
                        {/* Icon */}
                        <div className="w-36 h-36 relative rounded-full overflow-hidden shadow-lg">
                            <Image
                                src={service.image}
                                alt={`${service.title} icon`}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Title (animated within card) */}
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                            className="roboto text-2xl font-semibold text-[var(--primary)] drop-shadow-sm"
                        >
                            {service.title}
                        </motion.h3>

                        {/* Description */}
                        <p className="text-base text-[var(--foreground)] opacity-90 leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}