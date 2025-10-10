import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

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
  return (
    <section className="py-20 sm:py-28 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-wider">
            Escolha seu plano e comece agora
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Plano Premium */}
          <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200 relative">
            <div className="absolute top-0 right-0 -mt-3 mr-3 z-10 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
              Mais Popular
            </div>
            <Card className="bg-primary/10 border-primary h-full flex flex-col ring-2 ring-primary shadow-red-glow pt-4">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-headline tracking-wider text-primary">Plano Premium</CardTitle>
                <CardDescription className="text-white/70">Acesso completo e todos os bônus</CardDescription>
                <p className="text-4xl font-bold text-white pt-4">R$ 27,00</p>
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
                <Button asChild size="lg" className="w-full font-bold transition-all duration-300 hover:shadow-red-glow">
                  <a href="#">Quero o Premium completo</a>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Plano Básico */}
          <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-10 duration-700">
            <Card className="bg-gray-900/50 border-gray-800 h-full flex flex-col">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-headline tracking-wider">Plano Básico</CardTitle>
                <CardDescription className="text-white/70">Essencial para começar</CardDescription>
                <p className="text-4xl font-bold pt-4">R$ 14,90</p>
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
                <Button asChild className="w-full bg-gray-700 hover:bg-gray-600">
                  <Link href="/oferta-especial">Começar com o plano básico</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
