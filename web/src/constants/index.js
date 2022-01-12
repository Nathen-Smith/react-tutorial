import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// sections that show up and get highlighted in the nav bar
export const pageSections = [
  { name: "Nathen", to: "#", active: true, lgInvisible: false },
  { name: "About", to: "#about", active: false, lgInvisible: false },
  { name: "Experience", to: "#experience", active: false, lgInvisible: false },
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
