import { db } from "@/db";
import Form from "./components/Form.component";
import { redirect } from "next/navigation";

export default function CreateTodo() {
  // Essa função é chamada quando o formulário é submetido, mesma coisa que UseState, mas para formulários, e é marcada com "use server" para indicar que é uma função do lado do servidor
  const addTodo = async (formData: FormData) => {
    "use server";
    const titulo = formData.get("titulo") as string;
    const descricao = formData.get("descricao") as string;

    await db.todo.create({
      data: {
        titulo,
        descricao,
      },
    });

    redirect("/todos/create"); // Redireciona para a página de listagem de tarefas após criar uma nova tarefa
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-4 bg-zinc-600">
      <h1 className="mb-4 text-2xl font-bold text-zinc-100">
        Criar Tarefas
      </h1>
      <Form addTodo={addTodo} />   
    </div>
  );
}
