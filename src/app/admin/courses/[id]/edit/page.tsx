import { PrismaClient } from "@prisma/client";
import EditCourseForm from "@/components/EditCourseForm"; 
import { Layout } from "@/components/Layout";


const prisma = new PrismaClient();

async function getCourse(id: number) {
  return prisma.course.findUnique({ where: { id } });
}

export default async function EditCoursePage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (isNaN(id)) throw new Error("ID inválido");

  const course = await getCourse(id);

  if (!course) {
    return <p className="p-8 text-center text-red-600">Curso não encontrado</p>;
  }

  return (
      <Layout isAdmin={true}>
        <EditCourseForm course={course} />
      </Layout>
  ); 
    
}
