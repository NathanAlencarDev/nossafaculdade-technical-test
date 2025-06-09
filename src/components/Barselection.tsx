import Link from "next/link";

interface Selected{
    link: string;
    label: string;
}

const selection: Selected[] = [
    { link: "https://exemplo.com/academico", label: "Acadêmico" },
    { link: "https://exemplo.com/institucional", label: "Institucional" },
    { link: "https://exemplo.com/seja-polo", label: "Seja Polo" },
    { link: "https://exemplo.com/vestibular", label: "Vestibular" },
];


export const BarSelection = () =>{
    return(
        <>
            <div className="bg-gray-100 text-gray-600 text-sm">
                <div className="container mx-auto px-4 py-2 flex justify-end space-x-4">
                    <Link href="#" className="hover:underline">
                        Acadêmico
                    </Link>
                    <Link href="#" className="hover:underline">
                        Institucional
                    </Link>
                    <Link href="#" className="hover:underline">
                        Seja Polo
                    </Link>
                    <Link href="#" className="hover:underline">
                        Vestibular
                    </Link>
                </div>
            </div>
        </>
    );
}
