import projects from "./data/Projects";
// bg - [#ac3c67];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-screen bg-[#453C67] flex justify-center items-center p-4 bg - [#ac3c67]">
      <div>
        <p className="font-bold inline border-b-4 border-[#5f4dff] component-title">
          Projects
        </p>
        <p className="py-4 component-caption">
          || These are some of my projects
        </p>
      </div>
      {/* container for icons */}
      <div className="w-full    text-center py-8">
        {projects.map((v, i) => {
          return (
            <div
              key={i}
              className={`min-h-[10rem] w-auto md:mx-0 mx-4 my-[20px] rounded-3xl hover:scale-110  md:border-none border  p-4
              transition-transform duration-300 flex flex-col ${
                i % 2 === 0 ? "md:items-start" : "md:items-end"
              }`}>
              <div className={`flex md:flex-row flex-col justify-evenly`}>
                <div
                  className={`flex 
                ${
                  i % 2 !== 0
                    ? "md:flex-row-reverse flex-col"
                    : "md:flex-row flex-col"
                }`}>
                  <div
                    className={`flex items-center
                ${
                  i % 2 !== 0
                    ? "md:flex-row-reverse flex-col"
                    : "md:flex-row flex-col"
                }`}>
                    <img
                      alt=""
                      className={`rounded-3xl w-[24rem]`}
                      src={`${v.backgroundImage}`}
                    />
                    <div className="mx-[7rem] flex flex-col items-center   h-min">
                      <h1
                        className={`md:flex hidden font-bold px-2  text-5xl
                        `}>
                        #{i + 1}
                      </h1>
                      <div className="flex flex-row md:my-0 my-4">
                        <a
                          className="rounded-md md:hover:bg-[#dc81a4] md:bg-inherit bg-[#dc81a4] md:text-base text-xl
                       hover:opacity-100 md:opacity-60 opacity-100 text-white font-bold h-min w-min mr-2 px-2 py-1"
                          href={`${v.link.download}`}>
                          Demo
                        </a>
                        <a
                          className="rounded-md md:hover:bg-[#dc81a4] md:bg-inherit bg-[#dc81a4] md:text-base text-xl
                       hover:opacity-100 md:opacity-60 opacity-100 text-white font-bold h-min w-min ml-2 px-2 py-1"
                          href={`${v.link.github}`}>
                          Github
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-medium text-md my-4">{v.description}</p>
              <div className="md:flex hidden">
                {v.tags?.map((tag, i) => {
                  return (
                    <p
                      key={i}
                      className="mx-2 rounded-lg bg-[#deaaad] cursor-pointer select-text selection:bg-none opacity-60
                       hover:opacity-100 px-2 py-1 text-black">
                      {tag}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
