// import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaDatabase, FaGithub, } from "react-icons/fa";
// import { TbApi } from "react-icons/tb";
// import { FaGithub } from "react-icons/fa";
// import { SiJavascript, SiFirebase, SiAmazonaws, SiGit, SiWordpress } from "react-icons/si";
// import { BiApi } from "react-icons/bi";
import ProfileCard from "./aboutcard";
import admin from '../asserts/admin.png'
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import linktree from "../../icon/icons8-right-24.png"
import SkillsSection from "./techSkill";
export default function About() {
  useEffect(() => {
    // let handleRedirect = (url) => {
    //   window.location.href = url;
    // };
    AOS.init();
  }, []);
  return (
    <section id="about" className="bg-gray-50 py-20 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/10 dark:to-pink-900/10 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto relative">
        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
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
              About Me
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
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* Objective */}
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="text-center"
            >
              <ProfileCard
                name="Othi Raja"
                title="Software Engineer"
                handle="OthiRaja"
                status="Online"
                contactText="Contact Me"
                avatarUrl={admin}
                showUserInfo={true}
                enableTilt={true}
                behindGradient={false}
                enableMobileTilt={true}
                onContactClick={() => window.open("https://www.linkedin.com/in/othi-raja/", "_blank")}
              />
              {/* <h3
                className="font-semibold text-[24px] text-black dark:text-white mb-4"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                My Objective
              </h3>
              <p
                className="text-[18px] leading-relaxed text-gray-700 "
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                I'm a passionate Computer Engineering student with knowledge in full-stack web development.
                With over <span className="font-semibold text-blue-600">1 year of hands-on experience</span>, I'm dedicated to creating
                innovative digital solutions that solve real-world problems.
              </p> */}
            </div>
            {/* Education */}
            {/* <div>
              <h3
                className="font-semibold text-[24px] text-black dark:text-white mb-4"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Education
              </h3>
              <div className="bg-white dark:bg-[#2A2A2A] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <h4 className="font-bold text-[20px] text-black dark:text-white mb-2">
                  SRM Institute of Science and Technology
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  Bachelor of Technology - Computer Science
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 dark:text-gray-400">Current Student</span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-black dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    GPA: 7.8/10
                  </span>
                </div>
              </div>
            </div> */}
            {/* Contact Info */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm"><MdEmail size={25} color="black" /></span>
                </div>
                <div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">Email</div>
                  <div className="text-black dark:text-white font-medium">othiraja64@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm"><TbDeviceMobileMessage size={25} color="black" /></span>
                </div>
                <div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">Phone</div>
                  <div className="text-black dark:text-white font-medium">+91 88257 22455</div>
                </div>
              </div>
            </div> */}
          </div>
          {/* Right Column - Skills Overview */}
          <div className="space-y-8">
            <div className=" p-8 rounded-3xl ">
              {/* <h3>About Me</h3> */}
              <p
                className="text-[16px] leading-relaxed text-gray-700 mb-6 text-justify"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                I'm a passionate Computer Engineering student with strong knowledge in full-stack web development.
                With over
                <span className="font-semibold text-blue-600"> 1 year of hands-on experience </span>,
                I specialize in building responsive user interfaces, scalable backend systems,
                and intelligent features powered by AI and machine learning.
                I enjoy turning ideas into real products, optimizing performance, and delivering smooth user experiences.
                I’m constantly learning new technologies and striving to grow as a developer while contributing to impactful projects.
              </p>
              {/* LinkedIn Button */}
              <button
                onClick={() => window.open('https://www.linkedin.com/in/othi-raja/', '_blank')}
                className="
    flex items-center underline
    text-gray-600 
    hover:text-gray-900 
    transition-all duration-300 
    hover:scale-x-[1.05] 
    cursor-pointer
  "
                style={{ background: "none", border: "none", outline: "none" }}
              >
                LinkedIn
                <img
                  src={linktree}
                  alt="icon"
                  style={{ height: "20px", paddingLeft: "10px" }}
                  className="opacity-70 hover:opacity-100 transition duration-300"
                />
              </button>
              {/* <h6 className="underline mb-4">Tech Stack</h6 > */}
              <div className="flex flex-wrap gap-4 justify-center">
                {/* {[
                  { name: "HTML", icon: <FaHtml5 className="text-3xl text-orange-500" />, ani: "fade-in", duration: "100" },
                  { name: "CSS", icon: <FaCss3Alt className="text-3xl text-blue-500" />, ani: "fade-in", duration: "150" },
                  { name: "React.js", icon: <FaReact className="text-3xl text-blue-400" />, ani: "fade-in", duration: "200" },
                  { name: "JavaScript", icon: <SiJavascript className="text-3xl text-yellow-400" />, ani: "fade-in", duration: "250" },
                  { name: "Node.js", icon: <FaNodeJs className="text-3xl text-green-500" />, ani: "fade-in", duration: "300" },
                  { name: "Python", icon: <FaPython className="text-3xl text-blue-600" />, ani: "fade-in", duration: "359" },
                  { name: "API Development", icon: <TbApi className="text-3xl text-purple-500" />, ani: "fade-in", duration: "400" },
                  { name: "SQL", icon: <FaDatabase className="text-3xl text-blue-600" />, ani: "fade-in", duration: "450" },
                  { name: "Firebase", icon: <SiFirebase className="text-3xl text-orange-500" />, ani: "fade-in", duration: "500" },
                  { name: "AWS", icon: <SiAmazonaws className="text-3xl text-orange-600" />, ani: "fade-in", duration: "550" },
                  { name: "Git", icon: <SiGit className="text-3xl text-orange-600" />, ani: "fade-in", duration: "600" },
                  { name: "GitHub", icon: <FaGithub className="text-3xl text-gray-800 dark:text-white" />, ani: "fade-in", duration: "650" },
                  { name: "WordPress", icon: <SiWordpress className="text-3xl text-blue-600" />, ani: "fade-in", duration: "700" }
                ].map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center space-y-2 " data-aos={skill.ani}
                    data-aos-duration={skill.duration}
                    data-aos-easing="ease-in-sine" >
                    <div>{skill.icon}</div>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
        <SkillsSection />
      </div>
    </section>
  );
}
