export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Tenha um Alfred no WhatsApp — seu “mordomo” para finanças, agenda e tarefas.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600">
          Organize suas contas, ative lembretes no Google e acompanhe tudo no seu portal. Sem mensagens desnecessárias no WhatsApp.
        </p>
        <div className="mt-8 flex gap-3">
          <a className="inline-flex items-center justify-center rounded-xl border bg-zinc-900 px-4 py-2 text-sm text-white transition hover:bg-black" href="/login">
            Entrar
          </a>
          <a className="inline-flex items-center justify-center rounded-xl border border-zinc-200 px-4 py-2 text-sm transition hover:bg-zinc-50" href="#como-funciona">
            Ver como o Alfred resolve
          </a>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { t: "Finanças simples", d: "Envie os dados ou a foto do boleto e o Alfred organiza pra você." },
          { t: "Lembretes inteligentes", d: "O Google avisa nos momentos certos — você escolhe." },
          { t: "Portal claro", d: "Status das finanças e tarefas em um só lugar." },
          { t: "Privacidade de verdade", d: "Guardamos só o essencial para funcionar bem." },
        ].map((item) => (
          <div key={item.t} className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
            <h3 className="text-2xl font-semibold tracking-tight">{item.t}</h3>
            <p className="mt-2 text-zinc-600">{item.d}</p>
          </div>
        ))}
      </section>

      <section id="como-funciona" className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">Como o Alfred resolve</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-700">
          <li>Você fala com o Alfred no WhatsApp.</li>
          <li>Ele registra suas contas/tarefas e ativa lembretes no seu Google.</li>
          <li>Você acompanha tudo no Portal.</li>
        </ol>
        <p className="mt-6 text-sm text-zinc-500">LGPD-friendly • <strong>Suporte humanizado</strong> • Sem spam no WhatsApp</p>
      </section>
    </div>
  );
}
