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

const testimonialImageIds = [
    'testimonials-carousel-1',
    'testimonials-carousel-2',
    'testimonials-carousel-3',
    'testimonials-carousel-4',
];

export default function TestimonialsSection() {
  const testimonialImages = testimonialImageIds.map(id => PlaceHolderImages.find((img) => img.id === id)).filter(Boolean);

  return (
    <section className="py-16 sm:py-20 bg-black text-white">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="font-headline text-4xl md:text-5xl text-primary text-center">
          O que nossos clientes dizem
        </h2>
        <Separator className="my-6 bg-primary/20 w-1/4 h-[2px] shadow-red-glow" />
        
        {testimonialImages.length > 0 && (
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
                        {testimonialImages.map((image) => image && (
                            <CarouselItem key={image.id}>
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain rounded-lg"
                                    data-ai-hint={image.imageHint}
                                />
                            </CarouselItem>
                        ))}
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
