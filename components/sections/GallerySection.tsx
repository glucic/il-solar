// components/GallerySection.tsx
"use client";

import {Carousel} from "@/components/ui/carousel";

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
        <section id="gallery" className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={slideData}/>
        </section>
    );
}
