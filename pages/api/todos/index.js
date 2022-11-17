import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    await prisma.todo.create({
      data,
    });

    res.status(200).json({ message: "ok" });
  }
}
