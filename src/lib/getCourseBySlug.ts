import {prisma} from "@/lib/prisma";

/**
 *  !Função para buscar no DB pelo slug unico.
 * 
 *  !@param slug - identificador unico do curso.
 *  !@returns objeto do curso ou null se não encontrado
 */
export const getCourseBySlug = async (slug: string) => {
    const course = await prisma.course.findUnique({
        where: {slug},
    });

    return course;
}