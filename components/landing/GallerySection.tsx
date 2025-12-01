import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const galleryJerseys = [
  {
    id: 1,
    src: "/jerseys/black_jersey.png",
    name: "Midnight Edition",
    style: "Modern",
  },
  {
    id: 2,
    src: "/jerseys/noel_diwali.png",
    name: "Festive Flair",
    style: "Festive",
  },
  {
    id: 3,
    src: "/jerseys/Classic_red_and_whit.png",
    name: "Classic Red",
    style: "Classic",
  },
  {
    id: 4,
    src: "/jerseys/Modern_blue_gradient.png",
    name: "Ocean Wave",
    style: "Modern",
  },
  {
    id: 5,
    src: "/jerseys/velocity.png",
    name: "Velocity",
    style: "Futuristic",
  },
  {
    id: 6,
    src: "/jerseys/diwali.png",
    name: "Diwali Delight",
    style: "Festive",
  },
  {
    id: 7,
    src: "/jerseys/Retro_90s_style_jers.png",
    name: "Retro Vibes",
    style: "Retro",
  },
  {
    id: 8,
    src: "/jerseys/hunyuan.png",
    name: "Nature's Touch",
    style: "Modern",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative z-10 py-24 lg:py-32 bg-black">
      <div className="mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Community Creations
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Get inspired by designs created by our community of sports fans and
            designers.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryJerseys.map((jersey) => (
            <div
              key={jersey.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all hover:border-white/20"
            >
              <Image
                src={jersey.src}
                alt={jersey.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <p className="text-white font-semibold">{jersey.name}</p>
                <p className="text-white/60 text-sm">{jersey.style}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
