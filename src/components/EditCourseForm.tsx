"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Course {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    content: string;
    modality: string;
    duration: string;
    slug: string;
}

export default function EditCourseForm({ course }: { course: Course }) {
    const router = useRouter();

    const [title, setTitle] = useState(course.title);
    const [description, setDescription] = useState(course.description);
    const [price, setPrice] = useState(course.price);
    const [imageUrl, setImageUrl] = useState(course.imageUrl);
    const [category, setCategory] = useState(course.category);
    const [content, setContent] = useState(course.content);
    const [modality, setModality] = useState(course.modality);
    const [duration, setDuration] = useState(course.duration);
    const [slug, setSlug] = useState(course.slug);

async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

        const res = await fetch(`/api/admin/courses/${course.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title,
            description,
            price,
            imageUrl,
            category,
            content,
            modality,
            duration,
            slug,
        }),
        });

        if (res.ok) {
        alert("Curso atualizado!");
        router.push("/admin/courses");
        } else {
        alert("Erro ao atualizar curso");
        }
}

    return (
        <section className="p-8 max-w bg-white text-black ">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl p-6 bg-white rounded shadow mx-auto text-black">
        <h1 className="text-3xl font-bold mb-6">Editar Curso</h1>

        <label className="block">
            <span className="font-semibold">Título</span>
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            required
            />
        </label>

        <label className="block">
            <span className="font-semibold">Descrição</span>
            <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            required
            />
        </label>

        <label className="block">
            <span className="font-semibold">Preço</span>
            <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full border rounded px-3 py-2 mt-1"
            min={0}
            step="0.01"
            required
            />
        </label>

        <label className="block">
            <span className="font-semibold">URL da Imagem</span>
            <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            required
            />
        </label>

        <label className="block">
            <span className="font-semibold">Categoria</span>
            <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            required
            />
        </label>

        <label className="block">
            <span className="font-semibold">Conteúdo</span>
            <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            required
            />
        </label>

        <label className="block">
            <span className="font-semibold">Modalidade</span>
            <input
            type="text"
            value={modality}
            onChange={(e) => setModality(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            required
            />
        </label>

        <label className="block">
            <span className="font-semibold">Duração</span>
            <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            required
            />
        </label>

        <label className="block">
            <span className="font-semibold">Slug</span>
            <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            required
            />
        </label>

        <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold"
        >
            Salvar
        </button>
        </form>
        </section>
    );
}
