import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 text-center">
      <div className="mb-6">
  <Image
    src="/logo.png"
    alt="Strata Committee Logo"
    width={150}
    height={150}
    priority
  />
</div>
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Strata Building Portal</h1>
      <p className="mb-6 text-lg">
        This website helps residents stay informed, submit requests, and access important documents.
      </p>
      <div className="space-y-4">
        <a href="/about" className="block text-blue-600 hover:underline">
          Learn About the Committee
        </a>
        <a href="/contact" className="block text-blue-600 hover:underline">
          Contact the Committee
        </a>
        <a href="/documents" className="block text-blue-600 hover:underline">
          View Meeting Minutes & Documents
        </a>
      </div>
    </div>
  );
  

    
}
