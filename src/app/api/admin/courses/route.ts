import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyJwtToken } from "@/lib/auth";
import { z } from "zod";

//! Validação dos dados recebidos.
const schema = z.object({
    title: z.string().min(3),
    description: z.string(),
    content: z.string(),
    price: z.number(),
    imageUrl: z.string().url(),
    category: z.string(),
    modality: z.string(),
    duration: z.string(),
});

export async function POST(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    //! Verificando o token no cookie
    if (!token) {
        return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    //! Validando o token JWT
    const decoded = verifyJwtToken(token);
    if (!decoded) {
        return NextResponse.json({ error: "Token inválido" }, { status: 401 });
    }

    try {
        const body = await req.json();
        const parsed = schema.safeParse(body);

        //! Possivel erro caso os dados estejam errados.
        if (!parsed.success) {
            return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
        }

        
        const { title, description, content, price, imageUrl, category, modality, duration } = parsed.data;

        //! Slug automatico com base no titulo.
        const slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

        //! Cadastrando o curso novo no DB
        const course = await prisma.course.create({
            data: {
                title,
                description,
                content,
                price,
                imageUrl,
                category,
                modality,
                duration,
                slug,
            },
        });

        return NextResponse.json(course, { status: 201 });
    } catch (err) {
        //! Possivel erro no servidor.
        console.error(err);
        return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
    }
}
