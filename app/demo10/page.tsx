// app/demo10/page.tsx
import { revalidatePath } from "next/cache";

let todos = [
  { id: 1, title: "Learn Server Components", completed: false },
  { id: 2, title: "Practice Server Actions", completed: false },
];

let nextId = 3;

export const dynamic = "force-dynamic";

// Server Component (default)
export default async function TodoPage() {
  // Server Action: Add a todo
  async function addTodoAction(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    if (!title.trim()) return;

    todos.push({
      id: nextId++,
      title: title.trim(),
      completed: false,
    });

    revalidatePath("/demo10");
  }

  // Server Action: Toggle completed
  async function toggleTodoAction(formData: FormData) {
    "use server";
    const id = Number(formData.get("id"));
    todos = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    revalidatePath("/demo10");
  }

  // Server Action: Delete
  async function deleteTodoAction(formData: FormData) {
    "use server";
    const id = Number(formData.get("id"));
    todos = todos.filter((t) => t.id !== id);
    revalidatePath("/demo10");
  }

  return (
    <main style={{ maxWidth: 400, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Todo – Simple Server Actions</h1>

      {/* Add Todo */}
      <form action={addTodoAction} style={{ marginBottom: 20 }}>
        <input
          type="text"
          name="title"
          placeholder="New task..."
          style={{ padding: 8 }}
        />
        <button type="submit" style={{ padding: "8px 12px", marginLeft: 8 }}>
          Add
        </button>
      </form>

      {/* List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: 10, display: "flex", alignItems: "center" }}>
            {/* Toggle */}
            <form action={toggleTodoAction}>
              <input type="hidden" name="id" value={todo.id} />
              <button type="submit">{todo.completed ? "✅" : "⬜"}</button>
            </form>

            <span style={{ flex: 1, marginLeft: 10, textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.title}
            </span>

            {/* Delete */}
            <form action={deleteTodoAction}>
              <input type="hidden" name="id" value={todo.id} />
              <button type="submit" style={{ marginLeft: 10 }}>🗑</button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}