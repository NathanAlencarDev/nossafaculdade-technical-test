import Link from "next/link";

export interface CourseCardProps {
    title: string;
    modality: string;
    duration: string;
    slug: string;
}

export const CourseCard = ({title, modality, duration, slug}: CourseCardProps) =>{
    return (
        <div className="border rounded-lg p-4 shadow-sm bg-white w-full max-w-xs">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">Modalidade: {modality}</p>
        <p className="text-sm text-gray-600 mb-4">Duração: {duration}</p>
        <Link
            href={`/cursos/${slug}`}
            className="text-blue-600 hover:underline text-sm font-medium"
        >
            Ver detalhes
        </Link>
        </div>
    );
};