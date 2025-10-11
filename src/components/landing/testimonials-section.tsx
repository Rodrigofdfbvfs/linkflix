"use client";

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '../ui/separator';

const testimonials = [
  {
    name: "Juliana Santos",
    title: "Designer Gráfico",
    avatarId: "testimonial-avatar-1",
    quote: "Transformou meu portfólio! O design é incrível e super fácil de editar no Canva. Meus clientes elogiaram muito a nova apresentação.",
  },
  {
    name: "Marcos Andrade",
    title: "Coach de Carreira",
    avatarId: "testimonial-avatar-2",
    quote: "O BioFlix é prático e profissional. Em menos de 15 minutos, meu link da bio parecia de uma grande empresa. A conversão de agendamentos aumentou 30%!",
  },
  {
    name: "Beatriz Costa",
    title: "Infoprodutora",
    avatarId: "testimonial-avatar-3",
    quote: "Eu não sabia nada de design e consegui criar um link da bio maravilhoso. Os bônus são um diferencial que valem o investimento sozinhos.",
  },
];

export default function TestimonialsSection() {
  const avatar1 = PlaceHolderImages.find((img) => img.id === 'testimonial-avatar-1');
  const avatar2 = PlaceHolderImages.find((img) => img.id === 'testimonial-avatar-2');
  const avatar3 = PlaceHolderImages.find((img) => img.id === 'testimonial-avatar-3');
  const avatars = [avatar1, avatar2, avatar3];

  const testimonialsCarouselImage = PlaceHolderImages.find((img) => img.id === 'testimonials-carousel');

  return (
    <section className="py-20 sm:py-28 bg-black text-white">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-wider text-center">
          O que nossos clientes dizem
        </h2>
        <Separator className="my-6 bg-primary/20 w-1/4 h-[2px] shadow-red-glow" />
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mt-8"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-gray-900/50 border-gray-800 text-white h-full">
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <Avatar className="w-20 h-20 mb-4 border-2 border-primary/50">
                        {avatars[index] && <AvatarImage src={avatars[index]?.imageUrl} alt={testimonial.name} />}
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-primary text-sm mb-4">{testimonial.title}</p>
                      <p className="text-white/80 italic">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white bg-black/50 border-primary/50 hover:bg-primary" />
          <CarouselNext className="text-white bg-black/50 border-primary/50 hover:bg-primary" />
        </Carousel>

        {testimonialsCarouselImage && (
            <div className="w-full mt-12">
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
