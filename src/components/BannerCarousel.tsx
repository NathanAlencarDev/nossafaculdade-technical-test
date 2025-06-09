"use client"; // necessário para usar estado no Next.js 13 app directory

import { useState } from "react";
import Image from "next/image";

const slides = [
    { id: 1, src: "/images/0.webp", alt: "Banner 1" },
    { id: 2, src: "/images/1.webp", alt: "Banner 2" },
    { id: 3, src: "/images/2.webp", alt: "Banner 3" },
    { id: 4, src: "/images/3.webp", alt: "Banner 4" },
    { id: 5, src: "/images/4.webp", alt: "Banner 5" },
    { id: 6, src: "/images/5.webp", alt: "Banner 6" },
];

export default function BannerCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

return (
        <section className="relative w-full sm:h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="relative h-[100%]">
            <Image
            src={slides[currentIndex].src}
            alt={slides[currentIndex].alt}
            fill
            className="object-cover"
            priority
            />
        </div>

        {/* Botões de navegação */}
        <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition"
        >
            &#8592;
        </button>

        <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition"
        >
            &#8594;
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((slide, index) => (
            <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
                } hover:bg-white`}
            />
            ))}
        </div>
        </section>
    );
}
