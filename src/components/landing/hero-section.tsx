"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');
  const [checkoutUrl, setCheckoutUrl] = useState('/oferta-especial');

  useEffect(() => {
    // This code runs only on the client
    const baseUrl = '/oferta-especial';
    const params = window.location.search;
    setCheckoutUrl(`${baseUrl}${params}`);
  }, []);

  const handleRedirect = () => {
    window.location.href = checkoutUrl;
  };

  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden bg-black py-10 sm:py-20">
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, black 70%)'
        }}
      ></div>
      <div className="container relative z-10 flex flex-col items-center px-4">
        {heroImage && (
          <div className="mb-8 animate-in fade-in zoom-in-50 duration-1000">
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
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl uppercase text-primary tracking-wider animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          Monte seu Link da Bio Estilo Netflix
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          Templates editáveis no Canva para transformar seu perfil em uma vitrine profissional.
        </p>
        <div className="mt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
          <Button
            size="lg"
            className="font-bold text-lg px-8 py-6 bg-primary text-primary-foreground rounded-md transition-all duration-300 hover:bg-primary/90 hover:shadow-red-glow"
            onClick={handleRedirect}
          >
            Quero o meu agora
          </Button>
          <p className="mt-4 text-white/80">
            Por apenas <br />
            <span className="font-bold text-[40px] text-white">R$ 14,90</span>
          </p>
        </div>
      </div>
    </section>
  );
}
