import { API_URL } from "@/lib/constants";

export async function deleteTodo(id: string) {
  const respose = await fetch(`${API_URL}/todos/${id}`, {
    method: "DELETE",
  });

  if (!respose.ok) throw new Error("Delete Todo Failed");
  const data = await respose.json();
  return data;
}
