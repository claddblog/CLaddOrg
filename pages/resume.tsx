export default function Resume() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 py-12 text-gray-900">
      <h1 className="text-2xl font-bold mb-4">Curriculum Vitae</h1>

      {/* Download Link */}
      <p className="mb-4">
        <a
          href="/static/Christopher-Ladd-Resume.pdf"
          className="text-blue-700 underline"
          download
        >
          Download PDF
        </a>
      </p>

      {/* Embedded PDF Viewer */}
      <div className="w-full h-[80vh] border border-gray-300 shadow">
        <iframe
          src="/static/Christopher-Ladd-Resume.pdf"
          title="Resume PDF"
          className="w-full h-full"
        ></iframe>
      </div>
    </main>
  )
}
