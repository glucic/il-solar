"use client";
import React from "react";
import {Compare} from "@/components/ui/compare";

export function ComparisonSection() {
    return (
        <section
            id="comparison"
            className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 px-4 py-12 sm:py-16 md:py-20 lg:py-24"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-[var(--primary)] mb-6">
                    Vorher & Nachher Vergleich
                </h2>
                <p className="max-w-3xl text-base sm:text-lg text-[var(--muted-foreground)]">
                    Sehen Sie selbst den Unterschied: Unsere Reinigungs- und Wartungsservices verbessern nicht nur die
                    Optik Ihrer Photovoltaikanlage, sondern auch deren Effizienz. Der Vorher-Nachher-Vergleich zeigt,
                    wie stark die Ergebnisse wirklich sind.
                </p>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
                <Compare
                    firstImage="/images/9c640042-b5f8-4357-a349-b57c957faa1e.png"
                    secondImage="/images/9c85e066-a33d-4a82-9800-e878b3e0c6a0.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="w-full max-w-[900px] h-[500px] md:h-[700px] rounded-xl shadow-lg"
                    slideMode="hover"
                />
                <Compare
                    firstImage="/images/1b2a5753-8a3f-497a-a959-aa1c8d837534.png"
                    secondImage="/images/607473df-3add-49a7-83f5-f8693e54444a.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="w-full max-w-[900px] h-[500px] md:h-[700px] rounded-xl shadow-lg"
                    slideMode="hover"
                />
            </div>
        </section>
    );
}