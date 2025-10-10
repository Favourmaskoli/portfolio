import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div className="mx-auto flex h-screen w-11/12 max-w-3xl flex-col items-center justify-center gap-4 text-center">
      <div>
        <Image src={assets.profile_img} alt="" className="w-32 rounded-full" />
      </div>
      <h3 className="font-ovo mb-3 flex items-end gap-2 text-xl md:text-2xl">
        Hi! I'm Favour Maskoli{" "}
        <Image src={assets.hand_icon} alt="" className="w-4" />
      </h3>
      <h1 className="font-ovo text-3xl sm:text-6xl lg:text-[66px]">
        frontend web developer based Nigeria
      </h1>
      <p className="font-Ovo mx-auto max-w-2xl">
        i am a fullstack developer with 10 years experience
      </p>
      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full border border-white bg-black px-10 py-3 text-black text-white"
        >
          contact me
          <span className="w-4">
            <Image
              src={assets.right_arrow_white}
              alt="Right arrow icon"
              width={16}
              height={16}
            />
          </span>
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="bg-dark flex items-center gap-2 rounded-full border border-gray-500 px-10 py-3"
        >
          my resume
          <span className="w-4">
            <Image
              src={assets.download_icon}
              alt="Download icon"
              width={16}
              height={16}
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
