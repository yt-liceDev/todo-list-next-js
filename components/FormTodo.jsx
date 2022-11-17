"use client";

import { useRouter } from "next/navigation";
import Input from "./Input";

export default function FormTodo() {
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: formData.get("todo"),
        date: formData.get("date"),
        time: formData.get("time"),
      }),
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
    e.target.reset();
    router.push("/todo-list");
  }

  return (
    <div className="grid grid-cols-1 place-items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 space-y-4 p-4 w-[80vw] md:w-[40vw]"
      >
        <div className="flex flex-col gap-4">
          <label className="text-slate-100">Todo</label>
          <Input type="text" name="todo" placeholder="add your task" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-slate-100">Date</label>
          <Input name="date" type="date" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-slate-100">Time</label>
          <Input name="time" type="time" />
        </div>
        <div className="text-center pt-6">
          <button
            className="bg-amber-600 rounded-md hover:bg-amber-700 hover:text-slate-200 text-slate-100 px-6 py-2"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
