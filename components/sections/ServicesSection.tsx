"use client";
import React from "react";
import Image from 'next/image';

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
            className="min-h-screen relative bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 pt-16 pb-20 flex flex-col items-center"
        >
            {/* Headline */}
            <div className="text-center px-4 sm:px-6 mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-[var(--primary)] mb-6 leading-tight">
                    {dict.services.headline}
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 w-full max-w-7xl px-4 sm:px-6">
                {dict.services.services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center gap-4 p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-md hover:shadow-xl transition-all duration-150 ease-in-out backdrop-blur-xl bg-white/10 dark:bg-white/5"
                    >
                        {/* Icon */}
                        <div className="w-32 h-32 sm:w-36 sm:h-36 relative rounded-full overflow-hidden shadow-lg">
                            <Image
                                src={service.image}
                                alt={`${service.title} icon`}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="roboto text-xl sm:text-2xl font-semibold text-[var(--primary)] drop-shadow-sm">
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-[var(--foreground)] opacity-90 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}