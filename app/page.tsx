"use client";

import { useState, useEffect } from "react";
import { SiPython, SiUnity, SiGit, SiPycharm, SiIntellijidea } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

export default function Home() {
    const [openProject, setOpenProject] = useState<{ title: string; description: string } | null>(null);
    useEffect(() => {
        if (openProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [openProject]);

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
                                Ahoj, jmenuji se Jakub Váňa a jsem vývojář se zaměřením na Python a Java. Mám zkušenosti s vývojem webových aplikací a her, a rád se učím nové technologie.
                            </p>
                        </div>
                    </section>

                    {/* Dovednosti */}
                    <section id="skills" className="min-h-screen scroll-mt-10 bg-gray-900 py-10 px-4">
                        <div className="max-w-4xl mx-auto px-4">
                            <h1 className="text-5xl font-bold mb-8 text-center text-white">Dovednosti</h1>
                            <p className="max-w-xl text-lg text-gray-300 mx-auto mb-12 text-center">
                                Věnuji se vývoji skriptů a aplikací v Pythonu a Javě, a mám zkušenosti s herním vývojem v Unity pomocí C#. Mám také zkušenosti s verzovacím systémem Git a používám různé IDE jako Visual Studio Code, PyCharm a IntelliJ IDEA pro efektivní vývoj.
                            </p>
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
                                        name: "Unity (C#)",
                                        description: "Tvorba 2D/3D her, fyzika, UI, skriptování v C#.",
                                        icon: <SiUnity className="w-10 h-10 text-gray-700" />,
                                        link: "https://unity.com",
                                    },
                                    {
                                        name: "Git",
                                        description: "Běžné používání na všech projektech.",
                                        icon: <SiGit className="w-10 h-10 text-orange-400" />,
                                        link: "https://git-scm.com",
                                    },
                                    {
                                        name: "Visual Studio Code",
                                        description: "Každodenní používání - vývoj webu, rozšíření, debugování.",
                                        icon: <VscVscode className="w-10 h-10 text-blue-500" />,
                                        link: "https://code.visualstudio.com",
                                    },
                                    {
                                        name: "PyCharm",
                                        description: "Efektivní práce s Pythonem - skriptování, debug, testování.",
                                        icon: <SiPycharm className="w-10 h-10 text-green-400" />,
                                        link: "https://www.jetbrains.com/pycharm/",
                                    },
                                    {
                                        name: "IntelliJ IDEA",
                                        description: "Vývoj v Javě - skvělé pro větší projekty.",
                                        icon: <SiIntellijidea className="w-10 h-10 text-purple-600" />,
                                        link: "https://www.jetbrains.com/idea/",
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
                            <p className="max-w-xl text-lg text-gray-300 mx-auto mb-12 text-center">
                                Zde jsou některé z mých projektů, které jsem vytvořil, klikněte na box s projektem pro delší popis a dokumentaci projektu.
                            </p>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {[
                                    {
                                        title: "Portfolio Website",
                                        description: "Moje osobní portfolio představující projekty a dovednosti.",
                                    },
                                    {
                                        title: "Download Manager",
                                        description: "Nástroj pro efektivní správu a organizaci stahování.",
                                    },
                                    {
                                        title: "FileShare",
                                        description: "Platforma pro sdílení souborů bezpečně a efektivně pomocí P2P.",
                                    },
                                    {
                                        title: "NetStats",
                                        description: "Platforma pro monitorování a analýzu síťového provozu.",
                                    },
                                    {
                                        title: "Shifter",
                                        description: "Primitivní simulátor CLI příkazového řádku s výstižnými příkazy a funkcemi.",
                                    },
                                    {
                                        title: "Small scripts and tools...",
                                        description: "Různé menší skripty a nástroje pro různé úkoly.",
                                    }
                                ].map((project, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setOpenProject(project)}
                                        className="block p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-700 transition"
                                    >
                                        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                                        <p className="text-gray-400">{project.description}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Ostatní */}
                    <section id="other" className="min-h-screen scroll-mt-10 bg-gray-900 py-10 px-4">
                        <div className="max-w-4xl mx-auto px-4">
                            <h1 className="text-5xl font-bold mb-8 text-center text-white">Ostatní</h1>
                            <p className="max-w-xl text-lg text-gray-300">
                                Kredit, úspěchy, ...
                            </p>
                        </div>
                    </section>
            </main>

            {/* Modal */}
            {openProject && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setOpenProject(null)}
                >
                    <div
                        className="bg-gray-900 text-white rounded-xl shadow-xl p-8 max-w-lg w-full relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setOpenProject(null)}
                            className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl font-bold cursor-pointer"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-semibold mb-4">{openProject.title}</h2>
                        <p className="text-gray-300 mb-6">{openProject.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-800 h-32 rounded"></div>
                            <div className="bg-gray-800 h-32 rounded"></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
