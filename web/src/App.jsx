import React, { useState, useEffect, useCallback, useReducer } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faMoon } from "@fortawesome/free-regular-svg-icons";
import Content from "./Content";
import "./App.scss";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const App = () => {
  const [navLinks, setNavLinks] = useState([
    { name: "Nathen", to: "#", active: true },
    { name: "Search", to: "#search", active: false },
    { name: "Gallery", to: "#gallery", active: false },
    { name: "Description", to: "#description", active: false },
    { name: "Experience", to: "#experience", active: false },
  ]);

  const updateFieldChanged = useCallback(
    (index) => {
      let newArr = [...navLinks]; // copying the old array
      newArr[index].active = true; // setting element at this index true
      newArr.forEach((_, idx) => {
        idx !== index && (newArr[idx].active = false);
      });

      setNavLinks(newArr);
    },
    [navLinks]
  );

  useEffect(() => {
    window.onscroll = () => {
      let navLinksLen = navLinks.length;
      for (let i = 1; i < navLinksLen; i++) {
        if (
          document
            .getElementById(navLinks[i].to.slice(1))
            ?.getBoundingClientRect().top < window.innerHeight
        ) {
          updateFieldChanged(i);
          return;
        }
        updateFieldChanged(0);
      }
    };
  }, [navLinks, updateFieldChanged]);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function reducer(_, themeColor) {
    switch (themeColor) {
      case "light":
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
        return "light";
      case "dark":
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        return "dark";
      default:
        localStorage.removeItem("theme");
        return "dark";
    }
  }

  const [theme, dispatch] = useReducer(reducer, localStorage.theme || "dark");

  return (
    <div className="dark:bg-zinc-800 dark:text-gray-300 transition-colors ease-in-out">
      <Disclosure
        as="nav"
        className="bg-gray-100 dark:bg-neutral-800 h-16 sticky top-0 z-50 shadow-md"
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block sm">
                    <div className="flex space-x-4 ">
                      {navLinks.map((item) => (
                        <span key={item.to}>
                          <a
                            id={item.to}
                            key={item.name}
                            href={item.to}
                            className={classNames(
                              item.active
                                ? "text-black dark:text-white"
                                : "text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-gray-100",
                              "h-16 text-sm font-medium text-center flex justify-center items-center transition-colors ease-in-out"
                            )}
                          >
                            {item.name}
                          </a>

                          <div
                            className={`NavActiveBar ${
                              item.active ? "opacity-100" : "opacity-0"
                            } relative h-0.5 bg-blue-600 dark:bg-indigo-300 -top-0.5 rounded-t-3xl transition-opacity ease-in-out`}
                          ></div>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="ml-3 relative text-sm font-small flex flex-row justify-center space-x-1">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2x"
                      style={{ color: "red" }}
                    />
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    <div className="nav-icon">
                      {theme === "light" ? (
                        <SunIcon
                          onClick={() => dispatch("dark")}
                          className="h-7 hover:text-white transition-colors ease-in-out cursor-pointer"
                        />
                      ) : (
                        <MoonIcon
                          onClick={() => dispatch("light")}
                          className="h-7 hover:text-white transition-colors ease-in-out cursor-pointer"
                        />
                      )}
                    </div>
                    <div className="nav-icon">
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white focus:outline-none h-7">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-7" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-7"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden z-50 bg-gray-100 dark:bg-neutral-800 shadow-md">
              <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col text-right">
                {navLinks.map((item) => (
                  <div
                    key={item.name}
                    className={classNames(
                      item.active
                        ? "bg-gray-300 text-black dark:bg-zinc-700 dark:text-white"
                        : "text-gray-400 hover:bg-gray-300 hover:text-black dark:hover:bg-zinc-700 dark:hover:text-white",
                      "px-3 py-2 rounded-md text-sm font-medium"
                    )}
                  >
                    <a href={item.to}>{item.name}</a>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Content />
    </div>
  );
};

export default App;
