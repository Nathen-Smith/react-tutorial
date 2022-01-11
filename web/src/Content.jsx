import { experience } from "./constants";

const Content = () => {
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

      <div id="about" className="scroll-mt-16">
        <div className="text-center text-4xl">about</div>
        <div>
          I am a Senior studying Computer Engineering at the University of
          Illinois at Urbana-Champaign. Detail-oriented software developer where
          I enjoy fostering a positive development environment, designing
          scalable solutions and ensuring responsive, intuitive user
          experiences.
        </div>
      </div>

      <div id="experience" className="scroll-mt-16">
        <div className="text-center text-4xl">experience</div>
        {experience.map(({ title, date, description }) => {
          return (
            <div className="flow-root" key={title}>
              <p className="text-lg sm:float-left sm:text-xl">{title}</p>
              <p className="text-lg sm:float-right sm:text-xl">{date}</p>
              <p className="float-right dark:text-gray-400 text-gray-500 sm:text-lg">
                {description}
              </p>
            </div>
          );
        })}
      </div>

      <div id="portfolio" className="scroll-mt-16">
        <div className="text-center text-4xl">work i'm proud of</div>
        <video autoPlay muted loop>
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>
      </div>

      <div id="contact" className="scroll-mt-16">
        <div className="text-center text-4xl">get in touch!</div>
      </div>
    </div>
  );
};

export default Content;
