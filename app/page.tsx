import { db } from "@/db";
import Header from "./components/Header";
import List from "./components/List";

//Revalidação de dados a cada 10 segundos, porem para o cenario de excluir um todo não é o ideal, pois o usuário teria que esperar 10 segundos para ver a atualização.
// export const revalidate = 10;

//Tambem seria uma opção usar o Dynamic, porem sempre que acesse o home, mesmo sem ter feito alguma alteração, ele iria buscar os dados do banco, o que não é o ideal para a performance do app.
// export const dynamic = "force-dynamic";

export default async function Home() {
  const todos = await db.todo.findMany();

  return (
    <main className="flex flex-col items-center min-h-screen bg-zinc-950 p-8 text-zinc-100">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <Header />
        {/* Lista de Todos */}
        <List todos={todos} />
      </div>
    </main>
  );
}
