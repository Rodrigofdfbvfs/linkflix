import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center animate-in fade-in slide-in-from-left-12 duration-1000">
            <Image
              src="https://i.imgur.com/miXcfPZ.png"
              alt="Templates para prestadores de serviço"
              width={500}
              height={500}
              className="rounded-lg shadow-red-glow"
              data-ai-hint="service provider templates"
            />
          </div>
          <div className="text-center md:text-left animate-in fade-in slide-in-from-right-12 duration-1000">
            <h2 className="font-headline text-4xl md:text-5xl text-primary">
              Templates para Prestadores de Serviço
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-lg mx-auto md:mx-0">
              Designs específicos para coaches, mentores, social media e outras profissões, para você se destacar no mercado e atrair mais clientes.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="font-bold text-lg px-8 py-6 bg-primary text-primary-foreground rounded-md transition-all duration-300 hover:bg-primary/90 hover:shadow-red-glow"
              >
                <Link href="#pricing">Quero me destacar</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
