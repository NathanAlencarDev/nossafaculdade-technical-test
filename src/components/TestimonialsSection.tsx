import Image from "next/image";

interface Testimonial {
    name: string;
    course: string;
    message: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
    name: "Ana Clara",
    course: "Psicologia",
    message:"Os professores são excelentes e o conteúdo é muito atualizado. Me senti preparada para o mercado de trabalho.",
    image: "/images/students/ana.jpg",
    },
    {
        name: "Athianna Costa",
        course: "Direito",
        message:
        "A estrutura do curso é incrível. Aprendi muito mais do que esperava!",
        image: "/images/students/Ath.jpg",
    },
    {
        name: "Derick Silva",
        course: "Enfermagem",
        message:
        "Flexibilidade para estudar e apoio total dos tutores. Super recomendo!",
        image: "/images/students/Derick.png",
    },
];

export const TestimonialsSection = () => {
    return (
        <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-black">
            <h2 className="text-2xl font-bold text-center mb-12">
            Depoimentos de Alunos
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((testimonial, index) => (
                <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full text-center"
                >
                <div className="flex justify-center mb-4">
                    <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                    />
                </div>
                <p className="text-gray-700 italic">"{testimonial.message}"</p>
                <h4 className="mt-4 font-semibold text-gray-900">
                    {testimonial.name}
                </h4>
                <span className="text-sm text-gray-500">{testimonial.course}</span>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}