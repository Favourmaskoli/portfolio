import Image from "next/image";
import { assets } from "@/assets/assets";

function Footer() {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2" />
      </div>
      <div className="w-max flex items-center mx-auto gap-2">
        <Image src={assets.mail_icon} alt="" className="w-6" />
        wisefav6@gmail.com
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Favour. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/Favourmaskoli">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/Favourmaskoli">
              x
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/Favourmaskoli">
              youtube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
