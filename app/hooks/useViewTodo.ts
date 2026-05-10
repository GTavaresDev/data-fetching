"use server";

import { redirect } from "next/navigation";

export async function viewTodo(formData: FormData) {
  const todoId = formData.get("todoId");
  redirect(`/todos/${todoId}`);
}
