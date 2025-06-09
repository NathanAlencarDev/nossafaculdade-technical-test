import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(  req: NextRequest, contextPromise: Promise<{ params: { id: string } }>) {
  const { params } = await contextPromise;
  const courseId = Number(params.id);

  if (isNaN(courseId)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }

  try {
    const deleted = await prisma.course.delete({
      //! Deletando curso recuperado pelo id passado na URL
      where: { id: courseId },
    });

    return NextResponse.json({ message: "Curso deletado com sucesso", deleted });
  } catch (error) {
    //! Retornando possivel erro e resposta 500
    console.error("[DELETE COURSE]", error);
    return NextResponse.json({ error: "Erro ao deletar curso" }, { status: 500 });
  }
}
