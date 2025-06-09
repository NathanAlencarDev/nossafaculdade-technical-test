//! utilitario para o next
"use client"

import BannerCarousel from "@/components/BannerCarousel";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CourseSection } from "@/components/CourseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutUsButton } from "@/components/AboutUsButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function HomePage() {
    return (
        <>
        <Header />
        <main className="pt-26">
        {/* Carousel */}
        <BannerCarousel />

        {/* Course Section*/}
        <CourseSection />

        {/* BenefitsSection */}
        <BenefitsSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* About */}
        <AboutUsButton />
        </main>
        <Footer />

        </>
    );
}
