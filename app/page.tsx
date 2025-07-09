"use client";

import { useEffect } from "react";
import { SiPython, SiGit } from "react-icons/si";
import { DiJava } from "react-icons/di";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* Navigace */}
            <nav className="fixed top-0 left-0 right-0 bg-gray-700 text-white shadow z-50 p-4 flex justify-center space-x-6">
                <a href="#aboutme" className="hover:text-blue-400">O mně</a>
                <a href="#skills" className="hover:text-blue-400">Dovednosti</a>
                <a href="#projects" className="hover:text-blue-400">Projekty</a>
                <a href="#other" className="hover:text-blue-400">Ostatní</a>
            </nav>

            <main>
                    {/* O mně */}
                    <section id="aboutme" className="min-h-screen scroll-mt-10 bg-gray-950 py-24 px-4">
                        <div className="max-w-4xl mx-auto px-4">
                            <h1 className="text-5xl font-bold mb-8 text-center text-white">O mně</h1>
                            <p className="max-w-xl text-lg text-gray-300">
                                Ahoj, jmenuji se Jakub Váňa...
                            </p>
                        </div>
                    </section>

                    {/* Dovednosti */}
                    <section id="skills" className="min-h-screen scroll-mt-10 bg-gray-900 py-10 px-4">
                        <div className="max-w-4xl mx-auto px-4">
                            <h1 className="text-5xl font-bold mb-8 text-center text-white">Dovednosti</h1>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {[
                                    {
                                        name: "Python",
                                        description: "Pokročilý - skripty, backend, datová analýza.",
                                        icon: <SiPython className="w-10 h-10 text-yellow-400" />,
                                        link: "https://www.python.org",
                                    },
                                    {
                                        name: "Java",
                                        description: "Pokročilý - vývoj aplikací, webové služby.",
                                        icon: <DiJava className="w-10 h-10 text-red-500" />,
                                        link: "https://www.java.com",
                                    },
                                    {
                                        name: "Git",
                                        description: "Běžné používání na všech projektech.",
                                        icon: <SiGit className="w-10 h-10 text-orange-400" />,
                                        link: "https://git-scm.com",
                                    }
                                ].map((skill, i) => (
                                    <a
                                        key={i}
                                        href={skill.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-700 transition"
                                    >
                                        <div className="flex items-center space-x-4 mb-4">
                                            {skill.icon}
                                            <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                                        </div>
                                        <p className="text-gray-400">{skill.description}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Projekty */}
                    <section id="projects" className="min-h-screen scroll-mt-10 bg-gray-950 py-10 px-4">
                        <div className="max-w-4xl mx-auto px-4">
                            <h1 className="text-5xl font-bold mb-8 text-center text-white">Projekty</h1>
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
                    <section id="other" className="min-h-screen scroll-mt-10 bg-gray-900 py-10 px-4">
                        <div className="max-w-4xl mx-auto px-4">
                            <h1 className="text-5xl font-bold mb-8 text-center text-white">Ostatní</h1>
                            <p className="text-lg text-gray-300">
                                Kredit, úspěchy, ...
                            </p>
                        </div>
                    </section>
            </main>
        </>
    );
}
