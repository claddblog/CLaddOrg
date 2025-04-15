
// --------------------------
// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="mb-8 space-x-4 text-gray-600">
      <Link href="/">Home</Link>
      <Link href="/resume">Resume</Link>
      <Link href="/papers">Papers</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
