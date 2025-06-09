import jwt from "jsonwebtoken";

//! Senha para assinatura do JWT
//! Em produção devemos utilizar variaveis de ambiente ".env"
const JWT_SECRET = process.env.JWT_SECRET || "n0554f4cu1d4d3";



/**
 *  ! Gerando um token JWT assinado.
    *! Token expira em 1 dia.
 */
export function signJwtToken(payload: object): string {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: "1d",
    });
}

/**
 *  !Verificando o token JWT.
 *  !Retorna o payload valido, ou null se invalido ou expirado.
 */
export function verifyJwtToken(token: string): any | null {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}
