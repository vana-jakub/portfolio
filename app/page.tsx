"use client";

import { useEffect } from "react";

import AboutmeSection from "./sections/aboutme";
import ProjectsSection from "./sections/projects";
import CoursesSection from "./sections/courses";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* Navigace */}
            <nav className="fixed top-0 left-0 right-0 bg-gray-700 text-white shadow z-50 p-4 flex justify-center space-x-6">
                <a href="#aboutme" className="hover:text-blue-400">O mně</a>
                <a href="#courses" className="hover:text-blue-400">Absolvované kurzy</a>
                <a href="#projects" className="hover:text-blue-400">Projekty</a>
            </nav>

            <main>
                    {/* O mně */}
                    <AboutmeSection />

                    {/* Absolvované kurzy */}
                    <CoursesSection />

                    {/* Projekty */}
                    <ProjectsSection />
            </main>
        </>
    );
}
