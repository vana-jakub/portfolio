"use client";

import { useState, useEffect } from "react";

const ProjectsSection = () => {
    const [openProject, setOpenProject] = useState<{
        title: string;
        description: string;
        detailedDescription: string;
        images: string[];
        link: string;
    } | null>(null);

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            detailedDescription:
            "Toto portfolio webové stránky je vytvořeno pomocí Next.js (React) a Tailwind CSS, je naprogramováno TypeScriptem a postaveno a spravováno pomocí npm. Pro ikony v sekci O mně bylo použito react-icons.",
            images: [],
            link: "https://github.com/vana-jakub/portfolio",
        },
        {
            title: "Download Manager",
            description: "Nástroj pro efektivní správu a organizaci stahování.",
            detailedDescription:
            "Download Manager je aplikace naprogramovaná v Javě s použitím JavaFX navržená pro zjednodušení procesu stahování souborů z internetu. Umožňuje uživatelům udělat s notorického procesu stahování rychlý a efektivní zážitek díky unikátním funkcím.",
            images: ["/downloadmanager/dm-1.png", "/downloadmanager/dm-2.png", "/downloadmanager/dm-3.png"],
            link: "https://github.com/vana-jakub/DownloadManager",
        },
        {
            title: "FileShare",
            description: "Platforma pro sdílení souborů bezpečně a efektivně pomocí P2P.",
            detailedDescription:
            "FileShare je peer-to-peer (P2P) platforma, která umožňuje uživatelům sdílet soubory přímo mezi sebou bez potřeby centrálního serveru. Tato aplikace je vyvynuta v Javě, jedná se spíše o menší aplikaci, ovladatelnou přímo z příkazového řádku.",
            images: ["/fileshare/fs-1.png", "/fileshare/fs-2.png", "/fileshare/fs-3.png"],
            link: "https://github.com/vana-jakub/FileShare",
        },
        {
            title: "NetStats",
            description: "Platforma pro monitorování a analýzu síťového provozu.",
            detailedDescription:
            "NetStats je nástroj pro sledování a analýzu síťového provozu v reálném čase. Aplikace je vyvinuta v Pythonu, obsahuje funkce jako získání veřejné IP adresy, sledování rychlosti připojení, ping, traceroute a další užitečné nástroje pro diagnostiku sítě.",
            images: ["/netstats/ns-1.png", "/netstats/ns-2.png", "/netstats/ns-3.png", "/netstats/ns-4.png", "/netstats/ns-5.png"],
            link: "https://github.com/vana-jakub/NetStats",
        },
    ];

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    const handleModalClose = () => {
        setSelectedImage(null);
    };

    return (
        <section id="projects" className="min-h-[calc(100vh-2.5rem)] scroll-mt-10 bg-gray-900 py-10 px-4 relative">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-5xl font-bold mb-8 text-center text-white">Projekty</h1>
                <p className="max-w-xl text-lg text-gray-300 mx-auto mb-12 text-center">
                    Zde jsou některé z mých projektů, které jsem vytvořil, klikněte na box s projektem pro delší popis a dokumentaci projektu:
                </p>
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
                    {projects.map((project, i) => (
                        <button
                            key={i}
                            onClick={() => setOpenProject(project)}
                            className="block p-10 bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-700 hover:-translate-y-1 transition cursor-pointer"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                            <p className="text-gray-400">{project.description}</p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
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
                        <p className="text-gray-300 mb-6">{openProject.detailedDescription}</p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {openProject.images.map((image, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 h-48 rounded overflow-hidden cursor-pointer"
                                    onClick={() => handleImageClick(image)}
                                >
                                    <img
                                        src={image}
                                        alt={`Project Image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <a
                            href={openProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                        >
                            Otevřít projekt na GitHub (zdrojový kód)
                        </a>
                    </div>
                </div>
            )}

            {/* Full-size Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={handleModalClose}
                >
                    <button
                        onClick={handleModalClose}
                        className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl font-bold cursor-pointer"
                    >
                        ✕
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full-size Project Image"
                        className="max-w-full max-h-[80vh] object-contain"
                    />
                </div>
            )}
        </section>
    );
};

export default ProjectsSection;
