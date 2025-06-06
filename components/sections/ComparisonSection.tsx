"use client";
import React from "react";
import {Compare} from "@/components/ui/compare";
import {motion} from "framer-motion";
import useWindowSize from "@/lib/hooks/useWindowSize"; // Optional: add if you want to detect screen width

export function ComparisonSection() {
    const width = useWindowSize();
    const isMobile = width < 640;

    return (
        <section
            id="comparison"
            className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 px-4 py-12 sm:py-16 md:py-20 lg:py-24"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl uppercase text-[var(--primary)] mb-6">
                    Vorher & Nachher Vergleich
                </h2>
                <p className="max-w-3xl text-base sm:text-lg text-[var(--muted-foreground)]">
                    Sehen Sie selbst den Unterschied: Unsere Reinigungs- und Wartungsservices verbessern nicht nur die
                    Optik Ihrer Photovoltaikanlage, sondern auch deren Effizienz. Der Vorher-Nachher-Vergleich zeigt,
                    wie stark die Ergebnisse wirklich sind.
                </p>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
                {[{
                    before: "/images/9c640042-b5f8-4357-a349-b57c957faa1e.png",
                    after: "/images/9c85e066-a33d-4a82-9800-e878b3e0c6a0.png"
                }, {
                    before: "/images/1b2a5753-8a3f-497a-a959-aa1c8d837534.png",
                    after: "/images/607473df-3add-49a7-83f5-f8693e54444a.png"
                }].map((imgPair, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: index * 0.2}}
                        viewport={{once: true}}
                        className="w-full max-w-[900px] rounded-xl shadow-lg overflow-hidden"
                    >
                        <Compare
                            firstImage={imgPair.before}
                            secondImage={imgPair.after}
                            firstImageClassName="object-cover object-left-top"
                            secondImageClassname="object-cover object-left-top"
                            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] rounded-xl"
                            slideMode={isMobile ? "drag" : "hover"}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}