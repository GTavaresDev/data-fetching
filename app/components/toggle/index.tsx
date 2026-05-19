import useToggleTodoStatus from "@/app/hooks/useToggleTodoStatus";
import Checkbox from "./checkbox";

export default function ToggleTodoStatus({
  todo,
}: {
  todo: { id: number; status: string };
}) {
  return (
    <div className="flex items-center gap-2">
      <p className="italic">completar?</p>
      <form action={useToggleTodoStatus}>
        <input type="hidden" name="todoId" value={String(todo.id)} />
        <Checkbox checked={todo.status === "CONCLUIDA"} />
      </form>
    </div>
  );
}
