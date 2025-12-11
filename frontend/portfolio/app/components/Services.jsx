import Image from "next/image";
import { assets, serviceData } from "../../assets/assets";

const Services = () => {
  return (
    <div
      id="services"
      className="flex w-full scroll-mt-20 flex-col px-[12%] py-10"
    >
      <h2 className="font-Ovo text-center text-5xl">What do i help with?</h2>

      <p className="font-Ovo mx-auto mt-5 mb-12 max-w-2xl text-center text-gray-700">
        I help people and businesses build clean, fast, and modern web
        applications. From frontend (React, JavaScript) to backend systems, I
        turn ideas into real products and use AI to work smarter and deliver
        better solutions.
      </p>
      <div className="grid-cols-auto my-10 grid gap-6">
        {serviceData.map(({ link, icon, description, title }, index) => (
          <div
            key={index}
            className="cursor-pointer rounded-lg border border-gray-400 bg-transparent px-8 py-12 duration-500 hover:translate-y-1 hover:bg-gray-100 hover:shadow-black"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="my-4 text-lg text-gray-700">{title}</h3>
            <p className="loading-5 text-sm text-gray-600">{description}</p>
            <a href={link} className="mt-5 flex items-center gap-2 text-sm">
              Read more{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
