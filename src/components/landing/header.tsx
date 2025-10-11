import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-0 px-4 sm:px-6 lg:px-8 z-10 bg-black">
      <div className="container mx-auto">
        <Link href="/" className="text-3xl md:text-4xl font-headline text-primary tracking-widest">
          LinkFlix
        </Link>
      </div>
    </header>
  );
}
