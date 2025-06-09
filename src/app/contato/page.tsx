"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const contactSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("E-mail inválido"),
    message: z.string().min(1, "Mensagem é obrigatória"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
    const [success, setSuccess] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        });

        if (res.ok) {
        setSuccess(true);
        reset();
        }
    };

    return (
        <>
        <Header />
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-black">Fale Conosco</h1>

            {success && (
            <p className="text-green-600 mb-4 text-center">Mensagem enviada com sucesso!</p>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                {...register("name")}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
                />
                {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">E-mail</label>
                <input
                {...register("email")}
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea
                {...register("message")}
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
                />
                {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md disabled:opacity-50"
            >
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            </button>
            </form>
        </div>
        </section>
        <Footer />
        </>
    );
}
