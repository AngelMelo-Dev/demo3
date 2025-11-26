"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    alt: "Taller de mantenimiento automotriz",
  },
  {
    src: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=1200&q=80",
    alt: "Equipo técnico trabajando en vehículo",
  },
  {
    src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80",
    alt: "Herramientas de diagnóstico automotriz",
  },
  {
    src: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
    alt: "Servicio de detailing profesional",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    alt: "Vehículo en proceso de reparación",
  },
];

export default function ImageCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextIndex = (currentIndex + 1) % carouselImages.length;
        setCurrentIndex(nextIndex);
        carouselRef.current.scrollTo({
          left: carouselRef.current.clientWidth * nextIndex,
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleDotClick = (index: number) => {
    if (carouselRef.current) {
      setCurrentIndex(index);
      carouselRef.current.scrollTo({
        left: carouselRef.current.clientWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl">
      <div
        ref={carouselRef}
        className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className="relative h-64 min-w-full snap-start sm:h-80"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

