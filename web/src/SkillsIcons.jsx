import { skillIcons } from "./constants";

const SkillsIcons = () => {
  return (
    <div id="skills" className="scroll-mt-16 mx-auto">
      <div className="text-center text-4xl">skills</div>
      <div className="grid grid-cols-3 mx-auto gap-4 gap-x-10 lg:gap-x-20 sm:gap-10">
        {skillIcons.map((icon) => (
          <div key={icon.src}>
            <img
              src={icon.src}
              alt={icon.alt}
              className="block w-20 max-h-20 block"
              style={
                icon.darkMode &&
                (localStorage.theme === "dark" ||
                  (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches))
                  ? {
                      filter: "brightness(0) saturate(100%) invert(1)",
                    }
                  : {}
              }
            />
            <div className="text-center text-sm font-medium mt-2">
              {icon.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsIcons;
