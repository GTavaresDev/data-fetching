"use client";

import { useEffect } from "react";
import Voltar from "@/app/components/Voltar.component";

type TodosErrorPageProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function TodosErrorPage({
  error,
  unstable_retry,
}: TodosErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50">
          Nao foi possivel carregar a tarefa
        </h1>

        <p className="text-base leading-relaxed text-zinc-400">
          Ocorreu um erro no servidor ao buscar ou processar os dados desta
          tarefa. Tente novamente.
        </p>

        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
          {error.message || "Erro interno no servidor."}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 active:scale-[0.98]"
          >
            Tentar novamente
          </button>

          <Voltar />
        </div>
      </div>
    </main>
  );
}
