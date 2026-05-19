import Link from "next/link";
import Button from "./Button";
import { deleteDeleteTodo } from "../hooks/useDeleteTodo";
import { viewTodo } from "../hooks/useViewTodo";
import ToggleTodoStatus from "./toggle";
import Checkbox from "./toggle/checkbox";

type Todo = {
  id: number;
  status: string;
  titulo: string;
  descricao: string | null;
};

export default function List({ todos }: { todos: Todo[] }) {
  return (
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

            <div>{todo.status}</div>

            <p className="text-zinc-400 leading-relaxed text-sm">
              {todo.descricao || "Sem descricao informada."}
            </p>

            <div>
              <ToggleTodoStatus todo={todo} />
            </div>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-zinc-800 pt-4">
              <Button
                action={viewTodo}
                label="Visualizar"
                variant="primary"
                hiddenFields={{ todoId: todo.id }}
              />
              <Link
                href={`/todos/${todo.id}/edit`}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-lg font-medium shadow-lg shadow-indigo-500/20"
              >
                Editar
              </Link>
              <Button
                action={deleteDeleteTodo}
                label="Excluir"
                variant="danger"
                hiddenFields={{ todoId: todo.id }}
              />
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-20 border-2 border-dashed border-zinc-800 rounded-2xl">
          <p className="text-zinc-500 text-lg">Nenhuma tarefa encontrada.</p>
          <p className="text-zinc-600 text-sm">
            Que tal começar criando uma agora?
          </p>
        </div>
      )}
    </div>
  );
}
