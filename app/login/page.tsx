"use client";

import { useState } from "react";

export default function LoginPage(): JSX.Element {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  function enviarLink(e: React.FormEvent) {
    e.preventDefault();
    console.log("[LOGIN] Magic link enviado para:", email);
    setEnviado(true);
  }

  return (
    <div className="max-w-md space-y-4">
      <h1 className="text-4xl font-semibold leading-tight tracking-tight">Entrar no Alfred</h1>
      <p className="text-zinc-600">Acesso rápido e seguro com link mágico por e-mail.</p>

      <form onSubmit={enviarLink} className="space-y-3">
        <input
          className="w-full rounded-xl border p-3"
          placeholder="seuemail@exemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="inline-flex items-center justify-center rounded-xl border bg-zinc-900 px-4 py-2 text-sm text-white transition hover:bg-black">
          Enviar link de acesso
        </button>
      </form>

      {enviado && (
        <p className="text-sm text-green-600">Pronto! Confira seu e-mail (simulado no console).</p>
      )}

      <p className="text-sm text-zinc-500">
        Para receber lembretes no Google, o Alfred poderá solicitar autorização segura durante o uso.
        Você controla e pode desligar quando quiser.
      </p>
    </div>
  );
}
