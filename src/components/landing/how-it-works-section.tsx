"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const carouselImages = [
  'how-it-works-1',
  'how-it-works-2',
  'how-it-works-3',
  'how-it-works-4',
  'how-it-works-5',
];

export default function HowItWorksSection() {
  const images = carouselImages.map(id => PlaceHolderImages.find((img) => img.id === id)).filter(Boolean);

  return (
    <section className="py-20 sm:py-28 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-in fade-in slide-in-from-left-12 duration-1000">
            <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-wider">
              Crie e publique em minutos
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-lg mx-auto md:mx-0">
              Acesse o template, abra no Canva, troque textos e imagens e publique. Em poucos minutos, seu link da bio estará pronto.
            </p>
          </div>
          <div className="flex justify-center animate-in fade-in slide-in-from-right-12 duration-1000">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: true,
                }),
              ]}
              className="w-full max-w-sm"
            >
              <CarouselContent>
                {images.map((image, index) => image && (
                  <CarouselItem key={index}>
                    <div className="p-1">
                       <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={400}
                          height={400}
                          className="w-full h-auto object-contain"
                          data-ai-hint={image.imageHint}
                        />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white bg-black/50 border-primary/50 hover:bg-primary left-2" />
              <CarouselNext className="text-white bg-black/50 border-primary/50 hover:bg-primary right-2" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
