import { experience } from "./constants";

const Experience = () => {
  return (
    <div id="experience" className="scroll-mt-16">
      <div className="text-center text-4xl">experience</div>
      {experience.map(({ title, date, description }) => {
        return (
          <div className="flow-root" key={title}>
            <p className="text-lg md:float-left md:text-xl">{title}</p>
            <p className="text-lg md:float-right md:text-xl">{date}</p>
            <p className="float-right dark:text-gray-400 text-gray-500 md:text-lg">
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
