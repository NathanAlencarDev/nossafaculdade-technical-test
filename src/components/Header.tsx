// src/components/Header.tsx
import Link from "next/link";
import { BarSelection } from "./Barselection";

//! TODO COMPONENTE é UMA FUNÇÃO
export const Header = () => {
    return (
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo ou Nome */}
            <Link href="/" className="text-xl font-bold text-gray-900">
                <img src="/images/unifamec.webp" alt="" />
            </Link>

            {/* Menu */}
            <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <Link href="/cursos">Todos os Cursos</Link>
            <Link href="/contato">Contato</Link>

            </nav>

            {/* Botão de Login */}
            <Link
            href="/login"
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
            >
            Login
            </Link>
        </div>
        </header>
    );
};
