import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const PUBLIC_ROUTES = ["/", "/login", "/sobre", "/contato", "/api", "/cursos"];

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Permissao para rotas publicas.
    const isPublic = PUBLIC_ROUTES.some(route => pathname.startsWith(route)) || pathname.includes(".");

    if (isPublic) return NextResponse.next();

    const token = req.cookies.get("token")?.value || req.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
        const loginUrl = new URL("/login", req.url);
        return NextResponse.redirect(loginUrl);
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET!);
        return NextResponse.next();
    } catch {
        const loginUrl = new URL("/login", req.url);
        return NextResponse.redirect(loginUrl);
    }
}
