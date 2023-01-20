import Link from 'next/link';

export default async function HomePage() {
  return (
    <main>
      <h2>Template</h2>

      <Link href="/people">People page</Link>
    </main>
  );
}
