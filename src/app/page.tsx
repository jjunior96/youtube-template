import Link from 'next/link';

export default async function HomePage() {
  return (
    <main className="w-full h-screen bg-slate-50">
      <h2 className="text-3xl font-bold">Templatee</h2>

      <Link href="/people">People page</Link>
    </main>
  );
}
