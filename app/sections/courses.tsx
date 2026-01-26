"use client";

import { useState } from "react";

interface Course {
    name: string;
    description: string;
    date: string;
    file?: string | null;
}

const CoursesSection = () => {
    const [courses] = useState<Course[]>([
        {
            name: "Testovací kurz",
            description: "Základy testování.",
            date: "1. 1. 2026",
            file: "/test.txt",
        },
        {
            name: "Vánoční kurz",
            description: "Pokročilý kurz.",
            date: "24. 12. 2025",
        },
    ]);

    const handleFilePreview = (filePath: string) => {
        window.open(filePath, "_blank");
    };

    return (
        <section id="courses" className="min-h-[calc(100vh-2.5rem)] scroll-mt-10 bg-gray-900 py-10 px-4">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-5xl font-bold mb-8 text-center text-white">Absolvované kurzy</h1>
                <p className="max-w-xl text-lg text-gray-300 mb-8">
                    Zde jsou některé z kurzů, které jsem absolvoval. Můžete si prohlédnout detaily, datum uskutečnění a přiložené soubory (např.: certifikát):
                </p>

                <div className="overflow-hidden rounded-lg shadow-xl">
                    <table className="min-w-full table-auto bg-gray-800 text-white">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-bold text-xl text-gray-200">Název kurzu</th>
                                <th className="px-6 py-3 text-left text-sm font-bold text-xl text-gray-200">Popis</th>
                                <th className="px-6 py-3 text-left text-sm font-bold text-xl text-gray-200">Datum</th>
                                <th className="px-6 py-3 text-left text-sm font-bold text-xl text-gray-200">Soubor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, index) => (
                                <tr key={index} className="hover:bg-gray-700">
                                    <td className="px-6 py-4 text-sm font-bold text-gray-300">{course.name}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-400">{course.description}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-400">{course.date}</td>
                                    <td className="px-6 py-4 font-bold">
                                        {course.file ? (
                                            <button
                                                onClick={() => {
                                                    if (course.file) {
                                                        handleFilePreview(course.file);
                                                    }
                                                }}
                                                className="text-blue-500 hover:underline"
                                            >
                                                Prohlédnout
                                            </button>
                                        ) : (
                                            <span className="text-gray-400">Žádný soubor</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
