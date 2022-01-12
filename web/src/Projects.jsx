import { InView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const Projects = () => {
  const isNotMobile = useMediaQuery({ query: "(min-width: 640px)" });

  return (
    <div id="portfolio" className="scroll-mt-16">
      <div className="text-center text-4xl">work i'm proud of</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 mx-10 sm:mx-0">
        <InView triggerOnce={true}>
          {({ ref, inView }) => (
            <img
              ref={ref}
              src="/assets/childdevtracker.jpeg"
              className="shadow-md"
              style={
                !isNotMobile
                  ? inView
                    ? {
                        marginLeft: "0px",
                        transition: "margin-left 0.6s",
                      }
                    : {
                        marginLeft: "400px",
                      }
                  : {}
              }
              alt="childdevtracker"
            />
          )}
        </InView>

        <video autoPlay muted loop>
          <source src="/assets/fpga_mario_nes.mov" type="video/mp4" />
        </video>

        <video autoPlay muted loop>
          <source src="/assets/databoard.mov" type="video/mp4" />
        </video>

        <img
          src="/assets/marvelapp.jpeg"
          className="shadow-md"
          alt="marvelapiapp"
        />

        <img
          src="/assets/hippocampus.jpg"
          className="shadow-md"
          alt="hippocampus"
        />

        <img
          src="/assets/twitterdata.jpg"
          className="shadow-md"
          alt="twitterdata"
        />
      </div>
    </div>
  );
};

export default Projects;
