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
                    firstImage="/images/img_1.png"
                    secondImage="/images/img_2.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="w-full max-w-[900px] h-[500px] md:h-[700px] rounded-xl shadow-lg"
                    slideMode="hover"
                />
                <Compare
                    firstImage="/images/img_3.png"
                    secondImage="/images/img_4.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="w-full max-w-[900px] h-[500px] md:h-[700px] rounded-xl shadow-lg"
                    slideMode="hover"
                />
            </div>
        </section>
    );
}