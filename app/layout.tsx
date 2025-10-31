// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import localFont from "next/font/local";

// Use os arquivos que você tem. Aqui deixei Regular e Bold (400/700).
// Se tiver Medium/Semibold, adicione mais entradas no array `src`.
const newOrder = localFont({
  src: [
    { path: "./fonts/neworder/NewOrder-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/neworder/NewOrder-Bold.woff2",    weight: "700", style: "normal" },
  ],
  variable: "--font-neworder",
  display: "swap",
});

export const metadata = {
  title: "Alfred — seu mordomo digital",
  description: "Organize finanças, agenda e tarefas com o Alfred.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${newOrder.variable} font-sans`}>
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        <div className="mx-auto max-w-7xl px-6">
          <Header />
          <main className="py-12 sm:py-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <Link href="/" className="text-xl font-semibold tracking-tight">
        Alfred
      </Link>
      <nav className="flex items-center gap-4 text-sm">
        <Link href="/sobre" className="hover:underline">Sobre</Link>
        <Link href="/suporte" className="hover:underline">Suporte</Link>
        <Link
          href="/login"
          className="rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
        >
          Entrar
        </Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-500">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© ND Soluções Digitais — alfredassistente.com.br</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:underline">Privacidade</Link>
          <Link href="#" className="hover:underline">Termos</Link>
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "nathanpereiradejesus@gmail.com"}`}
            className="hover:underline"
          >
            Suporte
          </a>
        </div>
      </div>
    </footer>
  );
}
