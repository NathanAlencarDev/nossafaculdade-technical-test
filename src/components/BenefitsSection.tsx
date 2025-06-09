import { FaLaptopCode, FaClock, FaCertificate} from "react-icons/fa";

export const BenefitsSection = () => {
    const benefits = [
        {
        icon: <FaLaptopCode className="text-blue-600 text-3xl" />,
        title: "Estude de onde quiser",
        description: "Acesse os cursos online de qualquer lugar e a qualquer hora.",
        },
        {
        icon: <FaClock className="text-blue-600 text-3xl" />,
        title: "Flexibilidade de horário",
        description: "Aprenda no seu ritmo, sem pressa e com autonomia.",
        },
        {
        icon: <FaCertificate className="text-blue-600 text-3xl" />,
        title: "Certificado de conclusão",
        description: "Receba um certificado reconhecido ao final do curso.",
        },
    ];

    return (
        <section className="bg-white py-12">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10 text-black">
            Benefícios de Comprar Nossos Cursos
            </h2>
            <div className="flex flex-wrap justify-center gap-10 text-black">
            {benefits.map((benefit, index) => (
                <div
                key={index}
                className="bg-gray-100 rounded-lg p-6 text-center w-full max-w-sm shadow-md"
                >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};