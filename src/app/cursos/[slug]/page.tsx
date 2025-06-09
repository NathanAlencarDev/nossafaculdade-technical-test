import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// SEO Metadata (fictício)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = await prisma.course.findUnique({ where: { slug: params.slug } });
  return {
    title: course?.title || "Curso",
    description: course?.description || "Detalhes do curso.",
  };
}

type Props = {
  params: {
    slug: string;
  };
};

export default async function CourseDetailPage({ params }: Props) {
  const course = await prisma.course.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!course) return notFound();

  return (
    <>
    <Header />
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/cursos" className="text-sm text-blue-600 hover:underline">
            ← Voltar para cursos
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Imagem */}
          <div className="w-full h-64 md:h-auto relative">
            <Image
              src={course.imageUrl}
              alt={course.title}
              fill
              className="object-cover rounded-md"
            />
          </div>

          {/* Informações do curso */}
          <div>
            <h1 className="text-3xl font-bold text-black mb-4">{course.title}</h1>
            <p className="text-lg text-gray-800 mb-2">{course.description}</p>
            <p className="text-gray-700 mb-2">
              <strong>Modalidade:</strong> {course.modality}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Duração:</strong> {course.duration}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Turno:</strong> Noturno
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Início das Aulas:</strong> Agosto de 2025
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Reconhecimento:</strong> Curso reconhecido pelo MEC
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Preço:</strong>{" "}
              {course.price === 0 ? "Gratuito" : `R$ ${course.price.toFixed(2)}`}
            </p>

            <h2 className="text-xl font-semibold text-black mt-6 mb-2">
              Conteúdo Programático
            </h2>
            <pre className="whitespace-pre-wrap text-gray-800 bg-gray-100 p-4 rounded-md">
              {course.content}
            </pre>

            {/* Botão de compra */}
            <Link
              href={`/cursos/${course.slug}/sucesso`}
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
            >
              Garantir minha vaga
            </Link>
          </div>
        </div>

        {/* FAQ fictício */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-black mb-4">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <details className="bg-gray-100 p-4 rounded-md">
              <summary className="cursor-pointer font-medium text-black">Como funciona a inscrição?</summary>
              <p className="mt-2 text-gray-700">Você pode se inscrever clicando no botão "Garantir minha vaga"</p>
            </details>
            <details className="bg-gray-100 p-4 rounded-md">
              <summary className="cursor-pointer font-medium text-black">Posso estudar no meu próprio ritmo?</summary>
              <p className="mt-2 text-gray-700">Sim, o curso EaD permite flexibilidade total de horário.</p>
            </details>
            <details className="bg-gray-100 p-4 rounded-md">
              <summary className="cursor-pointer font-medium text-black">Qual a certificação oferecida?</summary>
              <p className="mt-2 text-gray-700">Diploma reconhecido pelo MEC com validade nacional.</p>
            </details>
          </div>
        </div>

        {/* Avaliação fictícia */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-black mb-4">O que dizem sobre o curso</h2>
          <div className="bg-gray-100 p-6 rounded-md">
            <p className="text-gray-700 italic">
              "Adorei o curso, os professores são muito capacitados e o conteúdo é muito atual. Recomendo a todos!"
            </p>
            <p className="mt-2 text-right font-semibold text-black">— João da Silva</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
