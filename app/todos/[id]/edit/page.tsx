import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EditTodoPage(props: PageProps<"/todos/[id]/edit">) {
  const { id } = await props.params;
  const todoId = Number(id);

  if (Number.isNaN(todoId)) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 py-10 text-zinc-100">
      <div className="w-full max-w-md">
        <Link
          href={`/todos/${todoId}`}
          className="mb-6 inline-block text-sm text-zinc-400 transition-colors hover:text-zinc-100"
        >
          ← Voltar para a tarefa
        </Link>

        <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-zinc-100">
          Editar Tarefa
        </h1>

        <form className="flex w-full flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
          <div className="rounded-xl border border-dashed border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm text-zinc-400">
            Mock de edição front-end para a tarefa #{todoId}.
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="titulo" className="ml-1 text-sm font-semibold text-zinc-400">
              Título
            </label>
            <input
              id="titulo"
              name="titulo"
              type="text"
              placeholder="Título da tarefa"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-800 px-4 py-3 text-zinc-100 placeholder-zinc-500 shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="descricao"
              className="ml-1 text-sm font-semibold text-zinc-400"
            >
              Descrição
            </label>
            <textarea
              id="descricao"
              name="descricao"
              placeholder="Descreva a tarefa"
              className="h-32 w-full resize-none rounded-xl border border-zinc-800 bg-zinc-800 px-4 py-3 text-zinc-100 placeholder-zinc-500 shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <button
            type="button"
            className="mt-2 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 active:scale-[0.98]"
          >
            Salvar Alterações
          </button>
        </form>
      </div>
    </main>
  );
}
