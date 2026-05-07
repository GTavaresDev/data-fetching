import Link from "next/link";
import { notFound } from "next/navigation";

export default async function TodoPage(props: PageProps<"/todos/[id]">) {
  const { id } = await props.params;
  const todoId = Number(id);

  if (Number.isNaN(todoId)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <Link
          href="/"
          className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
        >
          ← Voltar para a lista
        </Link>

        <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Tarefa #{todoId}
              </p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-50">
                Visualização em construção
              </h1>
            </div>
            <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-300">
              Front-end
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
              ID recebido
            </h2>
            <p className="text-sm leading-7 text-zinc-300">
              Esta tela está usando apenas o parâmetro da rota. ID atual:{" "}
              <span className="font-semibold text-zinc-100">{todoId}</span>
            </p>
            <p className="text-sm leading-7 text-zinc-500">
              A busca de dados dessa página ficou de fora por enquanto.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
