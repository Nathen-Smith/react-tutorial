import React, { useState, useEffect, useCallback, useReducer } from "react";
import { useMediaQuery } from "react-responsive";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "./Layout";
import { pageSections, navIconLinks, mobileLeftItems } from "./constants";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const App = () => {
  const [navLinks, setNavLinks] = useState(pageSections);
  const isNotMobile = useMediaQuery({ query: "(min-width: 640px)" });

  const setPageSectionTrue = useCallback(
    (index) => {
      let newArr = [...navLinks]; // copying the old array
      newArr[index].active = true; // setting element at this index true
      newArr.forEach((_, idx) => {
        idx !== index && (newArr[idx].active = false); // set everything else false
      });

      setNavLinks(newArr);
    },
    [navLinks]
  );

  useEffect(() => {
    window.onscroll = () => {
      let navLinksLen = navLinks.length;
      for (let i = 1; i < navLinksLen; i++) {
        let elementDistanceFromTopOfViewHeight = document
          .getElementById(navLinks[i].to.slice(1))
          ?.getBoundingClientRect().top;
        if (
          elementDistanceFromTopOfViewHeight < window.innerHeight &&
          elementDistanceFromTopOfViewHeight +
            parseInt(
              window
                .getComputedStyle(
                  document.getElementById(navLinks[i].to.slice(1))
                )
                .getPropertyValue("height")
                .slice(0, -2) //remove px
            ) >
            65
        ) {
          setPageSectionTrue(i);
          return;
        }
        setPageSectionTrue(0);
      }
    };
  }, [navLinks, setPageSectionTrue]);

  function setBodyStyle(theme) {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#27272a";
      return;
    }
    document.body.style.backgroundColor = "white";
    return;
  }

  useEffect(() => {
    // initialization on reload
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setBodyStyle("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setBodyStyle("light");
    }
  }, []);

  function reducer(_, themeColor) {
    switch (themeColor) {
      case "light":
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
        setBodyStyle("light");
        return "light";
      case "dark":
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        setBodyStyle("dark");
        return "dark";
      default:
        localStorage.removeItem("theme");
        setBodyStyle("dark");
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
                    <div className="flex space-x-4 sm:space-x-6">
                      {navLinks
                        .filter((item) => isNotMobile && !item.lgInvisible)
                        .map((item) => (
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
                              className={`${
                                item.active ? "opacity-100" : "opacity-0"
                              } relative h-0.5 bg-blue-600 dark:bg-indigo-300 -top-0.5 rounded-t-3xl transition-opacity ease-in-out`}
                            ></div>
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "text-black dark:text-white left-0 absolute pl-2 block sm:hidden h-16 text-sm font-medium text-center flex justify-center items-center transition-colors ease-in-out space-x-2"
                  }
                >
                  {mobileLeftItems.map((item) => {
                    return (
                      <a
                        key={item.name}
                        href={item.to}
                        className="h-16 flex items-center"
                      >
                        <span className={item.className}>{item.name}</span>
                      </a>
                    );
                  })}
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="ml-3 relative text-sm font-small flex flex-row justify-center items-center space-x-2 sm:space-x-4">
                    {navIconLinks
                      .filter((item) => isNotMobile || !item.mobileInvisible)
                      .map((item) => {
                        // if item is mobile invisible, do not return it when mobile view
                        // => if in desktop view or is supposed to be visible in mobile view
                        // if mobile and is supposed to be visible in dropdown;
                        return (
                          <a
                            href={item.link}
                            key={item.link}
                            className="flex justify-center items-center"
                          >
                            <FontAwesomeIcon
                              icon={item.icon}
                              style={{ height: "24px", width: "24px" }}
                            />
                          </a>
                        );
                      })}

                    <div className="flex items-center border text-gray-400 border-gray-400 rounded-md hover:bg-gray-400 dark:hover:bg-zinc-700 hover:text-white cursor-pointer transition-colors ease-in-out focus:outline-none">
                      {theme === "light" ? (
                        <SunIcon
                          onClick={() => dispatch("dark")}
                          className="h-7"
                        />
                      ) : (
                        <MoonIcon
                          onClick={() => dispatch("light")}
                          className="h-7"
                        />
                      )}
                    </div>
                    <div className="flex items-center sm:hidden border text-gray-400 border-gray-400 rounded-md hover:bg-gray-400 dark:hover:bg-zinc-700">
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md hover:text-white focus:outline-none h-7">
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
                  <a
                    key={item.name}
                    href={item.to}
                    className={classNames(
                      item.active
                        ? "bg-gray-300 text-black dark:bg-zinc-600 dark:text-white py-1.5"
                        : "text-gray-400 hover:bg-gray-200 hover:text-black dark:hover:bg-zinc-700 dark:hover:text-white",
                      "px-3 py-2 rounded-md text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                {navIconLinks
                  .filter((item) => !isNotMobile && item.mobileInvisible)
                  .map((item) => {
                    // if item is mobile invisible, do not return it when mobile view
                    // => if in desktop view or is supposed to be visible in mobile view
                    // else show in dropdown
                    return (
                      <a href={item.link} key={item.link} className="pr-3">
                        <FontAwesomeIcon
                          icon={item.icon}
                          style={{ height: "24px", width: "24px" }}
                        />
                      </a>
                    );
                  })}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Layout />
    </div>
  );
};

export default App;
