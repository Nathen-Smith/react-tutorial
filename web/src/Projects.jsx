const Projects = () => {
  return (
    <div
      id="portfolio"
      className="scroll-mt-16 dark:bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-900"
    >
      <div className="text-center text-4xl">work i'm proud of</div>

      <div className="grid grid-cols-3">
        <img src="/assets/childdevtracker.png" />

        <video autoPlay muted loop>
          <source src="/assets/fpga_mario_nes.mp4" type="video/mp4" />
        </video>

        <video autoPlay muted loop>
          <source src="/assets/databoard.mp4" type="video/mp4" />
        </video>

        <img src="/assets/marvelapp.png" />

        <img src="/assets/hippocampus.jpg" />

        <img src="/assets/twitterdata.jpg" />
      </div>
    </div>
  );
};

export default Projects;
