export default function PerfilPage() {
  return (
    <div className="space-y-6">
      <h1 className="h1">Perfil</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="card">
          <h2 className="h2">Dados da conta</h2>
          <p className="muted">E-mail e telefone (WhatsApp) aparecerão aqui.</p>
        </div>
        <div className="card">
          <h2 className="h2">Integrações</h2>
          <p className="muted">Ativar/desativar lembretes no Google.</p>
        </div>
        <div className="card sm:col-span-2">
          <h2 className="h2">Privacidade</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            <button className="btn btn-ghost">Exportar meus dados</button>
            <button className="btn btn-ghost">Apagar meus dados</button>
          </div>
          <p className="mt-2 text-sm text-zinc-500">Anexos são apagados em até 24h; mantemos apenas dados essenciais.</p>
        </div>
      </div>
    </div>
  );
}
