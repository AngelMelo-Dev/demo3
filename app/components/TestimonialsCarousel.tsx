"use client";

import { testimonios } from "@/data/testimonios";
import type { Testimonio } from "@/types/testimonio";
import Image from "next/image";
import { useEffect, useRef } from "react";

const testimoniosData = testimonios as Testimonio[];

export default function TestimonialsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const scrollWidth = carouselRef.current.scrollWidth;
        const clientWidth = carouselRef.current.clientWidth;
        const nextScroll = scrollLeft + clientWidth;

        if (nextScroll >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollTo({
            left: nextScroll,
            behavior: "smooth",
          });
        }
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimoniosData.map((testimonio, index) => (
          <article
            key={index}
            className="min-w-[300px] flex-shrink-0 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:min-w-[350px]"
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

