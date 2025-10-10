import Link from "next/link";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <footer className="bg-black text-white/70">
      <Separator className="bg-white/10" />
      <div className="container mx-auto py-8 px-4 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="#" className="text-sm hover:text-primary hover:underline transition-colors">
            Política de Privacidade
          </Link>
          <Link href="#" className="text-sm hover:text-primary hover:underline transition-colors">
            Termos de Uso
          </Link>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} BioFlix – Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
