"use client";

import React, { useEffect, useState } from "react";
import { CoursesTable } from "@/components/CoursesTable";
import { Layout } from "@/components/Layout";

interface Course {
  id: string;
  title: string;
  category: string;
  modality: string;
  price: number;
}

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        alert("Erro ao carregar cursos");
      });
  }, []);

  if (loading) return <p>Carregando cursos...</p>;

  return (
    <Layout isAdmin={true}>
      <CoursesTable initialCourses={courses} />
    </Layout>
  );
}
