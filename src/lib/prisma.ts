import { PrismaClient } from '@prisma/client';

declare global {
    //! Variavel global para armazenar o PrismaClient.
    //? Previnindo multiplas instancias em ambiente DEV
    var prisma: PrismaClient | undefined;
}

//! Criando instancia do PrismaClient e preparando logs das queries.
export const prisma = global.prisma ?? new PrismaClient({log: ['query']});

