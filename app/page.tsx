import Link from "next/link";

export default function HomePage() {
  const benefits = [
    {
      title: "Finanças simples",
      desc: "Envie os dados ou a foto do boleto e o Alfred organiza pra você.",
    },
    {
      title: "Lembretes inteligentes",
      desc: "O Google avisa nos momentos certos — você escolhe.",
    },
    {
      title: "Portal claro",
      desc: "Status das finanças e tarefas em um só lugar.",
    },
    {
      title: "Privacidade de verdade",
      desc: "Guardamos só o essencial para funcionar bem.",
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="pt-4">
        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Tenha um Alfred no WhatsApp — seu “mordomo” para finanças, agenda e tarefas.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-600">
            Organize suas contas, ative lembretes no Google e acompanhe tudo no seu portal.
            Sem mensagens desnecessárias no WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-black"
            >
              Entrar
            </Link>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 px-5 py-2.5 text-sm font-medium shadow-sm transition hover:bg-zinc-50"
            >
              Ver como o Alfred resolve
            </a>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm ring-1 ring-black/5"
          >
            <h3 className="text-xl font-semibold tracking-tight">{b.title}</h3>
            <p className="mt-2 text-zinc-600">{b.desc}</p>
          </div>
        ))}
      </section>

      {/* Como funciona */}
      <section
        id="como-funciona"
        className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm ring-1 ring-black/5"
      >
        <h2 className="text-2xl font-semibold tracking-tight">Como o Alfred resolve</h2>
        <ol className="mt-5 space-y-3 text-zinc-700">
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-xs font-medium text-white">
              1
            </span>
            <span>Você fala com o Alfred no WhatsApp.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-xs font-medium text-white">
              2
            </span>
            <span>Ele registra suas contas/tarefas e ativa lembretes no seu Google.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-xs font-medium text-white">
              3
            </span>
            <span>Você acompanha tudo no Portal.</span>
          </li>
        </ol>

        <p className="mt-6 text-sm text-zinc-500">
          LGPD-friendly • <strong>Suporte humanizado</strong> • Sem spam no WhatsApp
        </p>
      </section>
    </div>
  );
}
