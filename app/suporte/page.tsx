"use client";

import { useState } from "react";

export default function SuportePage() {
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("Suporte Alfred");
  const [mensagem, setMensagem] = useState("");

  const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "nathanpereiradejesus@gmail.com";
  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(
    `De: ${email}\n\n${mensagem}`
  )}`;

  return (
    <div className="space-y-6">
      <h1 className="h1">Suporte</h1>
      <p className="muted">O suporte é sempre por e-mail — simples, humano e sem custo extra de mensagens.</p>

      <div className="card space-y-3 max-w-2xl">
        <label className="block text-sm">Seu e-mail</label>
        <input className="w-full rounded-xl border p-3" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label className="block text-sm mt-4">Assunto</label>
        <input className="w-full rounded-xl border p-3" value={assunto} onChange={(e) => setAssunto(e.target.value)} />

        <label className="block text-sm mt-4">Mensagem</label>
        <textarea className="w-full rounded-xl border p-3 min-h-[120px]" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />

        <div className="pt-2">
          <a className="btn btn-primary" href={mailto}>Enviar por e-mail</a>
        </div>
      </div>
    </div>
  );
}
