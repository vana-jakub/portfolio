"use client";

import { useState } from "react";

interface Course {
    name: string;
    description: string;
    date: string;
    file?: string | null;
    marked?: boolean;
}

const CoursesSection = () => {
    const [courses] = useState<Course[]>([
        {
            name: "Reference",
            description: "Reference mých schopností a mé práce.",
            date: "7. - 9. ročník ZŠ",
            file: "/test.txt",
            marked: true,
        },
        {
            name: "Pochvaly ředitele školy",
            description: "Pochvaly za pomoc při správě IT infrastruktury.",
            date: "7. - 9. ročník ZŠ",
            file: "/test.txt",
        },
        {
            name: "SSPŠ - Letní kurzy a workshopy",
            description: "Kurzy a workshopy pořádané SSPŠ během letních prázdnin a školního roku.",
            date: "03/2023 - 08/2025",
            file: "/test.txt",
        },
        {
            name: "Certifikát Python Institute PCEP",
            description: "Test Certified Entry Level Python Programmer od Python Institute.",
            date: "11.5. 2024",
            file: "/test.txt",
        },
        {
            name: "Logiscool AI a datová věda + Programování Python s data science I. a II.",
            description: "Kurz Základy umělé inteligence a datové vědy + Kurzy Python programování s data science I. a II. od Logiscool.",
            date: "09/2023 - 12/2023 + 09/2025 - 06/2025",
            file: "/test.txt",
        },
        {
            name: "Logiscool Python Master",
            description: "Certifikovaný kurz Python Master od Logiscool.",
            date: "01/2024 - 06/2024",
            file: "/test.txt",
            
        },
        {
            name: "SQL a práce s databázemi",
            description: "Kurz SQL a práce s databázemi od makeITtoday.",
            date: "01/2024 - 06/2024",
            file: "/test.txt",
        },
        {
            name: "Java I. & II.",
            description: "Kurzy Základy programování v jazyce Java I. & II. od makeITtoday.",
            date: "09/2023 - 06/2024",
            file: "/test.txt",
        },
        {
            name: "Logiscool Unity",
            description: "Kurzy Unity Basic -> Unity Advanced -> Unity Master od Logiscool.",
            date: "09/2022 - 12/2023",
            file: "/test.txt",
        },
        {
            name: "Grafický designer & 3D grafika a animace",
            description: "Kurzy staň se grafickým designerem & 3D grafika a animace I. od makeITtoday.",
            date: "09/2022 - 06/2023",
            file: "/test.txt",
        },
        {
            name: "Python I. & II.",
            description: "Kurzy Python I. & II. od makeITtoday.",
            date: "09/2022 - 06/2023",
            file: "/test.txt",
        },
    ]);

    const handleFilePreview = (filePath: string) => {
        window.open(filePath, "_blank");
    };

    return (
        <section id="courses" className="min-h-screen scroll-mt-10 bg-gray-950 py-10 px-4">
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
                                <tr
                                    key={index}
                                    className={`hover:bg-gray-700 ${course.marked
                                            ? "shadow-[inset_4px_0_0_0_rgb(220,38,38),inset_-4px_0_0_0_rgb(220,38,38),inset_0_4px_0_0_rgb(220,38,38),inset_0_-4px_0_0_rgb(220,38,38)]"
                                            : ""
                                        }`}
                                >
                                    <td className="px-6 py-4 text-sm font-bold text-gray-300">{course.name}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-400">{course.description}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-400">{course.date}</td>
                                    <td className="px-6 py-4 font-bold">
                                        {course.file ? (
                                            <a
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (course.file) {
                                                        handleFilePreview(course.file);
                                                    }
                                                }}
                                                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                                            >
                                                Prohlédnout
                                            </a>
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
