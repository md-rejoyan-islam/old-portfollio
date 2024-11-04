import Typing from "./Typing";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { FaUserNinja } from "react-icons/fa";
import Button from "./Button";

export default function Name() {
  return (
    <div className="container mt-16 mb-32 px-0">
      <h2 className="text-[#64ffda] text-lg">Hi, my name is </h2>
      <h2 className="  text-[35px] sm:text-[45px] md:text-[55px] lg:text-[60px] font-semibold text-[#ccd6f6]">
        Md. Rejoyan Islam <br />{" "}
        <span className="text-[#8892b0]">I build things for the web.</span>
      </h2>
      <Typing />

      <div className="lg:w-2/3 pt-6">
        <p className="text-[#8892b0] text-[17px] sm:text-lg">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
      </div>
      <div className="social-links">
        <ul className="flex gap-4 items-center mt-10">
          <li>
            <FaGithubSquare
              className="text-4xl hover:fill-[#64ffda] fill-[#ff5fcc]  hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
              title="GitHub"
            />
          </li>
          <li>
            <FaLinkedin
              className="text-4xl hover:fill-[#64ffda] fill-[#ff5fcc]  hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
              title="LinkedIn"
            />
          </li>
          <li>
            <FaFacebookSquare
              className="text-4xl hover:fill-[#64ffda] fill-[#ff5fcc]  hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
              title="Facebook"
            />
          </li>
        </ul>
      </div>
      <div className="resume flex gap-4 items-center py-4">
        <Button>
          <button className="bg-[#0a192f] hover:gap-4  transition-all rounded-full uppercase py-2  px-3  flex gap-2 items-center">
            <span>Contact me</span>
            <FaUserNinja />
          </button>
        </Button>
        <Button>
          <button className="bg-[#0a192f] hover:gap-4  transition-all rounded-full uppercase py-2  px-3  flex gap-2 items-center">
            <span>Get resume</span>
            <MdFileDownload />
          </button>
        </Button>
      </div>
    </div>
  );
}
