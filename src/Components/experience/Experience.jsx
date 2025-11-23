import { Calendar, MapPin } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Experience.css"; // <-- custom styles here
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Experience() {
    useEffect(() => {
        AOS.init();
    }, []);
    const experiences = [
        {
            id: 1,
            company: "Go Eleventh Mile",
            role: "Web App Developer Intern",
            period: "August 2024 - October 2025",
            location: "Remote",
            description:
                "Currently working as a Web App Developer Intern, focusing on full-stack development projects. Involved in building modern web applications using React.js, Node.js, and various database technologies.",
            technologies: [
                "React.js",
                "Node.js",
                "JavaScript",
                "API Integration",
                "Database Management",
            ],
            status: "completed",
            achievements: [
                "Developing responsive web applications with modern frameworks",
                "Collaborating with cross-functional teams using Agile methodology",
                "Implementing API integrations and database solutions",
            ],
        },
        {
            id: 2,
            company: "Softrate Technologies",
            role: "Web Developer Intern",
            period: "January 2024 - April 2024",
            location: "Remote",
            description:
                "Completed a 4-month internship focusing on web development fundamentals and practical application of programming skills. Gained hands-on experience with frontend and backend technologies.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "WordPress",
                "PHP",
                "MySQL",
            ],
            status: "completed",
            achievements: [
                "Built responsive websites using HTML, CSS, and JavaScript",
                "Worked with WordPress for content management solutions",
                "Developed problem-solving skills through real-world projects",
            ],
        },
    ];
    return (
        <section id="work" className="bg-light py-5 px-3" >
            <div className="container">
                {/* Section heading */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold display-5 gradient-text" data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine">Work Experience</h2>
                    <div className="timeline-separator"></div>
                </div>
                {/* Timeline */}
                <div className="position-relative">
                    {/* Timeline line */}
                    <div className="timeline-line"></div>
                    {/* Experience items */}
                    <div className="d-flex flex-column gap-5" data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`row align-items-start ${index % 2 === 0 ? "flex-row-reverse" : ""
                                    }`}
                                data-aos="fade-in"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine"
                            >
                                {/* Timeline dot */}
                                <div className="timeline-dot">
                                    {exp.status === "current" && (
                                        <div className="timeline-dot-inner"></div>
                                    )}
                                </div>
                                {/* Content card */}
                                <div className="col-md-6">
                                    <div className="card shadow-lg border-0 rounded-4 hover-lift">
                                        <div className="card-body p-4">
                                            {/* Status badge */}
                                            {exp.status === "current" && (
                                                <span className="badge bg-green-400 position-absolute top-0 end-0 m-3 shadow-sm">
                                                    Current
                                                </span>
                                            )}
                                            {/* Company and role */}
                                            <h4 className="fw-bold text-dark d-flex align-items-center mb-1" data-aos="fade-in"
                                                data-aos-duration="1000"
                                                data-aos-easing="ease-in-sine">
                                                {exp.company}
                                                {/* <ExternalLink
                                                    size={18}
                                                    className="text-primary ms-2"
                                                /> */}
                                            </h4>
                                            <h5 className="fw-semibold text-primary mb-3" data-aos="fade-in"
                                                data-aos-duration="1000"
                                                data-aos-easing="ease-in-sine">
                                                {exp.role}
                                            </h5>
                                            {/* Period and location */}
                                            <div className="d-flex flex-wrap gap-3 text-muted small mb-3" >
                                                <span className="d-flex align-items-center gap-1" data-aos="fade-in"
                                                    data-aos-duration="500"
                                                    data-aos-easing="ease-in-sine">
                                                    <Calendar size={16} /> {exp.period}
                                                </span>
                                                <span className="d-flex align-items-center gap-1" data-aos="fade-in"
                                                    data-aos-duration="1000"
                                                    data-aos-easing="ease-in-sine">
                                                    <MapPin size={16} /> {exp.location}
                                                </span>
                                            </div>
                                            {/* Description */}
                                            <p className="text-secondary" data-aos="fade-in"
                                                data-aos-duration="1000"
                                                data-aos-easing="ease-in-sine">{exp.description}</p>
                                            {/* Achievements */}
                                            <h6 className="fw-semibold mt-4" data-aos="fade-in"
                                                data-aos-duration="1000"
                                                data-aos-easing="ease-in-sine">Key Achievements:</h6>
                                            <ul className="mb-3"
                                                data-aos="fade-in"
                                                data-aos-duration="1000"
                                                data-aos-easing="ease-in-sine"
                                            >
                                                {exp.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="text-secondary small">
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                            {/* Technologies */}
                                            <h6 className="fw-semibold" data-aos="fade-in"
                                                data-aos-duration="1000"
                                                data-aos-easing="ease-in-sine">Technologies Used:</h6>
                                            <div className="d-flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, index) => (
                                                    <span
                                                        key={tech}
                                                        data-aos="fade-in"
                                                        data-aos-duration={index * 100 + 500}
                                                        data-aos-easing="ease-in-sine"
                                                        className="badge tech-badge"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-none d-md-block"></div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Bottom CTA */}
                {/* <div className="text-center mt-5">
                    <div className="p-5 rounded-4 bg-white border shadow-sm">
                        <h3 className="fw-bold mb-3 gradient-text">
                            Ready to Work Together?
                        </h3>
                        <p className="text-secondary mx-auto" style={{ maxWidth: "500px" }}>
                            I'm always open to new opportunities and exciting projects. Let's
                            discuss how I can contribute to your team.
                        </p>
                        <a
                            href="#contact"
                            className="btn btn-gradient btn-lg d-inline-flex align-items-center gap-2"
                        >
                            Get In Touch <ExternalLink size={16} />
                        </a>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
