import { db } from "@/db";
import Header from "./components/Header";
import List from "./components/List";

export default async function Home() {
  const todos = await db.todo.findMany();

  return (
    <main className="flex flex-col items-center min-h-screen bg-zinc-950 p-8 text-zinc-100">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <Header/>
        {/* Lista de Todos */}
        <List todos={todos} />
      </div>
    </main>
  );
}
