import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="w-full max-w-5xl mx-auto py-10 px-6 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-zinc-500 uppercase tracking-[0.2em] mb-8 md:mb-0 gap-6 md:gap-0">
      <Link href="/" className="text-zinc-100 hover:text-white transition-colors">Shantanu K.</Link>
      <div className="flex gap-8">
        <Link href="/about" className="hover:text-zinc-200 transition-colors">About</Link>
        <Link href="/gallery" className="hover:text-zinc-200 transition-colors">Gallery</Link>
        <Link href="/contact" className="hover:text-zinc-200 transition-colors">Contact</Link>
      </div>
    </nav>
  );
}

