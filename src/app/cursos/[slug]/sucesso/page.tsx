import {prisma} from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface Props{
    params: {slug:string}
}

export default async function PurchaseSuccessPage({params}: Props) {
    const course = await prisma.course.findUnique({
        where: {slug: params.slug}
    });

    if(!course) return notFound();

    return (
        <>
        <Header />
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-6">Compra realizada com sucesso!</h1>
        <p className="text-black mb-4">
            Obrigado por se inscrever no curso <strong>{course.title}</strong>.
        </p>
        <p className="text-black mb-8">
            Em breve você receberá um e-mail com mais informações sobre o início das aulas e acesso ao ambiente do aluno.
        </p>
        <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Voltar para a página inicial
        </Link>
        </div>
        </section>
        <Footer />
        </>
    )
}