export default function DocumentsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Meeting Documents</h1>
      <ul className="list-disc list-inside">
        <li><a href="/meeting-notes.pdf" className="text-blue-600 hover:underline" target="_blank">Download Meeting Notes (PDF)</a></li>
        <li><a href="/bylaws.pdf" className="text-blue-600 hover:underline" target="_blank">View Building Bylaws</a></li>
      </ul>
    </div>
  );
}