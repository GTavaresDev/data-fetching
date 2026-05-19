"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteDeleteTodo(formData: FormData) {
  const todoId = Number(formData.get("todoId"));
  await db.todo.delete({
    where: { id: todoId },
  });

  revalidatePath("/");
  redirect("/");
}
