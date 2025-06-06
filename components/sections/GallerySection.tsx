// components/GallerySection.tsx
"use client";

import {Carousel} from "@/components/ui/carousel";
import {motion} from "framer-motion";

export function GallerySection() {
    const slideData = [
        {
            src: "/images/gallery/4e60b67d-976e-4657-82a9-123cd53bac5b.png",
        },
        {
            src: "/images/gallery/b64aaebb-ed49-49ad-bd7a-3f658110c2de.png"
        },
        {
            src: "/images/gallery/10d00582-a22c-4a22-9f8b-2c736627acf8.png"
        },
        {
            src: "/images/gallery/2f155eb3-5155-466d-ac3d-9e9d99398ae9.png"
        },
        {
            src: "/images/gallery/41400cab-8f06-4e03-b009-6970b23242e3.png"
        },
        {
            src: "/images/gallery/f258027f-68b5-43ea-b823-468c8dbfe391.png"
        },
        {
            src: "/images/gallery/1f066ab9-1c97-4b6d-9c67-08911a364b55.png"
        },
        {
            src: "/images/gallery/affb0120-b222-4887-b5ec-de7414789f74.png"
        }
    ];
    return (
        <section
            id="gallery"
            className="relative w-full pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 bg-[var(--background)] text-[var(--foreground)]"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="px-4 sm:px-6 md:px-8 text-center mb-12"
            >
                <h2 className="text-4xl sm:text-5xl md:text-6xl uppercase text-[var(--primary)]">
                    Galerie
                </h2>
            </motion.div>

            {/* Carousel outside content wrapper */}
            <Carousel slides={slideData} />
        </section>
    );
}
