import React from "react";
import Image from "next/image";
import { assets, toolsData } from "../../assets/assets";

const About = ({ isDarkMode }) => {
  /* ---------------------- Skills With Icons ---------------------- */
  const skills = [
    { name: "HTML", level: 98, color: "bg-red-500", icon: assets.html_icon },
    { name: "CSS", level: 98, color: "bg-blue-500", icon: assets.css_icon },
    {
      name: "JavaScript",
      level: 98,
      color: "bg-yellow-400",
      icon: assets.javascript_icon,
    },
    { name: "React", level: 95, color: "bg-cyan-400", icon: assets.react_icon },
    {
      name: "Python",
      level: 90,
      color: "bg-green-500",
      icon: assets.python_icon,
    },
    {
      name: "Node.js",
      level: 96,
      color: "bg-green-700",
      icon: assets.node_icon,
    },
  ];

  /* ---------------------- Education Timeline ---------------------- */
  const education = [
    {
      year: "2022 — Present",
      title: "ALX Software Engineering Program",
      subtitle: "Specialization: Backend Engineering",
      description:
        "Completed core foundations in C, Python, JavaScript, system engineering & backend architecture.",
    },
    {
      year: "2025 — Present",
      title: "ALX Artificial Intelligence Career Essentials",
      subtitle: "AI, Machine Learning, Automation & Prompt Engineering",
      description:
        "Learning AI fundamentals, applied ML, LLM workflows, and building real AI-powered tools.",
    },
  ];

  return (
    <div
      id="about"
      className="w-full flex flex-col px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="font-Ovo mb-2 text-center text-lg">I am Favour</h4>
      <h2 className="font-Ovo text-center text-5xl">About Me</h2>

      <div className="my-20 flex flex-col lg:flex-row gap-20 items-center w-full">
        {/* ---------------------- Profile Image ---------------------- */}
        <div className="w-64">
          <Image
            src={assets.favprofile}
            alt="Profile"
            className="w-full rounded-3xl"
          />
        </div>

        {/* ---------------------- About Content ---------------------- */}
        <div className="flex-1">
          <p
            className={`font-Ovo mb-10 max-w-2xl ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Passionate software engineer with experience building scalable web
            applications, specializing in JavaScript, React, Python and backend
            technologies. I leverage AI to build smarter solutions and automate
            workflows, with the goal of making the world a better place.
          </p>

          {/* ---------------------- Skills Section ---------------------- */}
          <h2 className="font-Ovo text-3xl my-6">Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-col-5 gap-10 mb-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div className="relative w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                  {/* Background tint */}
                  <div
                    className={`absolute inset-0 rounded-full opacity-25 ${skill.color}`}
                  ></div>

                  {/* Icon */}
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 z-10"
                  />

                  {/* Percentage */}
                  <span className="absolute bottom-1 right-1 bg-black text-white text-[10px] px-1 py-[2px] rounded z-20">
                    {skill.level}%
                  </span>
                </div>

                {/* Title + Subtitle */}
                <h3 className="font-semibold mt-4">{skill.name}</h3>
                <p className="text-sm text-gray-500">Skilled & experienced</p>
              </div>
            ))}
          </div>

          {/* ---------------------- Education Timeline ---------------------- */}
          <h2 className="font-Ovo text-3xl mb-8">Education & Experience</h2>

          <div className="relative border-l-4 border-blue-500 pl-6 space-y-10">
            {education.map((item, index) => (
              <div key={index} className="relative">
                {/* Dot on the line */}
                <div className="absolute -left-3 top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-white"></div>

                <div
                  className={`p-5 rounded-xl shadow-md ${
                    isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100"
                  }`}
                >
                  <p className="text-sm font-semibold text-blue-600">
                    {item.year}
                  </p>
                  <h3 className="font-bold text-lg mt-1">{item.title}</h3>
                  <p className="text-sm italic text-gray-500">
                    {item.subtitle}
                  </p>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ---------------------- Tools ---------------------- */}
          <h2 className="font-Ovo text-3xl my-6">Tools</h2>

          <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="hover:bg-lightHover border border-gray-400 rounded-xl p-4 w-20 aspect-square flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0_#000]"
              >
                <Image
                  src={tool}
                  alt="Tool"
                  className="w-10 sm:w-16 object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
