import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full py-6 px-4 sm:px-6 lg:px-8 z-10">
      <div className="container mx-auto">
        <Link href="/" className="text-3xl md:text-4xl font-headline text-primary tracking-widest">
          BIOFLIX
        </Link>
      </div>
    </header>
  );
}
