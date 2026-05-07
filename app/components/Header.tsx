import Link from "next/link";

export default function Header() { 
    return (
        <div>
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
        </div>
    )
}