"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function useToggleTodoStatus(formData: FormData) {
  const todoId = Number(formData.get("todoId")?.toString());
  const todo = await db.todo.findFirst({
    where: { id: todoId },
  });

  if (!todo) {
    throw new Error("Tarefa nao encontrada.");
  }

  const newStatus = todo.status === "PENDENTE" ? "CONCLUIDA" : "PENDENTE";
  await db.todo.update({
    where: { id: todoId },
    data: { status: newStatus },
  });

  revalidatePath("/");
  redirect("/");
}
