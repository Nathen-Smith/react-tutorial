import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// sections that show up and get highlighted in the nav bar
export const pageSections = [
  { name: "Nathen", to: "#", active: true, lgInvisible: false },
  { name: "About", to: "#about", active: false, lgInvisible: false },
  { name: "Experience", to: "#experience", active: false, lgInvisible: true },
  { name: "Skills", to: "#skills", active: false, lgInvisible: true },
  { name: "Portfolio", to: "#portfolio", active: false, lgInvisible: false },
  { name: "Contact", to: "#contact", active: false, lgInvisible: false },
];

// icons that show up on the right side of the nav bar
// set mobileInvisible true to place the icon into the collapse-able dropdown
export const navIconLinks = [
  {
    icon: faGithub,
    link: "https://github.com/Nathen-Smith",
    mobileInvisible: false,
  },
  {
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/nathens/",
    mobileInvisible: true,
  },
  {
    icon: faEnvelope,
    link: "mailto:nathencsmith@gmail.com",
    mobileInvisible: true,
  },
];

// items to show up on the left side of the nav bar when in mobile view
export const mobileLeftItems = [
  { name: "Nathen Smith", to: "#", className: "font-bold" },
];

export const experience = [
  {
    title: "Incoming Digital Systems Laboratory ECE 385 Course Assistant",
    date: "Jan 2022 - May 2022",
    description: "",
  },
  {
    title: "Software Development Engineer Intern @ Forward Data Lab",
    date: "Sep 2021 - May 2022",
    description:
      "Reduced latency of slowest MySQL queries 5 times by using DB indexing, compiler and algorithmic simplification. Researched methods and responsible for building an API for comparing institutions and faculty meaningfully, building on existing higher education API and Microsoft MAKES API. Containerized Flask server with Docker and deployed MySQL server accessed through ssh tunnel. Debugged and added UI/UX and backend features including responsiveness and image styling",
  },
  {
    title: "Database Systems CS 411 Course Assistant",
    date: "Aug 2021 - Present",
    description:
      "I guided students to find solutions to SQL, NoSQL, database problems during lecture, in office hours, and the class forum. I gave feedback and advice to final project design choices, a database driven web app. Lastly, I reviewed and contributed to writing homework and exam questions, and graded homework.",
  },
  {
    title: "Full Stack Engineer Intern @ Ziggurat Technologies",
    date: "Jul 2021 - Sep 2021",
    description:
      "I implemented and designed user update functionality through frontend, database update, middleware, and Twilio Two-Factor Authentication APIs. The stack is React Native, Redux, Mongoose, Express.js. I am responsible for debugging API, frontend bugs, and assigning tasks to other inters. I maintained Jira issue tracking and documented build instructions for frontend backend connecting with mobile simulator.",
  },
];

export const skills = [
  {
    name: "JavaScript & Node",
    textColor: "black",
    backgroundColor: "#F0DB4F",
    percentage: "85%",
  },
  {
    name: "HTML",
    textColor: "white",
    backgroundColor: "#e34c26",
    percentage: "70%",
  },
  {
    name: "Sass & CSS",
    textColor: "white",
    backgroundColor: "#CD6799",
    percentage: "65%",
  },
  {
    name: "TypeScript",
    textColor: "white",
    backgroundColor: "#007acc",
    percentage: "80%",
  },
  {
    name: "Python",
    textColor: "white",
    backgroundColor: "#ff9800",
    percentage: "90%",
  },
  {
    name: "Go",
    textColor: "white",
    backgroundColor: "#29BEB0",
    percentage: "50%",
  },
  {
    name: "React",
    textColor: "white",
    backgroundColor: "#61DBFB",
    percentage: "90%",
  },
  {
    name: "SQL",
    textColor: "white",
    backgroundColor: "#00758F",
    percentage: "90%",
  },
  {
    name: "MongoDB",
    textColor: "white",
    backgroundColor: "#4DB33D",
    percentage: "90%",
  },
  {
    name: "Docker",
    textColor: "white",
    backgroundColor: "#0db7ed",
    percentage: "60%",
  },
  {
    name: "Flask",
    textColor: "white",
    backgroundColor: "#b19cd9",
    percentage: "60%",
  },
  {
    name: "C++",
    textColor: "white",
    backgroundColor: "#f34b7d",
    percentage: "60%",
  },
];

// skill icons data, use darkMode: to turn icons white when in dark mode
export const skillIcons = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    alt: "python",
    name: "Python",
    darkMode: false,
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "js",
    name: "JavaScript",
    darkMode: false,
  },
  {
    src: "/assets/icons/flask.svg",
    alt: "flask",
    name: "Flask",
    darkMode: true,
  },
  {
    src: "/assets/icons/mysql.svg",
    alt: "mysql",
    name: "MySQL",
    darkMode: false,
  },
  {
    src: "/assets/icons/react.svg",
    alt: "react",
    name: "React",
    darkMode: false,
  },
  {
    src: "/assets/icons/typescript.svg",
    alt: "ts",
    name: "TypeScript",
    darkMode: false,
  },
  {
    src: "https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg",
    alt: "firebase",
    name: "Firebase",
    darkMode: false,
  },

  {
    src: "/assets/icons/mongodb.svg",
    alt: "mongodb",
    name: "MongoDB",
    darkMode: false,
  },
  {
    src: "/assets/icons/docker.svg",
    alt: "docker",
    name: "Docker",
    darkMode: false,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    alt: "cpp",
    name: "C++",
    darkMode: false,
  },
  {
    src: "/assets/icons/graphql.svg",
    alt: "graphql",
    name: "GraphQL",
    darkMode: false,
  },
  {
    src: "/assets/icons/nodejs.svg",
    alt: "node",
    name: "Node.js",
    darkMode: false,
  },
  {
    src: "https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.svg",
    alt: "svelte",
    name: "Svelte",
    darkMode: false,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    alt: "next",
    name: "Next.js",
    darkMode: true,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    alt: "sass",
    name: "Sass",
    darkMode: false,
  },
  {
    src: "/assets/icons/gitlab-icon.svg",
    alt: "gitlab",
    name: "GitLab CI/CD",
    darkMode: false,
  },
  {
    src: "https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg",
    alt: "pg",
    name: "PostgreSQL",
    darkMode: false,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    alt: "aws",
    name: "AWS",
    darkMode: true,
  },
  {
    src: "/assets/icons/redux.svg",
    alt: "redux",
    name: "Redux",
    darkMode: false,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
    alt: "go",
    name: "Go",
    darkMode: false,
  },
  {
    src: "/assets/icons/prisma.svg",
    alt: "prisma",
    name: "Prisma",
    darkMode: true,
  },
];

export const projects = [
  {
    src: "/assets/projects/childdevtracker.jpeg",
    alt: "childdevtracker",
    name: "Child Development Tracker",
    description:
      "Full stack web app for a user to track their child's development and diet, changes, and general journal entries",
    link: "https://github.com/Nathen-Smith/child-development-tracker",
    tech: [
      { name: "TypeScript", color: "#007acc" },
      { name: "React", color: "#61DBFB" },
      { name: "React-Router", color: "rgb(233, 73, 73)" },
      { name: "MongoDB", color: "#3FA037" },
      { name: "Firebase", color: "#FFA000" },
      { name: "Docker", color: "#0db7ed" },
    ],
  },
  {
    src: "/assets/projects/fpga_mario.jpeg",
    alt: "fpgamario",
    name: "FPGA Mario NES",
    description:
      "FPGA SOC Mario NES in SystemVerilog. Built on a DE-10 Lite FPGA, synthesized in Quartus Prime 18.1",
    link: "https://github.com/Nathen-Smith/FPGA_super_mario_bros",
    tech: [
      { name: "TypeScript", color: "#007acc" },
      { name: "React", color: "#61DBFB" },
    ],
  },
  {
    src: "/assets/projects/databoard.jpeg",
    alt: "data-board",
    name: "Data Dashboard",
    description: "Real-time Business Intelligence on Kaggle Movies Dataset",
    link: "https://github.com/Nathen-Smith/data-dashboard",
    tech: [
      { name: "TypeScript", color: "#007acc" },
      { name: "React", color: "#61DBFB" },
    ],
  },
  {
    src: "/assets/projects/marvelapp.jpeg",
    alt: "marvelapiapp",
    name: "Marvel API APP",
    description: "Frontend App using Marvel API",
    link: "https://nathensmith.com/marvel-api-app/",
    tech: [
      { name: "TypeScript", color: "#007acc" },
      { name: "React", color: "#61DBFB" },
    ],
  },
  {
    src: "/assets/projects/hippocampus.jpg",
    alt: "hippocampus",
    name: "HippoCampus",
    description:
      "A student matching database-driven web app that allows users to customize their profile and set preferences on a desired study buddy or project partner",
    link: "https://github.com/Nathen-Smith/HippoCampus",
    tech: [
      { name: "TypeScript", color: "#007acc" },
      { name: "React", color: "#61DBFB" },
    ],
  },
  {
    src: "/assets/projects/linux.jpeg",
    alt: "os",
    name: "Operating System",
    description:
      "Preemptively multitasked operating system including system calls, virtual memory, interrupts and exceptions, a GUI, and a filesystem starting from a bootloader",
    link: "https://github.com/Nathen-Smith/Operating-System",
    tech: [
      { name: "TypeScript", color: "#007acc" },
      { name: "React", color: "#61DBFB" },
    ],
  },
];