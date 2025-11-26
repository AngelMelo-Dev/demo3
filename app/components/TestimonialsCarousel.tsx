"use client";

import { testimonios } from "@/data/testimonios";
import type { Testimonio } from "@/types/testimonio";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const testimoniosData = testimonios as Testimonio[];

export default function TestimonialsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextIndex = (currentIndex + 1) % testimoniosData.length;
        setCurrentIndex(nextIndex);
        
        // Obtener el elemento del testimonio siguiente
        const nextCard = carouselRef.current.children[nextIndex] as HTMLElement;
        if (nextCard) {
          // Calcular la posición para centrar el card
          const containerWidth = carouselRef.current.clientWidth;
          const cardWidth = nextCard.offsetWidth;
          const scrollPosition = nextCard.offsetLeft - (containerWidth / 2) + (cardWidth / 2);
          
          carouselRef.current.scrollTo({
            left: Math.max(0, scrollPosition),
            behavior: "smooth",
          });
        }
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimoniosData.map((testimonio, index) => (
          <article
            key={index}
            className="min-w-[300px] flex-shrink-0 snap-center rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:min-w-[350px]"
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={testimonio.foto}
                  alt={testimonio.nombre}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">
                  {testimonio.nombre}
                </p>
                <p className="text-xs text-neutral-500">
                  {testimonio.servicio}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-neutral-700">
              &ldquo;{testimonio.comentario}&rdquo;
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

