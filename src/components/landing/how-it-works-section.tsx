import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HowItWorksSection() {
  const phoneMockup = PlaceHolderImages.find((img) => img.id === 'phone-mockup');

  return (
    <section className="py-20 sm:py-28 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-in fade-in slide-in-from-left-12 duration-1000">
            <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-wider">
              Crie e publique em minutos
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-lg mx-auto md:mx-0">
              Acesse o template, abra no Canva, troque textos e imagens e publique. Em poucos minutos, seu link da bio estará pronto.
            </p>
          </div>
          <div className="flex justify-center animate-in fade-in slide-in-from-right-12 duration-1000">
            {phoneMockup && (
              <Image
                src={phoneMockup.imageUrl}
                alt={phoneMockup.description}
                width={300}
                height={600}
                className="rounded-3xl border-4 border-gray-800 shadow-2xl shadow-primary/20"
                data-ai-hint={phoneMockup.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
