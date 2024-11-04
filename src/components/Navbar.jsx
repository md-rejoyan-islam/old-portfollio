import { useRef, useState } from "react";
import { useEffect } from "react";
import { RiMenu3Line } from "react-icons/ri";

export default function Navbar() {
  const [isSticky, setSticky] = useState(false);

  const [oldScrollY, setOldScrollY] = useState(0);
  useEffect(() => {
    //   let oldScrollY = window.scrollY;
    setOldScrollY(Math.floor(window.scrollY));

    const handleScroll = () => {
      if (window.scrollY === 0) {
        return setSticky(false);
      }
      oldScrollY > window.scrollY ? setSticky(true) : setSticky(false);
      setOldScrollY(Math.floor(window.scrollY));
      //   oldScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [oldScrollY]);

  // mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileRef = useRef(null);

  // handle mobile menu
  const handleMobileMenu = () => {
    const data = document.querySelector(".index-module_type__E-SaG");
    if (!isMobileMenuOpen) {
      document.body.style.minHeight = "100vh";
      document.body.style.overflow = "hidden";
      data.style.display = "none";
    } else {
      document.body.style.minHeight = "auto";
      document.body.style.overflow = "auto";
      data.style.display = "block";
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`text-[#ccd6f6] z-[1000]   h-[70px]  duration-500 ease-in-out transition-transform   ${
        isSticky
          ? "shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]  sticky top-0 bg-[#4854650e]   translate-y-0 backdrop-blur-lg"
          : `${
              oldScrollY < 70
                ? "translate-y-0 shadow-none"
                : "-translate-y-full"
            } shadow-none`
      }`}
    >
      <div
        className="flex items-center justify-between container mx-auto h-full"
        id="up-btn"
      >
        <span>
          <svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 84 96"
            className="w-10 h-10  "
          >
            <title>Logo</title>
            <g transform="translate(-8.000000, -2.000000)">
              <g transform="translate(11.000000, 5.000000)">
                <polygon
                  id="Shape"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="39 0 0 22 0 67 39 90 78 68 78 23"
                ></polygon>
                <path
                  d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
                  fill="currentColor"
                ></path>
              </g>
            </g>
          </svg>
        </span>
        <div className="">
          {/* for medium and large screens  */}
          <nav>
            <ul className="hidden md:flex  gap-10 justify-center items-center">
              <li className="hover:text-[#64ffda]">
                <a href="">About</a>
              </li>
              <li>
                <a href="" className="hover:text-[#64ffda]">
                  Experience
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#64ffda]">
                  Work
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#64ffda]">
                  Contact
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#64ffda]">
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <button className="md:hidden" onClick={handleMobileMenu}>
            <RiMenu3Line className="text-3xl border-zinc-700 rounded-md border p-[5px] bg-[#24223f47]" />
          </button>
          {/* for small screens   */}
          {isMobileMenuOpen && (
            <nav
              className="absolute top-0 left-0 min-h-screen w-full bg-[#22c55e1e] z-[1000] flex justify-end  backdrop-blur-[3px] "
              onClick={() => {
                !mobileRef.current?.contains(event.target) &&
                  handleMobileMenu();
              }}
            >
              <ul
                className="flex md:hidden px-6 flex-col gap-5 items-center justify-start w-[250px] bg-[#24223f]"
                ref={mobileRef}
              >
                <li className="my-6 text-right w-full text-xl">
                  <button onClick={handleMobileMenu}>X</button>
                </li>
                <li className="hover:text-[#64ffda]">
                  <a href="">About</a>
                </li>
                <li>
                  <a href="" className="hover:text-[#64ffda]">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-[#64ffda]">
                    Work
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-[#64ffda]">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-[#64ffda]">
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
