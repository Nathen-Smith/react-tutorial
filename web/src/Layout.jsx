import Experience from "./Experience";
// import SkillsBar from "./SkillsBar";
import SkillsIcons from "./SkillsIcons";
import Projects from "./Projects";
import { navIconLinks } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";

const Layout = () => {
  const isNotMobile = useMediaQuery({ query: "(min-width: 640px)" });

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 h-screen">
        <div>
          <div className="text-9xl text-black dark:text-white">Hi.</div>
          <div className="text-3xl text-black dark:text-white">
            I'm Nathen Smith.
          </div>
          <br />
          <div className="text-gray-600 text-gray-800 dark:text-gray-300 text-lg">
            <div>Computer Engineer at UIUC.</div>
            <div>Experienced Full Stack Developer.</div>
            <div>React, Python, and TypeScript Enthusiast.</div>
            <div>Badminton Player.</div>
          </div>
          <br />
          <a
            href="#about"
            className="btn dark:bg-white text-white dark:text-black bg-blue-500 px-3 py-2 rounded-md btn-sm sm:hidden font-bold text-sm"
          >
            MORE ABOUT ME
          </a>
        </div>
        <img
          src="/assets/me.jpg"
          alt="portrait"
          className="rounded-full w-3/4 lg:w-1/2 mt-6"
        />
      </div>

      {isNotMobile ? (
        <div id="about" className="scroll-mt-16 mb-2">
          <div className="text-center text-4xl mb-2">about</div>
          <div className="text-lg mb-2">
            I am a Senior studying Computer Engineering at the University of
            Illinois at Urbana-Champaign. Detail-oriented software developer
            where I enjoy fostering a positive development environment,
            designing scalable solutions and ensuring responsive, intuitive user
            experiences.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-16">
            <Experience />
            {/* <SkillsBar /> */}
            <SkillsIcons />
          </div>
        </div>
      ) : (
        <div>
          <div id="about" className="scroll-mt-16 mb-2">
            <div className="text-center text-4xl">about</div>
            <div className="text-lg">
              I am a Senior studying Computer Engineering at the University of
              Illinois at Urbana-Champaign. Detail-oriented software developer
              where I enjoy fostering a positive development environment,
              designing scalable solutions and ensuring responsive, intuitive
              user experiences.
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-16">
            <Experience />
            {/* <SkillsBar /> */}
            <SkillsIcons />
          </div>
        </div>
      )}

      <Projects />

      <div id="contact" className="scroll-mt-16 mb-2">
        <div className="text-center text-4xl mb-2">get in touch!</div>
        <div className="flex flex-row space-x-10 items-center justify-center">
          {navIconLinks.map((item) => (
            <a href={item.link} key={item.link} className="block w-100">
              <FontAwesomeIcon
                icon={item.icon}
                style={{ height: "100px", width: "100px" }}
                className="mx-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
