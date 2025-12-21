import { Button } from "../ui/button";
import { Link } from "react-router";
import type { Todo } from "@/types";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo.mutation";
import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutaion";
import { useTodoDataById } from "@/hooks/quries/use-todo-data-by-id";

export default function TodoItem({ id }: { id: string }) {
  const { data: todo } = useTodoDataById(id, "LIST");
  if (!todo) throw new Error("Todo Data Undefined");
  const { content, isDone } = todo;

  //const deleteTodo = useDeleteTodo();
  const { mutate: deleteTodo, isPending: isDeleteTodoPending } =
    useDeleteTodoMutation();
  const { mutate: updateTodo, isPending } = useUpdateTodoMutation();

  const handleDeleteClick = () => {
    deleteTodo(id);
  };

  const handleCheckboxClick = () => {
    updateTodo({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="items-conter flex justify-between border p-2">
      <div className="flex gap-5">
        <input
          disabled={isDeleteTodoPending}
          type={"checkbox"}
          onChange={handleCheckboxClick}
          checked={isDone}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button
        disabled={isDeleteTodoPending}
        onClick={handleDeleteClick}
        variant={"destructive"}
      >
        삭제
      </Button>
    </div>
  );
}
