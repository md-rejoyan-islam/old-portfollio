export default function SingleProject({
  title,
  github,
  live,
  description,
  keys,
}) {
  return (
    <li className="flex flex-col justify-between project-card rounded-md bg-[#112240] shadow-lg hover:-translate-y-2 transition:translate duration-300">
      <div className=" flex justify-center -translate-y-[1px] top-bar">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full"></div>
        </div>
      </div>
      <div className="project-inner py-10 px-8  flex-1">
        <header>
          <div className="project-top flex justify-between gap-4 pb-6 ">
            <div className="folder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-folder h-6 sm:h-8 w-8 sm:w-8 text-[#64ffda]"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="project-links flex gap-3 items-center">
              <a
                href={`https://${live}` || "https://www.google.com"}
                aria-label="External Link"
                className="external"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hover:text-[#64ffda] text-[#a8b2d1] feather feather-external-link sm:h-6 sm:w-6 h-5 w-6"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <a
                href={`https://${github}` || "https://www.github.com"}
                aria-label="GitHub Link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hover:text-[#64ffda] feather feather-github sm:h-6 sm:w-6 h-5 w-6 text-[#a8b2d1] "
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          <h3 className="project-title">
            <a
              href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ccd6f6] block pb-6 font-semibold text-xl"
            >
              {title || "Integrating Algolia Search with WordPress Multisite"}
            </a>
          </h3>
          <div className="project-description text-[#a8b2d1] font-medium">
            <p>
              {description ||
                "Building a custom multisite compatible WordPress plugin to build global search with Algolia"}
            </p>
          </div>
        </header>
        <footer className="text-[#8892b0] pt-8">
          <ul className="project-tech-list flex gap-4 items-center flex-wrap">
            {keys?.map((tech, index) => (
              <li
                key={index}
                className="project-tech text-[#8892b0] font-medium"
              >
                {tech}
              </li>
            ))}
            {!keys && (
              <>
                <li>Algolia</li>
                <li>WordPress</li>
                <li>PHP</li>
              </>
            )}
          </ul>
        </footer>
      </div>
      <div className=" w-full bottom-bar flex justify-center -translate-y-[0px] ">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent  w-full"></div>
        </div>
      </div>
    </li>
  );
}
