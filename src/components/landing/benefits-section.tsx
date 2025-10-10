import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Palette, Users, Zap, TrendingUp, ShoppingBag } from "lucide-react";

const benefits = [
  {
    icon: <Palette size={28} className="text-primary" />,
    title: "Design profissional inspirado na Netflix",
    description: "Cause uma primeira impressão impactante com um visual que seus seguidores já amam e confiam.",
  },
  {
    icon: <Sparkles size={28} className="text-primary" />,
    title: "100% editável no Canva",
    description: "Personalize cores, fontes e imagens facilmente, sem precisar de habilidades técnicas.",
  },
  {
    icon: <Users size={28} className="text-primary" />,
    title: "Compatível com qualquer nicho",
    description: "Seja você um criador, coach ou empresário, o template se adapta perfeitamente à sua marca.",
  },
  {
    icon: <Zap size={28} className="text-primary" />,
    title: "Carrega rápido e é responsivo",
    description: "Ofereça a melhor experiência em qualquer dispositivo, do celular ao desktop, sem lentidão.",
  },
  {
    icon: <TrendingUp size={28} className="text-primary" />,
    title: "Aumenta engajamento e conversão",
    description: "Um link da bio profissional e organizado incentiva cliques e transforma seguidores em clientes.",
  },
  {
    icon: <ShoppingBag size={28} className="text-primary" />,
    title: "Ideal para vender produtos e serviços",
    description: "Mostre seu portfólio, e-books, cursos e serviços de forma irresistível e profissional.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 sm:py-28 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl tracking-wider">Por que escolher o <span className="text-primary">BioFlix?</span></h2>
          <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">Tudo que você precisa para ter um link da bio que impressiona e converte.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom-10 duration-700" style={{ animationDelay: `${index * 100}ms`}}>
              <Card className="h-full bg-gray-900/50 border-gray-800 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-red-glow text-left p-2">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white/90">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-white/70">{benefit.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
