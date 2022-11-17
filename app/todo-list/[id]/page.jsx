import prisma from "../../../lib/prisma";

async function getTodo(id) {
  const data = await prisma.todo.findUnique({ where: { id: +id } });

  return data;
}

export default async function DynamicPage({ params }) {
  const { id } = params;
  const todoList = await getTodo(id);

  return (
    <div className="text-slate-100 p-4 md:w-[50vw] lg:w-[30vw]">
      <div key={todoList.id} className="bg-gray-800 p-4">
        <div className="space-y-2">
          <h1 className="text-2xl">{todoList.todo}</h1>
          <p>{todoList.date}</p>
          <h3 className="text-lg">time: {todoList.time}</h3>
        </div>
      </div>
    </div>
  );
}
