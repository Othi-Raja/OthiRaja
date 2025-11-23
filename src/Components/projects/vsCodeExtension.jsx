import React from "react";
import vscodelogo from "./../asserts/image.png";
import { ExternalLink } from "lucide-react";
import { Github } from "react-bootstrap-icons";
import extensionlogo from './../asserts/logo.png'
export default function VsCodeEX() {
    const filteredProjects = [
        {
            id: "1",
            title: "Run Python Live",
            alt: "Run Python Live",
            img: extensionlogo,
            // img: "https://firebasestorage.googleapis.com/v0/b/portfolioformdata-4caae.appspot.com/o/Screenshot%202025-11-12%20202931.png?alt=media&token=ab0f0b8e-2ba9-4818-8c1a-85f2e8f014d0",
            url: "https://marketplace.visualstudio.com/items?itemName=RunPythonLive.run-python-live",
            Gitsource: "https://github.com/Othi-Raja/run-python-live",
        },
    ];
    return (
        <div className="container py-5">
            {/* Section Heading */}
            <div className="row mb-4">
                <div className="col d-flex justify-content-center align-items-center gap-2">
                    <h2 className="text-2xl font-bold text-dark mb-0">
                        VS Code Extension
                    </h2>
                    <img
                        src={vscodelogo}
                        alt="VS Code logo"
                        height={35}
                        width={35}
                        className="object-contain mt-3"
                    />
                </div>
            </div>
            {/* Projects Grid */}
            <div className="row g-4 text-center">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="col-12 col-md-6 col-xl-4">
                        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            {/* Project image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={project.alt}
                                    className="w-full h-48 object-contain group-hover:scale-110 transition-all duration-300"
                                />
                            </div>
                            {/* Project content */}
                            <div className="p-4">
                                <h3
                                    className="font-bold text-[20px] text-black mb-3 group-hover:text-blue-600 transition-colors"
                                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                                >
                                    {project.title}
                                </h3>
                                {/* Action buttons */}
                                <div className="d-flex gap-3">
                                    {project.Gitsource && (
                                        <a
                                            href={project.Gitsource}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 d-flex align-items-center justify-content-center gap-2 border border-gray-300 text-black hover:border-blue-600 hover:text-blue-600 py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium"
                                        >
                                            <Github size={16} />
                                        </a>
                                    )}
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 d-flex align-items-center justify-content-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium"
                                    >
                                        <ExternalLink size={16} />
                                        View Extension
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
