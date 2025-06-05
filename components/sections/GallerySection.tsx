// components/GallerySection.tsx
"use client";

import {Carousel} from "@/components/ui/carousel";

export function GallerySection() {
    const slideData = [
        {
            src: "https://static.wixstatic.com/media/1d7920_01b4e2a925634fbda6ab352525632515~mv2.jpg/v1/fill/w_442,h_589,q_90,enc_avif,quality_auto/1d7920_01b4e2a925634fbda6ab352525632515~mv2.jpg 1x, https://static.wixstatic.com/media/1d7920_01b4e2a925634fbda6ab352525632515~mv2.jpg/v1/fill/w_884,h_1178,q_90,enc_avif,quality_auto/1d7920_01b4e2a925634fbda6ab352525632515~mv2.jpg 2x, https://static.wixstatic.com/media/1d7920_01b4e2a925634fbda6ab352525632515~mv2.jpg/v1/fill/w_1326,h_1767,q_90,enc_avif,quality_auto/1d7920_01b4e2a925634fbda6ab352525632515~mv2.jpg 3x, https://static.wixstatic.com/media/1d7920_01b4e2a925634fbda6ab352525632515~mv2.jpg/v1/fill/w_1768,h_2356,q_90,enc_avif,quality_auto/1d7920_01b4e2a925634fbda6ab352525632515~mv2.jpg 4x, https://static.wixstatic.com/media/1d7920_01b4e2a925634fbda6ab352525632515~mv2.jpg/v1/fill/w_2210,h_2945,q_90,enc_avif,quality_auto/1d7920_01b4e2a925634fbda6ab352525632515~mv2.jpg 5x",
        },
        {
            src: "https://static.wixstatic.com/media/1d7920_b7448bea42f140cd91187013f516f731~mv2.jpg/v1/fill/w_442,h_589,q_90,enc_avif,quality_auto/1d7920_b7448bea42f140cd91187013f516f731~mv2.jpg",
        },
        {
            src: "https://static.wixstatic.com/media/1d7920_953cb7e498974b23a4056bd7c6ea1496~mv2.jpg/v1/fill/w_442,h_589,q_90,enc_avif,quality_auto/1d7920_953cb7e498974b23a4056bd7c6ea1496~mv2.jpg",
        },
        {
            src: "https://static.wixstatic.com/media/1d7920_953cb7e498974b23a4056bd7c6ea1496~mv2.jpg/v1/fill/w_442,h_589,q_90,enc_avif,quality_auto/1d7920_953cb7e498974b23a4056bd7c6ea1496~mv2.jpg",
        },
    ];
    return (
        <section id="gallery" className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={slideData}/>
        </section>
    );
}
