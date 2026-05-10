"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function addTodo(formData: FormData) {
  const titulo = formData.get("titulo") as string;
  const descricao = formData.get("descricao") as string;

  await db.todo.create({
    data: {
      titulo,
      descricao,
    },
  });

  redirect("/");
}
