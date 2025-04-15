// --------------------------
// pages/papers.tsx
import Header from '../components/Header';

export default function Papers() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Research Papers</h1>
      <ul className="list-disc ml-6 text-gray-700">
        <li>
          <span>Fractured Fabric (2024) – <em>PDF coming soon</em></span>
        </li>
        {/* Add more papers as needed */}
      </ul>
    </main>
  );
}
