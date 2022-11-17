"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Card({ todoLists }) {
  const router = useRouter();

  async function delTodo(id) {
    const res = await fetch(`/api/todos/${id}`, { method: "DELETE" });
    const data = await res.json();

    console.log(data);
    router.refresh();
  }

  return todoLists.map((todoList) => (
    <div key={todoList.id} className="bg-gray-800 p-4 relative">
      <button
        className="absolute top-2 right-4"
        onClick={() => delTodo(todoList.id)}
      >
        X
      </button>
      <div className="space-y-2">
        <h1 className="text-2xl">{todoList.todo}</h1>
        <p>{todoList.date}</p>
      </div>
      <div className="mt-4 text-right">
        <Link
          className="bg-amber-600 rounded-md hover:bg-amber-700 hover:text-slate-200 px-6 py-2"
          href={`/todo-list/${todoList.id}`}
        >
          Detail
        </Link>
      </div>
    </div>
  ));
}
