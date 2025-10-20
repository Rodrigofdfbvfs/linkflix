import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-5 px-4 sm:px-6 lg:px-8 z-10 bg-black">
      <div className="container mx-auto text-center">
        <Link href="/" className="text-4xl md:text-5xl font-headline text-primary tracking-widest">
          LinkFlix
        </Link>
      </div>
    </header>
  );
}
