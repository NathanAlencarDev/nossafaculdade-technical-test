import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {

        //! Retornando os cursos cadastrados no DB
        const courses = await prisma.course.findMany();

        return NextResponse.json(courses);
    } catch (error) {

        //! Retornando possível erro.
        return NextResponse.json({ error: "Erro ao buscar cursos" }, { status: 500 });
    }
}
