"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Layout } from "@/components/Layout";

const schema = z.object({
  title: z.string().min(3),
  description: z.string(),
  content: z.string(),
  price: z.number().nonnegative(),
  imageUrl: z.string().url(),
  category: z.string(),
  modality: z.string(),
  duration: z.string(),
});

type FormData = z.infer<typeof schema>;

export default function NewCoursePage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setError("");
    try {
      const res = await fetch("/api/admin/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const { error } = await res.json();
        setError(error || "Erro ao criar curso");
        return;
      }

      router.push("/admin/courses");
    } catch (err) {
      setError("Erro inesperado.");
    }
  }

  return (
    <Layout isAdmin={true}>
    <section className="p-8 max-w bg-white text-black ">
      <h1 className="text-3xl font-bold mb-6">Novo Curso</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Título</label>
          <input {...register("title")} className="input" />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Descrição</label>
          <textarea {...register("description")} className="input" />
        </div>

        <div>
          <label className="block font-medium">Modalidade</label>
          <input {...register("modality")} className="input" />
        </div>

        <div>
          <label className="block font-medium">Duração</label>
          <input {...register("duration")} className="input" />
        </div>

        <div>
          <label className="block font-medium">Preço</label>
          <input type="number" step="0.01" {...register("price", { valueAsNumber: true })} className="input" />
        </div>

        <div>
          <label className="block font-medium">Categoria</label>
          <input {...register("category")} className="input" />
        </div>

        <div>
          <label className="block font-medium">Conteúdo Programático</label>
          <textarea {...register("content")} className="input" />
        </div>

        <div>
          <label className="block font-medium">Imagem (URL)</label>
          <input {...register("imageUrl")} className="input" />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isSubmitting ? "Salvando..." : "Criar Curso"}
        </button>
      </form>
    </section>
    </Layout>
  );
}
