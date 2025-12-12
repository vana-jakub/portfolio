import { SiPython, SiUnity, SiGit, SiPycharm, SiIntellijidea } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const AboutmeSection = () => {
    return (
        <section id="aboutme" className="min-h-screen scroll-mt-10 bg-gray-900 py-20 px-4">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-5xl font-bold mb-8 text-center text-white">O mně</h1>
                <p className="max-w-xl text-lg text-gray-300 mx-auto mb-12 text-center">
                    Jmenuji se Jakub Váňa a jsem vývojář se zaměřením na Python a Java. Mám zkušenosti s vývojem webových aplikací a her, a rád se učím nové technologie.
                </p>
                <p className="max-w-xl text-lg text-gray-300 mb-8">
                    Níže jsou uvedeny některé z mých klíčových dovedností a nástrojů, které běžně používám při vývoji projektů.
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
    );
};

export default AboutmeSection;
