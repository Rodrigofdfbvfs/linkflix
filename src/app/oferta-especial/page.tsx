"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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
    "Atualizações semanais",
];

export default function SpecialOfferPage() {
    const premiumImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

    const handleRedirect = (baseUrl: string) => {
        const newUrl = new URL(baseUrl, window.location.origin);
        const currentParams = new URLSearchParams(window.location.search);

        currentParams.forEach((value, key) => {
            newUrl.searchParams.set(key, value);
        });

        window.location.href = newUrl.toString();
    };
    
    return (
        <div className="flex min-h-screen flex-col bg-black text-white">
            <Header />
            <main className="flex-1 flex items-center justify-center py-20 sm:py-28">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl text-primary">
                            Espere! Uma Oferta Especial Para Você
                        </h1>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-10 duration-700">
                            <Card className="bg-primary/10 border-primary h-full flex flex-col ring-2 ring-primary shadow-red-glow relative overflow-hidden pt-4">
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
                                    <CardDescription className="text-white/70"></CardDescription>
                                    <div className="pt-4">
                                        <p className="text-xl line-through text-white/50">De R$ 20,00</p>
                                        <p className="text-4xl font-bold text-white">
                                            Por R$ 15,90
                                        </p>
                                    </div>
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
                                <CardFooter className="flex-col gap-4">
                                    <Button size="lg" className="w-full font-bold transition-all duration-300 hover:shadow-red-glow" onClick={() => handleRedirect('https://pay.lowify.com.br/checkout?product_id=5BFiL9')}>
                                        Quero o Premium com Desconto!
                                    </Button>
                                    <Button variant="outline" className="w-full text-white/70 hover:text-white hover:bg-primary/10 border-primary" onClick={() => handleRedirect('https://pay.lowify.com.br/checkout?product_id=KNCUhu')}>
                                        Não, obrigado. Quero apenas o plano básico.
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
