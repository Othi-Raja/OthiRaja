// import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
// import Uiux from "./uiux";
// import Frontndback from "./frontndback";
import VsCodeEX from "./vsCodeExtension.jsx";
// import VsCodeExtension from'./vsCodeExtension'
export default function Projects() {
    // const [filter, setFilter] = useState("all");
    const filteredProjects = [
        {
            "id": "1",
            "title": "Yatras Cooking Cave",
            "alt": "yatrascookingcave",
            "img": "https://firebasestorage.googleapis.com/v0/b/portfolioformdata-4caae.appspot.com/o/Screenshot%202025-11-12%20195900.png?alt=media&token=d79bc1bd-b4e2-4da5-80a6-6e2a4043bbe4",
            "url": "https://www.yatrascookingcave.com/"
            // "Gitsource": ""
        },
        {
            "id": "2",
            "title": "Mr.Chef",
            "alt": "Mr.Chef",
            "img": "https://firebasestorage.googleapis.com/v0/b/image-f2f77.appspot.com/o/mrcheif.png?alt=media&token=013c2c3f-f5f0-4d64-b475-492fdfa5cd93",
            "url": "https://othi-raja.github.io/Mr.chef-/",
            "Gitsource": "https://github.com/Othi-Raja/Mr.chef-"
        },
        {
            "id": "3",
            "title": "Sorting",
            "alt": "Sorting",
            "img": "https://firebasestorage.googleapis.com/v0/b/image-f2f77.appspot.com/o/sample.png?alt=media&token=2a2fe43a-f0a0-4e95-98be-fa8e1874e227",
            "url": "https://othi-raja.github.io/simple/",
            "Gitsource": "https://github.com/Othi-Raja/simple"
        },
        {
            "id": "4",
            "title": "WowClothes.com",
            "alt": "WowClothes.com",
            "img": "https://firebasestorage.googleapis.com/v0/b/image-f2f77.appspot.com/o/wowclothes.png?alt=media&token=0f1932bb-6413-41b3-90e9-a0f31f74b713",
            "url": "https://othi-raja.github.io/Wowclothes_landing_Page/",
            "Gitsource": "https://github.com/Othi-Raja/Wowclothes_landing_Page"
        },
        {
            "id": "5",
            "title": "UrbanRider",
            "alt": "UrbanRider",
            "img": "https://firebasestorage.googleapis.com/v0/b/image-f2f77.appspot.com/o/urbanRider.png?alt=media&token=b59030ec-d040-4874-bc62-6e3ba4259e34",
            "url": "https://urbanrider.in/"
        },
        {
            "id": "6",
            "title": "GoExtraMile",
            "alt": "goextramile",
            "img": "https://firebasestorage.googleapis.com/v0/b/portfolioformdata-4caae.appspot.com/o/Screenshot%202025-03-16%20161017.png?alt=media&token=340f1f84-1a2f-47db-b8fc-fed615b63391",
            "url": "https://www.goextramile.in/"
        },
        {
            "id": "7",
            "title": "Amjathkhan",
            "alt": "Amjathkhan",
            "img": "https://firebasestorage.googleapis.com/v0/b/image-f2f77.appspot.com/o/am.png?alt=media&token=e0e66a05-6c3-4b3d-aa7e-06377910de97",
            "url": "https://amjathkhan.netlify.app/"
            ,
            "Gitsource": "https://github.com/Othi-Raja/Amjathkhan."
        },
        {
            "id": "8",
            "title": "HinaArora",
            "alt": "HinaArora",
            "img": "https://firebasestorage.googleapis.com/v0/b/image-f2f77.appspot.com/o/hina-arora.png?alt=media&token=292ef62e-8731-4587-8dcc-dcc8e507953a",
            "url": "https://hinaarora.netlify.app/"
            ,
            "Gitsource": "https://github.com/Othi-Raja/Hina-Arora"
        },
        {
            "id": "9",
            "title": "Tanvi Khandelwal",
            "alt": "Tanvi",
            "img": "https://firebasestorage.googleapis.com/v0/b/image-f2f77.appspot.com/o/tanvi.png?alt=media&token=37e858e1-41b3-4c8c-b078-a63ce854dcae",
            "url": "https://tanvi-khandelwal.netlify.app/"
            ,
            "Gitsource": "https://github.com/Othi-Raja/tanvi-khandelwal-nextjs"
        },
        {
            "id": "10",
            "title": "Deepika",
            "alt": "Deepika",
            "img": "https://firebasestorage.googleapis.com/v0/b/image-f2f77.appspot.com/o/dp.png?alt=media&token=df57b821-4e00-4b24-a10e-61f713135cd6",
            "url": "https://deepika-saini.netlify.app/"
            ,
            "Gitsource": "https://github.com/Othi-Raja/tanvi-khandelwal-nextjs"
        }
    ];
    const sortedProjects = [...filteredProjects].sort((a, b) => {
        if (b.Gitsource && !a.Gitsource) return -1; // a comes first
        if (!b.Gitsource && a.Gitsource) return 1;  // b comes first
        return 0; // keep original order otherwise
    });
    return (
        <section id="projects" className="bg-white dark:bg-[#121212] py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="relative inline-block mb-8 text-center">
                    <h2
                        className="font-bold text-[48px] md:text-[64px] leading-[1.1] text-black dark:text-white"
                        style={{
                            fontFamily: "Plus Jakarta Sans, sans-serif",
                            letterSpacing: "-0.02em",
                        }}
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine"
                    >
                        Projects
                    </h2>
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2">
                        <svg width="120" height="6" viewBox="0 0 120 6" fill="none">
                            <path
                                d="M2 3C30 1 60 1 90 3C95 3.5 110 4 118 3"
                                stroke="#3B82F6"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>
                {/* Section heading */}
                {/* <div className="mb-16 text-center">
                    <div className="relative inline-block">
                        <h2
                            className="font-bold text-[48px] md:text-[64px] leading-[1.1] text-black dark:text-white"
                            style={{
                                fontFamily: "Plus Jakarta Sans, sans-serif",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            My Projects
                        </h2>
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2">
                            <svg width="160" height="6" viewBox="0 0 160 6" fill="none">
                                <path
                                    d="M2 3C30 1 60 1 90 3C120 1 130 2 158 3"
                                    stroke="#F59E0B"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div> */}
                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {sortedProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            {/* Project image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.alt}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-300"
                                />
                            </div>
                            {/* Project content */}
                            <div className="p-6">
                                <h3
                                    className="font-bold text-[20px] text-black mb-3 group-hover:text-blue-600 transition-colors"
                                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                                >
                                    {project.title}
                                </h3>
                                {/* Action buttons */}
                                <div className="flex gap-3">
                                    {project.Gitsource && (
                                        <a
                                            href={project.Gitsource}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-black hover:border-blue-600 hover:text-blue-600 py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium"
                                        >
                                            <Github size={16} />
                                        </a>
                                    )}
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium"
                                    >
                                        <ExternalLink size={16} />
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <VsCodeEX/>
        </section>
    );
}