import { LuSearch, LuPenTool, LuWrench, LuCode2 } from "react-icons/lu";
export default function SkillsSection() {
    const data = [
        {
            icon: <LuSearch size={24} className="text-sky-600" />,
            title: "Frontend Skills",
            items: [
                "HTML", "CSS", "JavaScript (ES6+)", "React.js", "Redux",
                "Context API", "TypeScript", "Tailwind CSS", "MUI"
            ],
        },
        {
            icon: <LuPenTool size={24} className="text-purple-600" />,
            title: "Backend & API Skills",
            items: ["Node.js", "Express.js", "Flask", "JWT Auth", "REST API", "GraphQL"],
        },
        {
            icon: <LuWrench size={24} className="text-blue-600" />,
            title: "Tools & DevOps",
            items: [
                "Git", "GitHub", "Jira", "Bitbucket", "Jenkins",
                "Figma", "Miro", "API Integration", "WordPress",
                "CI/CD", "Automation"
            ],
        },
        {
            icon: <LuCode2 size={24} className="text-violet-600" />,
            title: "Database • Cloud • ML",
            items: [
                "Firebase", "AWS", "MongoDB", "SQL", "NLP",
                "BERT", "OCR (Tesseract)", "YOLO (Ultralytics)", "AI Integration"
            ],
        },
    ];
    return (
        <div className="w-full min-h-screen bg-gray-50 flex justify-center py-16">
            {/* Increased gap & card width slightly */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-[92%] max-w-7xl">
                {data.map((card, index) => (
                    <div
                        key={index}
                        className="
                            bg-white p-7 rounded-2xl border border-gray-200 
                            shadow-sm transition-all duration-300 
                            hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1
                        "
                    >
                        {/* Icon */}
                        <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl mb-4">
                            {card.icon}
                        </div>
                        {/* Title */}
                        <h2 className="text-lg font-semibold mb-4">{card.title}</h2>
                        {/* Items */}
                        <div className="flex flex-col gap-2">
                            {card.items.map((item, i) => (
                                <div
                                    key={i}
                                    className="
                                        text-sm w-full bg-gray-50 py-2 px-3 
                                        rounded-lg text-gray-700 border border-gray-100
                                        hover:bg-gray-100 transition
                                    "
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
