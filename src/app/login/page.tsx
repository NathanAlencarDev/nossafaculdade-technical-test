"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const schema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Mínimo de 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
    
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
        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const { error } = await res.json();
            setError(error || "Erro ao fazer login");
            return;
        }

        const { token } = await res.json();
        localStorage.setItem("token", token);
        router.push("/admin");
        } catch (err) {
        setError("Erro inesperado. Tente novamente.");
        }
    }

    return (
        <>
        <Header />
        <section className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded shadow-md w-full max-w-md"
        >
            <h1 className="text-2xl font-bold mb-6 text-center">Acesso ao CMS</h1>

            <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
                type="email"
                className="w-full border rounded px-3 py-2"
                {...register("email")}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
            <label className="block mb-1 font-medium">Senha</label>
            <input
                type="password"
                className="w-full border rounded px-3 py-2"
                {...register("password")}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

            <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
            {isSubmitting ? "Entrando..." : "Entrar"}
            </button>
        </form>
        </section>
        <Footer />
        </>
    );
}
