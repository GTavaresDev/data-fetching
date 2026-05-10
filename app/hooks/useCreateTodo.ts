"use server";

import { db } from "@/db";
import {
  createTodoFormState,
  hasTodoFormErrors,
  type TodoFormState,
  validateTodoForm,
} from "@/app/todos/shared/todoFormState";
import { redirect } from "next/navigation";

export async function addTodo(
  _prevState: TodoFormState,
  formData: FormData,
): Promise<TodoFormState> {
  const values = {
    titulo: String(formData.get("titulo") ?? "").trim(),
    descricao: String(formData.get("descricao") ?? "").trim(),
  };

  const errors = validateTodoForm(values);

  if (hasTodoFormErrors(errors)) {
    return createTodoFormState(
      values,
      "Corrija os campos destacados para continuar.",
      errors,
    );
  }

  try {
    await db.todo.create({
      data: {
        titulo: values.titulo,
        descricao: values.descricao,
      },
    });
  } catch (error) {
    console.error("Erro ao criar tarefa:", error);

    return createTodoFormState(
      values,
      "Nao foi possivel salvar a tarefa agora. Tente novamente em instantes.",
    );
  }

  redirect("/");
}
