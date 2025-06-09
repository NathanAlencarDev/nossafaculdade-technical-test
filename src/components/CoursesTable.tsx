"use client";

import React, { useState } from "react";
import Link from "next/link";
import { formatPrice } from "@/utils/format";

interface Course {
    id: string;
    title: string;
    category: string;
    modality: string;
    price: number;
}

interface CoursesTableProps {
    initialCourses: Course[] | undefined | null;
}

export function CoursesTable({ initialCourses }: CoursesTableProps) {
    const [courses, setCourses] = useState<Course[]>(Array.isArray(initialCourses) ? initialCourses : []);

    async function handleDelete(id: string) {
        if (!confirm("Tem certeza que deseja excluir este curso?")) return;

        try {
        const res = await fetch(`/api/courses/${id}`, {
            method: "DELETE",
        });

        if (!res.ok) throw new Error("Erro ao deletar");

        setCourses(courses.filter((c) => c.id !== id));
        alert("Curso deletado!");
        } catch (err) {
        console.error("Erro ao deletar curso:", err);
        alert("Erro ao deletar curso");
        }
}

    return (
        <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gray-50">
            <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Título</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Categoria</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Modalidade</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Preço</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Ações</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
            {courses.map((course: Course) => (
                <tr key={course.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{course.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{course.modality}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{formatPrice(course.price)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <Link href={`/admin/courses/${course.id}/edit`} className="text-blue-600 hover:underline">
                    Editar
                    </Link>
                    <button
                    onClick={() => handleDelete(course.id)}
                    className="text-red-600 hover:underline"
                    >
                    Excluir
                    </button>
                </td>
                </tr>
            ))}
            {courses.length === 0 && (
                <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500 text-sm">
                    Nenhum curso encontrado.
                </td>
                </tr>
            )}
            </tbody>
        </table>
        </div>
    );
}
