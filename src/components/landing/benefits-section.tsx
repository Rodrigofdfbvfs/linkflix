import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Palette, Users, Zap, TrendingUp, ShoppingBag } from "lucide-react";

const benefits = [
  {
    icon: <Palette size={32} className="text-[#111111]" />,
    title: "Design profissional inspirado na Netflix",
    description: "Cause uma primeira impressão impactante com um visual que seus seguidores já amam e confiam.",
  },
  {
    icon: <Sparkles size={32} className="text-[#111111]" />,
    title: "100% editável no Canva (sem precisar saber design)",
    description: "Personalize cores, fontes e imagens facilmente, sem precisar de habilidades técnicas.",
  },
  {
    icon: <Users size={32} className="text-[#111111]" />,
    title: "Compatível com qualquer nicho",
    description: "Seja você um criador, coach ou empresário, o template se adapta perfeitamente à sua marca.",
  },
  {
    icon: <Zap size={32} className="text-[#111111]" />,
    title: "Carrega rápido e é totalmente responsivo",
    description: "Ofereça a melhor experiência em qualquer dispositivo, do celular ao desktop, sem lentidão.",
  },
  {
    icon: <TrendingUp size={32} className="text-[#111111]" />,
    title: "Aumenta engajamento e conversão",
    description: "Um link da bio profissional e organizado incentiva cliques e transforma seguidores em clientes.",
  },
  {
    icon: <ShoppingBag size={32} className="text-[#111111]" />,
    title: "Ideal para vender produtos e serviços",
    description: "Mostre seu portfólio, e-books, cursos e serviços de forma irresistível e profissional.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#111111]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl tracking-wider">Por que escolher o BioFlix?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom-10 duration-700" style={{ animationDelay: `${index * 100}ms`}}>
              <Card className="h-full bg-transparent border-2 border-primary rounded-lg transition-all duration-300 hover:shadow-red-glow text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-[#111111]/80">{benefit.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
