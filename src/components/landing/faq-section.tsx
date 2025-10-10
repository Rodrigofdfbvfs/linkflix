import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como recebo o acesso após a compra?",
    answer: "O acesso é imediato! Assim que seu pagamento for confirmado, você receberá um e-mail com o link para acessar e baixar seus templates do BioFlix diretamente no Canva.",
  },
  {
    question: "Preciso ter Canva Pro para usar?",
    answer: "Não! O template principal é 100% compatível com a versão gratuita do Canva. Para os bônus do Plano Premium, oferecemos um bônus especial que te dará acesso ao Canva Pro.",
  },
  {
    question: "Posso revender os templates?",
    answer: "Não, a revenda dos templates é estritamente proibida. Os templates são para uso pessoal ou para aplicar nos perfis de seus clientes, mas não podem ser revendidos como um produto separado.",
  },
  {
    question: "Terei suporte se tiver dúvidas?",
    answer: "Sim! Oferecemos suporte completo para tirar qualquer dúvida sobre o uso e a personalização dos templates. Basta entrar em contato conosco através do nosso e-mail de suporte.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#111111]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl tracking-wider">Perguntas frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#111111]/80 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
