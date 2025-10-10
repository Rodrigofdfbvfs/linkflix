import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, CreditCard, Image as ImageIcon, Globe, Briefcase, Smile } from "lucide-react";

const bonuses = [
  {
    icon: <Gift size={32} className="text-white/80" />,
    id: "01",
    title: "Canva Pro Grátis",
    description: "Acesso exclusivo a recursos premium para levar seus designs a outro nível.",
    imageId: "bonus-canva-pro",
  },
  {
    icon: <CreditCard size={32} className="text-white/80" />,
    id: "02",
    title: "Modelos de Checkout",
    description: "Templates de páginas de pagamento para aumentar sua conversão de vendas.",
    imageId: "bonus-checkout",
  },
  {
    icon: <ImageIcon size={32} className="text-white/80" />,
    id: "03",
    title: "Posts prontos no Canva",
    description: "Pacote com artes prontas para você adaptar e manter seu feed sempre ativo.",
    imageId: "bonus-canva-posts",
  },
  {
    icon: <Globe size={32} className="text-white/80" />,
    id: "04",
    title: "Templates de Sites",
    description: "Modelos de sites de uma página para divulgar seus projetos com profissionalismo.",
    imageId: "bonus-sites",
  },
  {
    icon: <Briefcase size={32} className="text-white/80" />,
    id: "05",
    title: "Templates para Prestadores de Serviço",
    description: "Designs específicos para coaches, mentores, social media e outras profissões.",
    imageId: "bonus-services",
  },
  {
    icon: <Smile size={32} className="text-white/80" />,
    id: "06",
    title: "Pack de Figurinhas para Stories",
    description: "Figurinhas exclusivas para aumentar o engajamento e a interação nos seus stories.",
    imageId: "bonus-stickers",
  },
];

export default function BonusSection() {
  return (
    <section className="py-20 sm:py-28 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl tracking-wider text-primary">Bônus exclusivos do plano Premium</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => {
            return (
              <div key={index} className="animate-in fade-in slide-in-from-bottom-10 duration-700" style={{ animationDelay: `${index * 100}ms` }}>
                <Card className="bg-gray-900/50 border-gray-800 text-white rounded-lg overflow-hidden h-full flex flex-col group transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-red-glow">
                  <CardHeader>
                    <CardTitle className="text-primary text-2xl mt-4 !font-bold">Bônus #{bonus.id} &ndash; {bonus.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-white/80 mb-4">{bonus.description}</p>
                    <div>
                      <p className="text-sm text-primary line-through">De: R$127,00</p>
                      <p className="text-lg">Por: <span className="text-[#00FF00] font-bold">GRÁTIS</span></p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}