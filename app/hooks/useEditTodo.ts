"use server";

import { db } from "@/db";
import {
  createTodoFormState,
  hasTodoFormErrors,
  type TodoFormState,
  validateTodoForm,
} from "@/app/todos/shared/todoFormState";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function getTodoForEdit(id: number) {
  const todo = await db.todo.findFirst({
    where: { id },
  });

  if (!todo) {
    redirect("/");
  }

  return todo;
}

export async function updateTodo(
  _prevState: TodoFormState,
  formData: FormData,
): Promise<TodoFormState> {
  const values = {
    id: String(formData.get("id") ?? ""),
    titulo: String(formData.get("titulo") ?? "").trim(),
    descricao: String(formData.get("descricao") ?? "").trim(),
  };

  const errors = validateTodoForm(values);

  if (hasTodoFormErrors(errors)) {
    return createTodoFormState(
      values,
      "Corrija os campos destacados para salvar a tarefa.",
      errors,
    );
  }

  try {
    await db.todo.update({
      where: { id: Number(values.id) },
      data: {
        titulo: values.titulo,
        descricao: values.descricao,
      },
    });
  } catch (error) {
    console.error("Erro ao atualizar tarefa:", error);

    return createTodoFormState(
      values,
      "Nao foi possivel salvar as alteracoes agora. Tente novamente em instantes.",
    );
  }

  revalidatePath("/");
  redirect("/");
}
