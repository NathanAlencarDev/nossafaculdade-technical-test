"use client";

import { Course } from "@prisma/client";
import { useState, useEffect} from "react";


export const CoursesList = () =>{
    const [courses, setCourses] = useState<Course[]>([]);
    const [categoryFilter, setCategoryFilter] = useState("");
    const [modalityFilter, setModalityFilter] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        async function fetchCourses() {
            const params = new URLSearchParams();
            if(categoryFilter) params.append("category", categoryFilter);
            if(modalityFilter) params.append("modality", modalityFilter);
            if(searchTerm) params.append("search", searchTerm);

            const res = await fetch(`/api/courses?${params.toString()}`);
            const data = await res.json();
            setCourses(data);
        }
        fetchCourses();
    }, [categoryFilter, modalityFilter, searchTerm]);

    return (
        <div>
        <div className="filters mb-4 flex gap-4">
            <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border rounded px-2 py-1 text-black"
            >
            <option value="">Todas as categorias</option>
            <option value="Graduação Presencial">Graduação Presencial</option>
            <option value="Graduação Semi Presencial">Graduação Semi Presencial</option>
            <option value="Graduação EAD">Graduação EAD</option>
            </select>

            <select
            value={modalityFilter}
            onChange={(e) => setModalityFilter(e.target.value)}
            className="border rounded px-2 py-1 text-black"
            >
            <option value="">Todas as modalidades</option>
            <option value="Bacharelado Presencial">Bacharelado Presencial</option>
            <option value="Bacharelado Semi Presencial">Bacharelado Semi Presencial</option>
            <option value="Bacharelado EAD">Bacharelado EAD</option>
            </select>

            <input
            type="text"
            placeholder="Pesquisar curso"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-2 py-1 flex-grow text-black"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
            {courses.length === 0 ? (
            <p>Nenhum curso encontrado.</p>
            ) : (
            courses.map((course) => (
                <div key={course.id} className="border rounded p-4 shadow">
                <img src={course.imageUrl} alt={course.title} className="mb-2 w-full h-40 object-cover rounded" />
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.category} - {course.modality}</p>
                <p className="mt-2 text-gray-700">{course.description}</p>
                <p className="mt-2 font-bold text-blue-600">Preço: R$ {course.price.toFixed(2)}</p>
                <a href={`/courses/${course.slug}`} className="mt-4 inline-block text-blue-600 hover:underline">
                    Ver detalhes
                </a>
                </div>
            ))
            )}
        </div>
        </div>
    );
};