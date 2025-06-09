import {NextResponse} from "next/server";
import { NextRequest} from "next/server";


/**
 *  !Middleware para proteger rotas administrativas.
 *  !Verificando se existe um token JWT no cookie 'token'.
 */
export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    //! Redirecionando usuario para a tela de login.
    if(!token && request.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }


    //! Permitindo acesso caso token exitir ou não for admin.
    return NextResponse.next();
}