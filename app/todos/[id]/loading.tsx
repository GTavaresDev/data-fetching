export default function LoadingTodo() {
  return (
    <div>
      <main className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100">
        <div className="mx-auto flex w-full max-w-2xl animate-pulse flex-col gap-6">
          <div className="h-6 w-1/4 rounded bg-zinc-700" />
          Carregando detalhes da tarefa...
        </div>
      </main>
    </div>
  );
}
