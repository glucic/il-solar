import React from "react";
import {Compare} from "@/components/ui/compare";

export function ComparisonSection() {
    return (
        <section
            id="comparison"
            className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 px-6 py-12 sm:py-16 md:py-20 lg:py-24"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
                <Compare
                    firstImage="/img_1.png"
                    secondImage="/img_2.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="w-full max-w-[700px] h-[400px] md:h-[600px] rounded-xl shadow-lg"
                    slideMode="hover"
                />
                <Compare
                    firstImage="/img_3.png"
                    secondImage="/img_4.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="w-full max-w-[700px] h-[400px] md:h-[600px] rounded-xl shadow-lg"
                    slideMode="hover"
                />
            </div>
        </section>
    );
}