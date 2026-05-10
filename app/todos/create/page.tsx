import Form from "./components/Form.component";
import { addTodo } from "../../hooks/useCreateTodo";
import Voltar from "@/app/components/Voltar.component";

export default function CreateTodo() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-zinc-950">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <Voltar />
        </div>
        <h1 className="mb-6 text-3xl font-extrabold text-zinc-100 tracking-tight">
          Criar Tarefa
        </h1>
        <Form action={addTodo} />
      </div>
    </div>
  );
}
