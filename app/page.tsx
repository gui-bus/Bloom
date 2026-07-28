
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-5 flex flex-col gap-5">
      <Link href="/components/button">Botão</Link>
      <Link href="/components/tabs">Tabs</Link>
    </main>
  );
}
