import { db } from "@/db";
import Form from "./components/Form.component";
import { redirect } from "next/navigation";

export default function CreateTodo() {
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

    redirect("/");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-zinc-950">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-3xl font-extrabold text-zinc-100 tracking-tight">
          Criar Tarefa
        </h1>
        <Form addTodo={addTodo} />   
      </div>
    </div>
  );
}