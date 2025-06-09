import { NextRequest, NextResponse } from "next/server";
import { verifyJwtToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {

    //! Extração do toke do Authorization
    const token = req.headers.get("authorization")?.replace("Bearer ", "");

    //! Conferindo se o token válido.
    if (!token || !verifyJwtToken(token)) {
        return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    //! Contando a quantidade de cursos cadastrados no DB.
    const totalCourses = await prisma.course.count();

    return NextResponse.json({ totalCourses });
}
