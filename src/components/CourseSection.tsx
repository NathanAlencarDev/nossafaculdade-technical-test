"use client";

import { useEffect, useState } from "react";
import { FilterButtons } from "./FilterButtons";
import { CourseCard } from "./CourseCard";
import { SearchBar } from "./SearchBar";

const categories = [
  "Graduação Presencial",
  "Graduação Semi Presencial",
  "Graduação EAD",
];

interface Course {
  id: number;
  title: string;
  modality: string;
  category: string;
  description: string;
  duration: string;
  slug: string;
  imageUrl?: string;
}

export const CourseSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCourses() {
      setLoading(true);
      const params = new URLSearchParams();

      if (selectedCategory) params.append("category", selectedCategory);
      if (searchTerm) params.append("search", searchTerm);

      try {
        const res = await fetch(`/api/courses?${params.toString()}`);
        if (!res.ok) throw new Error("Erro ao buscar cursos");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error(err);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, [selectedCategory, searchTerm]);

  return (
    <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-black">
            <h2 className="text-2xl font-bold text-center mb-6">Nossos Cursos</h2>

            {/* Container flex para filtros + pesquisa */}
            <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <FilterButtons options={categories} onSelect={setSelectedCategory} />
            <div className="w-full sm:w-auto max-w-md">
                <SearchBar onSearch={setSearchTerm} />
            </div>
            </div>

            {loading ? (<p>Carregando cursos...</p>) : courses.length === 0 ? (<p>Nenhum curso encontrado.</p>) : (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-6">
                {courses.map((course) => (<CourseCard key={course.slug} {...course} />))}
            </div>
            )}
        </div>
    </section>
);
};
