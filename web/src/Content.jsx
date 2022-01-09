import { experience } from "./constants";

const Content = () => {
  return (
    <div className="max-w-7xl mx-auto md:mx-10">
      <div className="h-screen">
        <p className="text-9xl dark:text-white">Hi.</p>
        <p className="text-3xl dark:text-white">I'm Nathen Smith.</p>
        <br />
        <p className="">Computer Engineer at UIUC</p>
        <p className="">Experienced Full Stack Developer</p>
        <p className="">React, Python, and TypeScript Enthusiast</p>
        <p className="">Badminton Player</p>
        <br />

        <a href="#about" className="btn btn-light btn-sm sm:hidden">
          <span style={{ fontWeight: 600 }}>MORE ABOUT ME</span>
        </a>
      </div>

      <div id="about" className="scroll-mt-16">
        <div className="text-center text-4xl">about</div>I am a Senior studying
        Computer Engineering at the University of Illinois at Urbana-Champaign.
        Detail-oriented software developer where I enjoy fostering a positive
        development environment, designing scalable solutions and ensuring
        responsive, intuitive user experiences.
      </div>

      <div id="experience" className="scroll-mt-16">
        <div className="text-center text-4xl">experience</div>
        {experience.map(({ title, date, description }) => {
          // if (type === "lg") {
          //   return (
          //     <div className="flow-root pb-2 mx-1" key={title}>
          //       <p className="float-left text-gray-200 text-xl">{title}</p>
          //       <p className="float-right text-gray-300 text-xl">{date}</p>
          //       <br />
          //       <p className="float-right text-gray-400 text-lg">{description}</p>
          //     </div>
          //   );
          // }
          return (
            <div className="flow-root" key={title}>
              <p className="text-lg">{title}</p>
              <p className="text-lg">{date}</p>
              <p className="float-right text-gray-400">{description}</p>
            </div>
          );
        })}
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div> */}
      <br />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div style={{ height: "100vh" }}></div>

      <div id="description">
        Description start
        <div>testtesttest </div>
      </div>
      <br />
      <br />
      <div>Hiya</div>
    </div>
  );
};

export default Content;
