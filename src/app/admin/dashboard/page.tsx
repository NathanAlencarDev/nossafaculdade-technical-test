"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";

export default function DashboardPage() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

useEffect(() => {
    async function fetchCourses() {
    try {
        const res = await fetch("/api/admin/courses");
        const data = await res.json();
        setCourses(data);
    } catch (error) {
        console.error("Erro ao buscar cursos:", error);
    } finally {
        setLoading(false);
    }
    }

    fetchCourses();
  }, []);

  function handleEdit(slug: string) {
    router.push(`/admin/dashboard/edit/${slug}`);
  }

  async function handleDelete(id: number) {
    if (!confirm("Tem certeza que deseja excluir este curso?")) return;

    try {
      const res = await fetch(`/api/admin/courses/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setCourses((prev) => prev.filter((course) => course.id !== id));
      } else {
        console.error("Erro ao excluir curso");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  }

  return (
        <section className="p-6 bg-white text-black">
        <h1 className="text-2xl font-bold mb-4">Painel de Cursos</h1>

        {loading ? (
            <p>Carregando cursos...</p>
        ) : courses.length === 0 ? (
            <p>Nenhum curso cadastrado.</p>
        ) : (
            <table className="w-full text-left border">
            <thead>
                <tr className="bg-gray-200">
                <th className="p-2">Título</th>
                <th className="p-2">Categoria</th>
                <th className="p-2">Preço</th>
                <th className="p-2">Ações</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course) => (
                <tr key={course.id} className="border-t">
                    <td className="p-2">{course.title}</td>
                    <td className="p-2">{course.category}</td>
                    <td className="p-2">R$ {course.price.toFixed(2)}</td>
                    <td className="p-2 space-x-2">
                    <button
                        onClick={() => handleEdit(course.slug)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    >
                        Editar
                    </button>
                    <button
                        onClick={() => handleDelete(course.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                        Excluir
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        )}
        </section>
    );
}
