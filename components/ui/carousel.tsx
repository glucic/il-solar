"use client";
import {IconArrowNarrowRight} from "@tabler/icons-react";
import {useState, useId} from "react";
import Image from 'next/image';

interface SlideData {
    src: string;
}

interface SlideProps {
    slide: SlideData;
    index: number;
    current: number;
    handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
    const { src } = slide;

    return (
        <li
            className="relative w-screen h-screen flex items-center justify-center"
            onClick={() => handleSlideClick(index)}
        >
            {/* Preview button */}
            <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Prevents slide change on click
                className="absolute top-6 right-6 z-30 text-white text-sm md:text-base px-5 py-3 rounded-xl font-semibold shadow-lg hover:bg-opacity-90 transition-all duration-200"
            >
                🔍 Vorschau
            </a>

            {/* Image container */}
            <div className="absolute inset-0">
                <Image
                    src={src}
                    alt={`slide-${index}`}
                    fill
                    className={`object-cover transition-opacity duration-500 ${
                        current === index ? "opacity-100" : "opacity-50"
                    }`}
                    loading="eager"
                    decoding="sync"
                />
            </div>
        </li>
    );
};
interface CarouselControlProps {
    type: string;
    title: string;
    handleClick: () => void;
}

const CarouselControl = ({
                             type,
                             title,
                             handleClick,
                         }: CarouselControlProps) => {
    const isLeft = type === "previous";

    return (
        <button
            className={`absolute top-1/2 transform -translate-y-1/2 ${
                isLeft ? "left-4" : "right-4"
            } z-20 w-16 h-16 flex items-center justify-center bg-black/50 hover:bg-black/70 transition-colors duration-200 rounded-full`}
            title={title}
            onClick={handleClick}
        >
            <IconArrowNarrowRight
                size={36}
                className={`text-white ${isLeft ? "rotate-180" : ""}`}
            />
        </button>
    );
};

interface CarouselProps {
    slides: SlideData[];
}

export function Carousel({slides}: CarouselProps) {
    const [current, setCurrent] = useState(0);
    const id = useId();

    const handlePreviousClick = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleNextClick = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const handleSlideClick = (index: number) => {
        setCurrent(index);
    };

    return (
        <div className="relative w-screen h-screen overflow-hidden" aria-labelledby={`carousel-heading-${id}`}>
            <ul
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${current * 100}vw)`,
                    width: `${slides.length * 100}vw`,
                }}
            >
                {slides.map((slide, index) => (
                    <Slide
                        key={index}
                        slide={slide}
                        index={index}
                        current={current}
                        handleSlideClick={handleSlideClick}
                    />
                ))}
            </ul>

            <CarouselControl
                type="previous"
                title="Previous"
                handleClick={handlePreviousClick}
            />
            <CarouselControl
                type="next"
                title="Next"
                handleClick={handleNextClick}
            />
        </div>
    );
}