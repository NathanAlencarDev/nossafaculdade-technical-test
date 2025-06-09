"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export const AdminHeader = () => {
    const router = useRouter();

    //! Function de logout
    //! removendo o cookie
    function handleLogout() {
        
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        router.push("/login");

    }

    return (
        <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
            <Link href="/admin" className="text-xl font-bold text-gray-900">
            <img src="/images/unifamec.webp" alt="" />
            </Link>

            <nav className="space-x-4 text-sm text-gray-700">
            <Link href="/admin">Dashboard</Link>
            <Link href="/admin/courses">Cursos</Link>
            <Link href="/admin/courses/new">Novo Curso</Link>
            </nav>
        </div>

        <button
            onClick={handleLogout}
            className="text-sm bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
            Sair
        </button>
        </header>
    );
};
