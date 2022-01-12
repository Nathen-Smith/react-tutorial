import { InView } from "react-intersection-observer";
import { skills } from "./constants";

const Skills = () => {
  return (
    <div id="skills" className="scroll-mt-16">
      <div className="text-center text-4xl">skills</div>
      <InView triggerOnce={true}>
        {({ ref, inView }) => (
          <div className="rounded-md mx-10 sm:mx-0" ref={ref}>
            {skills.map(({ name, textColor, backgroundColor, percentage }) => (
              <div key={name} className="skillbar rounded-md shadow-md">
                <div
                  className="skillbar-title pl-3 font-medium rounded-md"
                  style={
                    inView
                      ? {
                          backgroundColor,
                          transition: "width 2.6s",
                          width: percentage,
                        }
                      : { backgroundColor, width: "0" }
                  }
                >
                  <span style={{ color: textColor }}>{name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </InView>
    </div>
  );
};

export default Skills;
