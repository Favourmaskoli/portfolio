import Image from "next/image";
import Link from "next/link";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    // Base Header Container: Height adjusts on mobile (py-10) and is fixed on desktop (md:h-96)
    <header className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900 py-10 text-white md:py-0">
      {/* Background Gradient & Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-80"
        style={{
          background:
            "linear-gradient(90deg, #1e3a8a 0%, #4f46e5 50%, #7c3aed 100%)",
        }}
      >
        {/* Optional: Add a subtle pattern like the one in the image */}
        <div className="absolute inset-0 bg-[url('/path/to/subtle-hex-pattern.svg')] opacity-20"></div>
      </div>

      {/* Content Wrapper: Contains Image and Text/Links */}
      {/* Key Change: Separating the image container helps control vertical spacing on mobile */}
      <div className="relative z-10 mx-auto flex w-11/12 max-w-5xl flex-col items-center p-4 md:flex-row md:justify-between md:p-12">
        {/* Profile Image Container: Placed first so it appears above the text on mobile (flex-col default) */}
        <div className="mb-6 shrink-0 md:mb-0 md:order-2">
          {" "}
          {/* md:order-2 pushes it to the right on desktop */}
          <Image
            src={assets.favprofile}
            alt="Favour Maskoli"
            // Image size and border: h-32/w-32 on mobile, h-56/w-56 on desktop
            className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg md:h-56 md:w-56"
            width={224}
            height={224}
          />
        </div>

        {/* Left Side: Text and Links Container */}
        <div className="flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          {/* Developer Icon and Name/Title */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* <span className="text-2xl md:text-4xl">
              <svg
                className="h-6 w-6 text-blue-400 md:h-8 md:w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 1L1 12h3l3-3h4l-3 5h4l1-3h4l-3 5h4l3-3h3L12 1zm0 2.293L19 10.5h-2l-3-3h-4l3 5h-4l-1 3h-4l3-5h-4L5 10.5H3L12 3.293z" />
                <path
                  fillRule="evenodd"
                  d="M10 17a2 2 0 100 4 2 2 0 000-4zM16 17a2 2 0 100 4 2 2 0 000-4zM13 17a2 2 0 100 4 2 2 0 000-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span> */}
            <h1 className="text-3xl font-bold uppercase tracking-wider md:text-5xl">
              FAVOUR MASKOLI
            </h1>
          </div>

          <h2 className="mt-1 text-lg font-light tracking-widest text-blue-300 md:text-2xl">
            FULLSTACK DEVELOPER
          </h2>

          {/* Navigation Buttons: flex-wrap ensures buttons wrap to the next line on narrow screens */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start md:gap-4">
            <Link
              href="#work"
              className="rounded-full bg-blue-500 px-4 py-1.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600"
            >
              PROJECTS
            </Link>

            <Link
              href="#about"
              className="rounded-full bg-green-500 px-4 py-1.5 text-sm font-semibold text-white transition duration-300 hover:bg-green-600"
            >
              ABOUT ME
            </Link>

            <Link
              href="#contact"
              className="rounded-full bg-orange-500 px-4 py-1.5 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600"
            >
              CONTACT
            </Link>
          </div>

          {/* Social Links: flex-wrap ensures links wrap to the next line on narrow screens */}
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-gray-300 md:justify-start md:gap-4 md:text-sm">
            <a
              href="https://github.com/Favourmaskoli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <span className="mr-1">🔗</span> github.com/Favourmaskoli
            </a>
            <a
              href="https://linkedin.com/in/Favourmaskoli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <span className="mr-1">in</span> linkedin.com/in/Favourmaskoli
            </a>
            <a
              href="https://x.com/favourmaskoli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <div className="flex items-center gap-2">
                <Image src={assets.x_icon} alt="X icon" className="w-3 h-3" />
                <span>x.com/favourmaskoli</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
