"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useEffect, useState } from "react";

const basicFeatures = [
  "Acesso ao template principal estilo Netflix",
  "Acesso vitalício",
  "Garantia de 7 dias",
  "Suporte incluso",
];

const premiumFeatures = [
    "Acesso ao template principal estilo Netflix",
    "Acesso vitalício",
    "Garantia de 7 dias",
    "Suporte incluso",
    "Canva Pro Grátis",
    "Modelos de Checkout",
    "Posts prontos no Canva",
    "Templates de Sites",
    "Templates para Prestadores de Serviço",
    "Pack de Figurinhas para Stories",
    "Atualizações semanais",
];

export default function PricingSection() {
  const premiumImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  const handleRedirect = (baseUrl: string) => {
    const currentParams = new URLSearchParams(window.location.search);
    const newUrl = new URL(baseUrl);
    
    const baseParams = new URL(baseUrl).searchParams;
    baseParams.forEach((value, key) => {
      newUrl.searchParams.set(key, value);
    });

    currentParams.forEach((value, key) => {
        newUrl.searchParams.set(key, value);
    });

    window.location.href = newUrl.toString();
  };

  const [specialOfferUrl, setSpecialOfferUrl] = useState('/oferta-especial');

  useEffect(() => {
    setSpecialOfferUrl(`/oferta-especial${window.location.search}`);
  }, []);

  return (
    <section id="pricing" className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary">
            Escolha seu plano e comece agora
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Plano Básico */}
          <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-10 duration-700">
            <Card className="bg-gray-900/50 border-gray-800 h-full flex flex-col">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-headline">Plano Básico</CardTitle>
                <CardDescription className="text-white/70">Essencial para começar</CardDescription>
                <p className="text-5xl font-bold pt-4">R$10</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {basicFeatures.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full font-bold transition-all duration-300 hover:shadow-red-glow bg-primary">
                  <Link href={specialOfferUrl}>Começar com o plano básico</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Plano Premium */}
          <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-3 z-10 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
              Mais Popular
            </div>
            <Card className="bg-primary/10 border-primary h-full flex flex-col ring-2 ring-primary shadow-red-glow pt-4 overflow-hidden">
              {premiumImage && (
                <div className="px-6">
                  <Image
                    src={premiumImage.imageUrl}
                    alt={premiumImage.description}
                    width={400}
                    height={200}
                    className="rounded-md object-cover"
                    data-ai-hint={premiumImage.imageHint}
                  />
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-headline text-primary">Plano Premium</CardTitle>
                <CardDescription className="text-white/70">Acesso completo e todos os bônus</CardDescription>
                <p className="text-5xl font-bold text-white pt-4">R$27</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {premiumFeatures.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full font-bold transition-all duration-300 hover:shadow-red-glow" onClick={() => handleRedirect('https://pay.lowify.com.br/checkout?product_id=chIErJ')}>
                  Quero o Premium completo
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
