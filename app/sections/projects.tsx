"use client";

import { useState, useEffect } from "react";

const ProjectsSection = () => {
    const [openProject, setOpenProject] = useState<{
        title: string; 
        description: string;
        images: string[];
    } | null>(null);

    useEffect(() => {
        if (openProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [openProject]);

    const projects = [
        {
            title: "Portfolio Website",
            description: "Moje osobní portfolio představující projekty a dovednosti.",
            images: ["/test.png"],
        },
        {
            title: "Download Manager",
            description: "Nástroj pro efektivní správu a organizaci stahování.",
            images: ["/test.png"],
        },
        {
            title: "FileShare",
            description: "Platforma pro sdílení souborů bezpečně a efektivně pomocí P2P.",
            images: ["/test.png"],
        },
        {
            title: "NetStats",
            description: "Platforma pro monitorování a analýzu síťového provozu.",
            images: ["/test.png"],
        },
        {
            title: "Small scripts and tools...",
            description: "Různé menší skripty a nástroje pro různé úkoly.",
            images: ["/test.png"],
        },
    ];

    return (
        <section id="projects" className="min-h-screen scroll-mt-10 bg-gray-950 py-10 px-4 relative">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-5xl font-bold mb-8 text-center text-white">Projekty</h1>
                <p className="max-w-xl text-lg text-gray-300 mx-auto mb-12 text-center">
                    Zde jsou některé z mých projektů, které jsem vytvořil, klikněte na box s projektem pro delší popis a dokumentaci projektu.
                </p>
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
                    {projects.map((project, i) => (
                        <button
                            key={i}
                            onClick={() => setOpenProject(project)}
                            className="block p-10 bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-700 transition"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                            <p className="text-gray-400">{project.description}</p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {openProject && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setOpenProject(null)}
                >
                    <div
                        className="bg-gray-900 text-white rounded-xl shadow-xl p-8 max-w-2xl w-full relative"
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
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {openProject.images.map((image, index) => (
                                <div key={index} className="bg-gray-800 h-48 rounded overflow-hidden">
                                    <img src={image} alt={`Project Image ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsSection;
