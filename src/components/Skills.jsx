import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiPrisma } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiSequelize } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { FaSass } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { FaCpanel } from "react-icons/fa6";
import { SiPostgresql } from "react-icons/si";
export default function Skills() {
  return (
    <div className="my-10">
      <header className="header">
        <h2 className="text-[#54d5bc] text-2xl font-semibold text-center">
          Skills
        </h2>
      </header>
      <div className="body grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 ">
        <div className="card">
          <h2 className="text-2xl font-semibold py-4 text-center">Languages</h2>
          <div className="card-body bg-[#142f40ac] py-6 px-2 rounded-md">
            <ul className="grid grid-cols-4 gap-8 items-center justify-items-center">
              <li>
                <IoLogoHtml5
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="HTML"
                />
              </li>
              <li>
                <FaCss3Alt
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="CSS"
                />
              </li>
              <li>
                <IoLogoJavascript
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="JavaScript"
                />
              </li>
              <li className="flex  items-center gap-2">
                <FaPython
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="Python"
                />
              </li>
              <li className="flex  items-center gap-2">
                <BsFiletypeSql
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="SQL"
                />
              </li>
              <li>
                <SiTypescript
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="TypeScript"
                />
              </li>
              <li>
                <FaSass
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="SASS"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <h2 className="text-2xl font-semibold py-4 text-center">
            Library & Framework
          </h2>
          <div className="card-body bg-[#142f40ac] py-6 px-2 rounded-md">
            <ul className="grid grid-cols-4 gap-8 items-center justify-items-center">
              <li className="flex  items-center gap-2">
                <FaReact
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="REACT"
                />
              </li>
              <li className="flex  items-center gap-2">
                <SiTailwindcss
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="Tailwind CSS"
                />
              </li>
              <li className="flex  items-center gap-2">
                <FaBootstrap
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="Bootstrap"
                />
              </li>
              <li className="flex  items-center gap-2">
                <TbBrandNextjs
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="Next.js"
                />
              </li>
              <li className="flex  items-center gap-2">
                <SiExpress
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="Express.js"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <h2 className="text-2xl font-semibold py-4 text-center">
            Database & ORM
          </h2>
          <div className="card-body bg-[#142f40ac] py-6 px-2 rounded-md">
            <ul className="grid grid-cols-4 gap-8 items-center justify-items-center">
              <li className="flex  items-center gap-2">
                <GrMysql
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="MySQL"
                />
              </li>
              <li className="flex  items-center gap-2">
                <SiMongodb
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="MongoDB"
                />
              </li>
              <li className="flex  items-center gap-2">
                <SiPrisma
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="Prisma"
                />
              </li>
              <li className="flex  items-center gap-2">
                <SiSequelize
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="Sequelize"
                />
              </li>
              <li className="flex  items-center gap-2">
                <SiPostgresql
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="PostgreSQL"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <h2 className="text-2xl font-semibold py-4 text-center">
            Tools & Others
          </h2>
          <div className="card-body bg-[#142f40ac] py-6 px-2 rounded-md">
            <ul className="grid grid-cols-4 gap-8 items-center justify-items-center">
              <li className="flex  items-center gap-2">
                <FaGitSquare
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="Git"
                />
              </li>

              <li className="flex  items-center gap-2">
                <SiPostman
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="Postman"
                />
              </li>

              <li className="flex  items-center gap-2">
                <FaGithub
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="GitHub"
                />
              </li>

              <li>
                <TbBrandVscode
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="VS Code"
                />
              </li>
              <li>
                <SiFirebase
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="Firebase"
                />
              </li>
              <li>
                <FaNpm
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="NPM"
                />
              </li>
              <li>
                <FaCpanel
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="CPanel"
                />
              </li>
              <li>
                <FaNodeJs
                  className="text-4xl hover:fill-[#ff5fcc] fill-[#64ffda] bg-[#ffffff16] hover:scale-110 transition-all duration-150 cursor-pointer p-1 rounded-sm "
                  title="Node.js"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
