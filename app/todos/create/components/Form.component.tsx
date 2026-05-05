export default function Form({addTodo}: {addTodo: (formData: FormData) => Promise<void>}) {
    return (
        <form className="flex w-full max-w-sm flex-col gap-4 rounded-lg bg-zinc-700 px-4 py-4 shadow-lg" action={addTodo}>  

        <label className="block text-sm font-medium text-zinc-200">
          Título
          <input
            type="text"
            id="titulo"
            name="titulo"
            placeholder="Inserir o Título"
            className="mt-1 block w-full rounded-md border border-zinc-500 bg-zinc-800 px-3 py-2 text-zinc-100 placeholder-zinc-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block text-sm font-medium text-zinc-200">
          Descrição
          <textarea
            id="descricao"
            name="descricao"
            placeholder="Inserir a Descrição"
            className="mt-1 block w-full rounded-md border border-zinc-500 bg-zinc-800 px-3 py-2 text-zinc-100 placeholder-zinc-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm h-32"
          />
        </label>

        <button
          type="submit"
          className="mt-2 rounded-md bg-indigo-500 px-4 py-2 text-white font-semibold hover:bg-indigo-600 transition-colors"
        >
          Criar Tarefa
        </button>

      </form>
    )
}