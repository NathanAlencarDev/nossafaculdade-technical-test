import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
    const { email, password } = await req.json();

    //! Buscando o e-mail do usuário
    const user = await prisma.user.findUnique({ where: { email } });

    //! Comparando a senha.
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!user || !isPasswordValid) {
        return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
    }

    //! Gerando token JWT e limitando por 1 hora.
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, {
        expiresIn: "1h",
    });

    const res = NextResponse.json({ token });

    //! Utilizando HttpOnly para proteger contra acesso via JS.
    res.cookies.set("token", token, {httpOnly: true, path: "/", maxAge: 60 * 60, secure: process.env.NODE_ENV === "production", sameSite: "lax"});

    return res;
}
