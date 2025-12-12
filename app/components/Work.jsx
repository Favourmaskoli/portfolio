import { assets, workData } from "../../assets/assets";
import Image from "next/image";

const Work = () => {
  return (
    <div id="work" className="flex w-full scroll-mt-20 flex-col px-[12%] py-10">
      <h4 className="font-Ovo mb-2 text-center text-lg">My portfolio</h4>
      <h2 className="font-Ovo text-center text-5xl">My latest work</h2>

      <p className="font-Ovo mx-auto mt-5 mb-12 max-w-2xl text-center text-gray-700">
        Passionate software engineer with experience in building scalable web
        applications, specializing in JavaScript, React, and backend
        technologies. Dedicated to writing clean, efficient code and
        continuously learning new tools and frameworks.
      </p>
      <div className="grid-cols-auto my-10 grid gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="group relative aspect-square cursor-pointer rounded-lg bg-cover bg-no-repeat"
          >
            <div className="absolute bottom-5 left-1/2 flex w-10/12 -translate-x-1/2 items-center rounded-md bg-white px-5 py-3 duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="flex aspect-square w-9 items-center justify-center rounded-full border border-black shadow-[2px_2px_0_#000] transition group-hover:bg-lime-300">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        className="test-gray-700 hover:bg-light-hover mx-auto my-20 flex w-max items-center justify-center gap-2 rounded-full border-[0.5px] border-gray-700 px-10 py-3 duration-500"
      >
        Show more{" "}
        <Image src={assets.right_arrow_bold} alt="show more" className="w-4" />
      </a>
    </div>
  );
};

export default Work;
