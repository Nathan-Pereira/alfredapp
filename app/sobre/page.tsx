export default function SobrePage() {
  return (
    <div className="space-y-8">
      <h1 className="h1">Sobre o Alfred</h1>
      <p className="muted max-w-3xl">
        O Alfred leva a experiência de ter um “mordomo” sempre à mão — para organizar finanças,
        agenda e tarefas de um jeito acessível e claro.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="card">
          <h2 className="h2">O que o Alfred faz (MVP)</h2>
          <ul className="mt-3 list-disc pl-5 text-zinc-700">
            <li>Recebe suas infos pelo WhatsApp (texto, voz ou foto do boleto).</li>
            <li>Ativa lembretes no seu Google (Calendar/Tasks) quando você desejar.</li>
            <li>Mostra tudo no Portal (status das finanças e tarefas).</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="h2">Privacidade &amp; segurança</h2>
          <ul className="mt-3 list-disc pl-5 text-zinc-700">
            <li>Anexos por 24h: processamos e apagamos; guardamos apenas dados essenciais.</li>
            <li>Sem excesso de mensagens: evitamos notificações proativas no WhatsApp.</li>
            <li>Seus direitos: exporte e apague seus dados pelo Portal (em Perfil).</li>
          </ul>
        </div>
      </div>

      <p className="text-zinc-600">Para pessoas e pequenas empresas que querem organização sem complicação — e sem barulho no WhatsApp.</p>
    </div>
  );
}
