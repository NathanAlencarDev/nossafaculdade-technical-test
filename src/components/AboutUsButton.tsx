import Link from "next/link";

export const AboutUsButton = () => {
    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center my-12">
                <Link
                    href="/sobre"
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
                >
                    Saiba mais sobre nós
                </Link>
            </div>
        </section>
    );
}