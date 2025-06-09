import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: Request, context: { params: { id: string } }) {
    const id = Number(context.params.id);

    //! Garantindo que o id é do tipo numérico.
    if (isNaN(id)) {
        return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    try {
        //! Removendo o curso por ID
        await prisma.course.delete({ where: { id } });
        return NextResponse.json({ message: "Curso deletado com sucesso" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Erro ao deletar curso" }, { status: 500 });
    }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const id = Number(params.id);

    //! Conferindo o id antes de atualizar.
    if (isNaN(id)) {
        return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    try {
    const body = await req.json();

    //! Campos para atualização.
    const { title, description, price, category, slug } = body;

    //! Atualizando o curso no DB
    const updatedCourse = await prisma.course.update({
        where: { id },
            data: {
                title,
                description,
                price,
                category,
                slug,
            },
    });

    return NextResponse.json(updatedCourse);
    } catch (error) {
        console.error("Erro ao atualizar curso:", error);
        return NextResponse.json({ error: "Erro ao atualizar curso" }, { status: 500 });
    }
}
