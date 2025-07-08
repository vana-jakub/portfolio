"use client";

import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* Navigace */}
            <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow z-50 p-4 flex justify-center space-x-6">
                <a href="#aboutme" className="hover:text-blue-400">O mně</a>
                <a href="#projects" className="hover:text-blue-400">Projekty</a>
                <a href="#other" className="hover:text-blue-400">Ostatní</a>
            </nav>

            <main className="pt-20 space-y-24 bg-gray-950 text-white">

                    {/* O mně */}
                    <section id="aboutme" className="min-h-screen p-6 scroll-mt-20">
                        <div className="max-w-4xl mx-auto px-4">
                            <h1 className="text-4xl font-bold mb-4">O mně</h1>
                            <p className="max-w-xl text-lg text-gray-300">
                                Ahoj, jmenuji se Jakub Váňa...
                            </p>
                        </div>
                    </section>

                    {/* Projekty */}
                    <section id="projects" className="min-h-screen p-6 bg-gray-900 scroll-mt-20">
                        <div className="max-w-4xl mx-auto px-4">
                            <h2 className="text-4xl font-bold mb-8">Projekty</h2>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: "Portfolio Website",
                                    description: "My personal portfolio showcasing projects and skills.",
                                    link: "https://google.com",
                                },
                                {
                                    title: "Project 2",
                                    description: "Description, etc.",
                                    link: "https://google.com",
                                },
                                {
                                    title: "Project 3",
                                    description: "Description, etc.",
                                    link: "https://google.com",
                                },
                            ].map((project, i) => (
                                <a
                                    key={i}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-6 bg-gray-800 shadow-md rounded-xl hover:shadow-lg hover:bg-gray-700 transition"
                                >
                                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                                    <p className="text-gray-400">{project.description}</p>
                                </a>
                            ))}
                            </div>
                        </div>
                    </section>

                    {/* Ostatní */}
                    <section id="other" className="min-h-screen p-6 scroll-mt-20">
                        <div className="max-w-4xl mx-auto px-4">
                            <h2 className="text-4xl font-bold mb-4">Ostatní</h2>
                            <p className="text-lg text-gray-300">
                                Kredit, úspěchy, ...
                            </p>
                        </div>
                    </section>

            </main>
        </>
    );
}
