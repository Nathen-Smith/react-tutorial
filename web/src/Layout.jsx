import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";

const Layout = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="h-screen">
        <div className="text-9xl dark:text-white">Hi.</div>
        <div className="text-3xl dark:text-white">I'm Nathen Smith.</div>
        <br />
        <div className="text-gray-600 dark:text-gray-300">
          <div>Computer Engineer at UIUC</div>
          <div>Experienced Full Stack Developer</div>
          <div>React, Python, and TypeScript Enthusiast</div>
          <div>Badminton Player</div>
        </div>
        <br />
        <a
          href="#about"
          className="btn dark:bg-white dark:text-black bg-blue-500 text-white px-3 py-2 rounded-md btn-sm sm:hidden font-bold text-sm"
        >
          MORE ABOUT ME
        </a>
      </div>

      <div
        id="about"
        className="scroll-mt-16 dark:bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-900"
      >
        <div className="text-center text-4xl">about</div>
        <div>
          I am a Senior studying Computer Engineering at the University of
          Illinois at Urbana-Champaign. Detail-oriented software developer where
          I enjoy fostering a positive development environment, designing
          scalable solutions and ensuring responsive, intuitive user
          experiences.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
        <Experience />
        <Skills />
      </div>

      <Projects />

      <div
        id="contact"
        className="scroll-mt-16 dark:bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-900"
      >
        <div className="text-center text-4xl">get in touch!</div>
      </div>

      {/* <footer className="bg-gray-400">Made by Nathen Smith</footer> */}
    </div>
  );
};

export default Layout;
