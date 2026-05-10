import Voltar from "@/app/components/Voltar.component";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50">
          Tarefa não encontrada
        </h1>

        <p className="text-base leading-relaxed text-zinc-400">
          A tarefa que você está procurando não existe ou foi removida.
        </p>

        <Voltar />
      </div>
    </main>
  );
}
