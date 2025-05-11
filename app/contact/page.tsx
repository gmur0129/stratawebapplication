export default function ContactPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Contact the Committee</h1>
      <p>Email: {process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
      <p>Phone: (02) 1234 5678</p>
    </div>
  );
}