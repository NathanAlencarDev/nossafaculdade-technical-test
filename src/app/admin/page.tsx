// app/admin/page.tsx
import { cookies } from "next/headers";
import { verifyJwtToken } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Layout } from "@/components/Layout";

export default async function AdminPage() {
  const token = (await cookies()).get("token")?.value;
  const isAuthenticated = !!(token && verifyJwtToken(token));

  if (!isAuthenticated) {
    return redirect("/admin/login");
  }

  return (
    <Layout isAdmin={true}>
      <section className="p-8 bg-white">
        <h1 className="text-2xl font-bold text-black mb-4">Dashboard</h1>
        <p className="text-gray-700">Bem-vindo ao painel administrativo.</p>

        <div className="space-y-4 mt-6">
          <a href="/admin/courses" className="block bg-gray-200 hover:bg-gray-300 text-black px-4 py-3 rounded">
            📚 Gerenciar Cursos
          </a>
          <a href="/admin/courses/new" className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded">
            ➕ Criar Novo Curso
          </a>
        </div>
      </section>
    </Layout>
  );
}
