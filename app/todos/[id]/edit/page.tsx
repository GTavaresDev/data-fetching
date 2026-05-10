import Form from "@/app/todos/create/components/Form.component";
import { getTodoForEdit, updateTodo } from "@/app/hooks/useEditTodo";
import Voltar from "@/app/components/Voltar.component";

export default async function EditTodoPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const todoId = Number(id);
  const todo = await getTodoForEdit(todoId);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-zinc-950">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <Voltar />
        </div>
        <h1 className="mb-6 text-3xl font-extrabold text-zinc-100 tracking-tight">
          Editar Tarefa
        </h1>
        <Form
          action={updateTodo}
          initialValues={{
            id: todoId,
            titulo: todo.titulo,
            descricao: todo.descricao,
          }}
          submitLabel="Salvar Alterações"
          resetLabel="Desfazer"
        />
      </div>
    </div>
  );
}
