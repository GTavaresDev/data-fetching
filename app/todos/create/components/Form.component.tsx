"use client";

interface FormProps {
  addTodo: (formData: FormData) => Promise<void>;
}

export default function Form({ addTodo }: FormProps) {
  return (
    <form 
      action={addTodo} 
      className="flex w-full max-w-md flex-col gap-5 rounded-2xl bg-zinc-900 p-6 border border-zinc-800 shadow-xl"
    >
      <div className="flex flex-col gap-2">
        <label 
          htmlFor="titulo" 
          className="text-sm font-semibold text-zinc-400 ml-1"
        >
          Título
        </label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          required
          placeholder="Ex: Finalizar relatório"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-800 px-4 py-3 text-zinc-100 placeholder-zinc-500 shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label 
          htmlFor="descricao" 
          className="text-sm font-semibold text-zinc-400 ml-1"
        >
          Descrição
        </label>
        <textarea
          id="descricao"
          name="descricao"
          required
          placeholder="Descreva os detalhes da tarefa..."
          className="w-full h-32 rounded-xl border border-zinc-800 bg-zinc-800 px-4 py-3 text-zinc-100 placeholder-zinc-500 shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none"
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 active:scale-[0.98]"
      >
        Criar Tarefa
      </button>

      <button 
        type="reset"
        className="text-center text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        Limpar campos
      </button>
    </form>
  );
}