import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";

const About = () => {
  return (
    <div
      id="about"
      className="flex w-full scroll-mt-20 flex-col px-[12%] py-10"
    >
      <h4 className="font-Ovo mb-2 text-center text-lg">Introduction</h4>
      <h2 className="font-Ovo text-center text-5xl">About me</h2>

      <div className="my-20 flex w-full flex-col items-center gap-20 lg:flex-row">
        {/* Profile Image */}
        <div className="w-64">
          <Image
            src={assets.user_image}
            alt="Profile"
            className="w-full rounded-3xl"
          />
        </div>

        {/* About Text + Info + Tools */}
        <div className="flex-1">
          <p className="font-Ovo mb-10 max-w-2xl text-gray-700">
            Passionate software engineer with experience in building scalable
            web applications, specializing in JavaScript, React, and backend
            technologies. Dedicated to writing clean, efficient code and
            continuously learning new tools and frameworks.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="hover:bg-lightHover cursor-pointer rounded-xl border-[0.5px] border-gray-400 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[4px_4px_0_#000]"
              >
                <Image src={icon} alt={title} className="mt-3 w-7" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </li>
            ))}
          </ul>

          {/* Tools Section */}
          <h4 className="font-Ovo my-6 text-gray-700">Tools I use</h4>

          <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="hover:bg-lightHover flex aspect-square w-20 cursor-pointer items-center justify-center rounded-xl border border-gray-400 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[4px_4px_0_#000] sm:w-24"
              >
                <Image
                  src={tool}
                  alt="Tool"
                  className="w-10 object-contain sm:w-16"
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
