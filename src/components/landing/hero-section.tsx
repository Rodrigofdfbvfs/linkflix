"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden bg-black pt-2 pb-8 sm:pt-4 sm:pb-12">
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, black 70%)'
        }}
      ></div>
      <div className="container relative z-10 flex flex-col items-center px-4">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl uppercase text-primary animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          +20 Templates de Mini Site na Bio Estilo Netflix
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          Templates editáveis no Canva para <strong className="text-primary">vender até 50% a mais</strong> pelo instagram.
        </p>
        {heroImage && (
          <div className="my-2 animate-in fade-in zoom-in-50 duration-1000">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={1000}
              height={500}
              className="w-full max-w-4xl h-auto object-contain"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          </div>
        )}
        <div className="mt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400 w-full max-w-sm sm:max-w-md">
          <Button
            asChild
            size="lg"
            className="font-bold uppercase text-lg w-full py-7 bg-primary text-primary-foreground rounded-full transition-all duration-300 hover:bg-primary/90 hover:shadow-red-glow animate-pulse-glow"
          >
            <Link href="#pricing">
              <ShoppingBag className="mr-2 h-5 w-5" />
              QUERO COMPRAR
            </Link>
          </Button>
          <p className="mt-4 text-white/80">
            Por apenas <br />
            <span className="font-bold text-[40px] text-white">R$ 10,00</span>
          </p>
        </div>
      </div>
    </section>
  );
}
