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

                    {/* About Me */}
                    <section id="aboutme" className="min-h-screen p-6 scroll-mt-20">
                        <div className="max-w-4xl mx-auto px-4">
                            <h1 className="text-4xl font-bold mb-4">O mně</h1>
                            <p className="max-w-xl text-lg text-gray-300">
                                I'm a passionate developer with a love for building clean, fast, and user-friendly web apps.
                            </p>
                        </div>
                    </section>

                    {/* Projects */}
                    <section id="projects" className="min-h-screen p-6 bg-gray-900 scroll-mt-20">
                        <div className="max-w-4xl mx-auto px-4">
                            <h2 className="text-4xl font-bold mb-8">Projekty</h2>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {["Portfolio Website", "E-commerce Demo", "Blog Engine"].map((title, i) => (
                                    <div key={i} className="p-6 bg-gray-800 shadow-md rounded-xl hover:shadow-lg transition">
                                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                                        <p className="text-gray-400">Brief description of the project goes here.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Other */}
                    <section id="other" className="min-h-screen p-6 scroll-mt-20">
                        <div className="max-w-4xl mx-auto px-4">
                            <h2 className="text-4xl font-bold mb-4">Ostatní</h2>
                            <p className="text-lg text-gray-300">Here you can list awards, side projects, hobbies, or blog links.</p>
                        </div>
                    </section>

            </main>
        </>
    );
}
