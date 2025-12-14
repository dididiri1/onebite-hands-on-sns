import { Button } from "../ui/button";
import { Link } from "react-router";
import type { Todo } from "@/types";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo.mutation";

export default function TodoItem({ id, content, isDone }: Todo) {
  //const deleteTodo = useDeleteTodo();
  const { mutate, isPending } = useUpdateTodoMutation();

  const handleDeleteClick = () => {};

  const handleCheckboxClick = () => {
    mutate({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="items-conter flex justify-between border p-2">
      <div className="flex gap-5">
        <input
          type={"checkbox"}
          onChange={handleCheckboxClick}
          checked={isDone}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button onClick={handleDeleteClick} variant={"destructive"}>
        삭제
      </Button>
    </div>
  );
}
