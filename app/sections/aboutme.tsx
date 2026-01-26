import { SiPython, SiUnity, SiGit, SiPycharm, SiIntellijidea } from "react-icons/si";
import { DiJava } from "react-icons/di";

const AboutmeSection = () => {
    const skills = [
        {
            name: "Programování - Python",
            description: "Pokročilý - skripty, backend, datová analýza.",
            icon: <SiPython className="w-10 h-10 text-yellow-400" />,
        },
        {
            name: "Programování - Java",
            description: "Pokročilý - vývoj aplikací, webové služby.",
            icon: <DiJava className="w-10 h-10 text-red-500" />,
        },
        {
            name: "Unity (C#)",
            description: "Tvorba 2D/3D her, fyzika, UI, skriptování v C#.",
            icon: <SiUnity className="w-10 h-10 text-gray-700" />,
        },
        {
            name: "Git",
            description: "Běžné používání na všech projektech.",
            icon: <SiGit className="w-10 h-10 text-orange-400" />,
        },
        {
            name: "PyCharm",
            description: "Efektivní práce s Pythonem - skriptování, debug, testování.",
            icon: <SiPycharm className="w-10 h-10 text-green-400" />,
        },
        {
            name: "IntelliJ IDEA",
            description: "Vývoj v Javě - skvělé pro větší projekty.",
            icon: <SiIntellijidea className="w-10 h-10 text-purple-600" />,
        },
    ];

    return (
        <section id="aboutme" className="min-h-screen scroll-mt-10 bg-gray-900 py-20 px-4">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-5xl font-bold mb-8 text-center text-white">O mně</h1>
                <p className="max-w-2xl text-lg text-gray-300 mx-auto mb-12 text-center">
                    Jmenuji se Jakub Váňa a zajímám se o informační technologie. Aktivně se věnuji studiu programování, především v jazycích Python a Java, a postupně si rozšiřuji znalosti v oblasti kybernetické bezpečnosti. Mám základní zkušenosti s vývojem aplikací, prací v prostředí Linux a se základy počítačových sítí. Rád se učím nové technologie a neustále se snažím zlepšovat své dovednosti. Ve volném čase rád cestuji, trávím čas v přírodě, lyžuji a věnuji se rodině a přátelům.
                </p>
                <p className="max-w-xl text-lg text-gray-300 mb-8">
                    Ve volném čase se věnuji následujícím aktivitám a činnostem:
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill, i) => (
                        <a
                            key={i}
                            className="block p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-700 transition cursor-default"
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
