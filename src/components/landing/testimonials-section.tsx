"use client";

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Autoplay from "embla-carousel-autoplay";
import { Separator } from '../ui/separator';

export default function TestimonialsSection() {
  const testimonialsCarouselImage = PlaceHolderImages.find((img) => img.id === 'testimonials-carousel');

  return (
    <section className="py-20 sm:py-28 bg-black text-white">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-wider text-center">
          O que nossos clientes dizem
        </h2>
        <Separator className="my-6 bg-primary/20 w-1/4 h-[2px] shadow-red-glow" />
        
        {testimonialsCarouselImage && (
            <div className="w-full mt-8">
                 <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                            stopOnInteraction: true,
                        }),
                    ]}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent>
                        <CarouselItem>
                            <Image
                                src={testimonialsCarouselImage.imageUrl}
                                alt={testimonialsCarouselImage.description}
                                width={1200}
                                height={800}
                                className="w-full h-auto object-contain rounded-lg"
                                data-ai-hint={testimonialsCarouselImage.imageHint}
                            />
                        </CarouselItem>
                         <CarouselItem>
                            <Image
                                src={testimonialsCarouselImage.imageUrl}
                                alt={testimonialsCarouselImage.description}
                                width={1200}
                                height={800}
                                className="w-full h-auto object-contain rounded-lg"
                                data-ai-hint={testimonialsCarouselImage.imageHint}
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="text-white bg-black/50 border-primary/50 hover:bg-primary left-2" />
                    <CarouselNext className="text-white bg-black/50 border-primary/50 hover:bg-primary right-2" />
                </Carousel>
            </div>
        )}
      </div>
    </section>
  );
}
