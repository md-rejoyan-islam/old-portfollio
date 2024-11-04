import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse md:flex-row gap-4 items-center justify-between container py-5">
      <div>
        <p>
          &copy; Developer Portfolio by{" "}
          <span className="text-[#64ffda]">Md.Rejoyan Islam</span>
        </p>
      </div>
      <div>
        <ul className="flex gap-4 items-center">
          <li>
            <FaGithubSquare
              className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
              title="GitHub"
            />
          </li>
          <li>
            <FaLinkedin
              className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
              title="LinkedIn"
            />
          </li>
          <li>
            <FaFacebookSquare
              className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
              title="Facebook"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}
