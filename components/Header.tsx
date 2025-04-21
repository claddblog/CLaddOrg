import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b py-4 mb-8 text-center">
      <nav className="space-x-6 text-blue-700 text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
