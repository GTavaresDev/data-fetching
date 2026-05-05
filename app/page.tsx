import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
  const todos = await db.todo.findMany();

  return (
    <main className="flex flex-col items-center min-h-screen bg-zinc-950 p-8 text-zinc-100">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-10 border-b border-zinc-800 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Minhas Tarefas</h1>
            <p className="text-zinc-400 text-sm">Gerencie seus objetivos diários</p>
          </div>
          
          <Link 
            href="/todos/create"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-lg font-medium shadow-lg shadow-indigo-500/20"
          >
            + Nova Tarefa
          </Link>
        </div>

        {/* Lista de Todos */}
        <div className="grid gap-4">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <div 
                key={todo.id} 
                className="group flex flex-col p-5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-all shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">
                    {todo.titulo}
                  </h2>
                  <span className="text-[10px] uppercase tracking-wider bg-zinc-800 px-2 py-1 rounded text-zinc-500">
                    ID: {todo.id.toString().slice(-4)}
                  </span>
                </div>
                
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {todo.descricao}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center py-20 border-2 border-dashed border-zinc-800 rounded-2xl">
              <p className="text-zinc-500 text-lg">Nenhuma tarefa encontrada.</p>
              <p className="text-zinc-600 text-sm">Que tal começar criando uma agora?</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}