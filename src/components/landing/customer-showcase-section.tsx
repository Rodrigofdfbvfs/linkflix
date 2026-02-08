import Image from 'next/image';

const images = [
  {
    src: "https://i.imgur.com/u0k9o60.png",
    alt: "Exemplo de link da bio de cliente 1",
    hint: "customer profile"
  },
  {
    src: "https://i.imgur.com/2j8CMpo.png",
    alt: "Exemplo de link da bio de cliente 2",
    hint: "customer profile"
  }
];

export default function CustomerShowcaseSection() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container mx-auto px-0 sm:px-4">
        <div className="flex flex-col items-center gap-10">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={1200}
              height={1200}
              className="w-full h-auto"
              data-ai-hint={image.hint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
