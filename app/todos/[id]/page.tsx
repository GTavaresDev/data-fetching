import { db } from "@/db";
import { notFound } from "next/navigation";
import Voltar from "@/app/components/Voltar.component";

export default async function TodoPage(props: PageProps<"/todos/[id]">) {
  const { id } = await props.params;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const todo = await db.todo.findFirst({
    where: { id: Number(id) },
  });

  if (!todo) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <Voltar />

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
          <div className="border-b border-zinc-800 pb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Tarefa #{todo.id}
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50">
              {todo.titulo}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              {todo.descricao || "Sem descrição disponível"}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
