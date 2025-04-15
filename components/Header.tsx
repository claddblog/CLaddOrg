// 🌐 claddorg-site: Clean starter for Cloudflare Pages
// Includes Tailwind, Next.js pages for resume, papers, about

// Folder structure (to go in GitHub repo):
// /pages/index.tsx
// /pages/resume.tsx
// /pages/papers.tsx
// /pages/about.tsx
// /components/Header.tsx

// --------------------------
// pages/index.tsx
import Header from '../components/Header';

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <Header />
      <h1 className="text-3xl font-bold mb-4">Welcome to cladd.org</h1>
      <p className="text-gray-700 mb-4">
        Independent research in number theory and pattern systems.
      </p>
      <p className="text-gray-500">Explore publications, resume, and contact information.</p>
    </main>
  );
}
