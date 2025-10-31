import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Alfred — seu mordomo digital",
  description: "Organize finanças, agenda e tarefas com o Alfred.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="bg-white">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        <div className="mx-auto max-w-6xl px-4">
          <header className="flex items-center justify-between py-6">
            <Link href="/" className="text-xl font-semibold">Alfred</Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/sobre" className="hover:underline">Sobre</Link>
              <Link href="/suporte" className="hover:underline">Suporte</Link>
              <Link href="/login" className="rounded-xl border px-4 py-2 text-sm hover:bg-zinc-50">Entrar</Link>
            </nav>
          </header>
          <main className="py-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
