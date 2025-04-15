// --------------------------
// pages/about.tsx
import Header from '../components/Header';

export default function About() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p className="text-gray-700">
        Christopher C. Ladd is an independent researcher exploring patterns and structure in mathematical theory.
        This site hosts recent work and contact information.
      </p>
    </main>
  );
}
