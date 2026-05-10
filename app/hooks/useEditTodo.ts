"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function getTodoForEdit(id: number) {
  const todo = await db.todo.findFirst({
    where: { id },
  });

  if (!todo) {
    redirect("/");
  }

  return todo;
}

export async function updateTodo(formData: FormData) {
  const id = Number(formData.get("id"));
  const titulo = formData.get("titulo") as string;
  const descricao = formData.get("descricao") as string;

  await db.todo.update({
    where: { id },
    data: {
      titulo,
      descricao,
    },
  });

  redirect("/");
}
