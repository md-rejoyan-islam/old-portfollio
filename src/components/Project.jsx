import SingleProject from "./SingleProject";

export default function Project() {
  return (
    <div className="my-20">
      <div className="text-center pb-10">
        <h2 className="text-white text-3xl font-semibold my-2">
          Other Noteworthy Projects
        </h2>
        <button className="my-2"> view the archive</button>
      </div>
      <div>
        <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          <SingleProject
            title="KIN, A Voluntary Organization"
            github="www.github.com"
            live="kinsust.org"
            description="A voluntary website. Building using Next.js, tailwind CSS and for state menagement using Redux."
            keys={["Next.js", "Redux", "Tailwind"]}
          />
          <SingleProject />
          <SingleProject />
          <SingleProject />
          <SingleProject />
          <SingleProject />
          <SingleProject />
          <SingleProject />
          <SingleProject />
        </ul>
      </div>
    </div>
  );
}
