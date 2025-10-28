import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full pt-4 pb-2 px-4 sm:px-6 lg:px-8 z-10 bg-black">
      <div className="container mx-auto text-center">
        <Link href="/" className="text-4xl md:text-5xl font-headline text-primary">
          LinkFlix
        </Link>
      </div>
    </header>
  );
}
