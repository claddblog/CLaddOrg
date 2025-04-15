// 🌐 claddorg-site: Clean starter for Cloudflare Pages
// Includes Tailwind, Next.js pages for resume, papers, about

// Folder structure (to go in GitHub repo):
// /pages/index.tsx
// /pages/resume.tsx
// /pages/papers.tsx
// /pages/about.tsx
// /components/Header.tsx


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

