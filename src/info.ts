// Technologies
import rustLogo from "@/assets/svg/rust.svg";
import typescriptLogo from "@/assets/svg/typescript.svg";
import javaLogo from "@/assets/svg/java.svg";
import dockerLogo from "@/assets/svg/docker.svg";
import vueLogo from "@/assets/svg/vue.svg";
import gitLogo from "@/assets/svg/git.svg";
import linuxLogo from "@/assets/svg/linux.svg";
// Socials
import githubLogo from "@/assets/svg/github.svg";
import twitterLogo from "@/assets/svg/twitter.svg";
import youtubeLogo from "@/assets/svg/youtube.svg";
import discordLogo from "@/assets/svg/discord.svg";

import "@/assets/styles/info/base.css";
import rubiu5Image from "@/assets/img/rubiu5.webp";
import archanImage from "@/assets/img/archan.webp";
import limeCordIcon from "@/assets/img/limecord.webp";
import ryokoIcon from "@/assets/img/ryoko.webp";

export const technologies = [
  { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/TypeScript.svg", alt: "ts Icon" },
  { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/AWS-Dark.svg", alt: "aws Icon" },
  { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/CPP.svg", alt: "C++ Icon" },
  { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/Docker.svg", alt: "Docker Icon" },
  { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/Java-Dark.svg", alt: "java Icon" },
  { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/MongoDB.svg", alt: "mongodb Icon" },
  { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/PostgreSQL-Dark.svg", alt: "postgre Icon" },
  { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/Postman.svg", alt: "postman Icon" },
  { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/Prisma.svg", alt: "prisma Icon" },
  { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/React-Dark.svg", alt: "react Icon" },
  { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/Redux.svg", alt: "redux Icon" },
  { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/Redis-Dark.svg", alt: "redis Icon" },
  { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/Kafka.svg", alt: "kafka Icon" },
  { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/NextJS-Dark.svg", alt: "nextjs Icon" },
  { src: "https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=png", alt: "JWT Icon" }
];


export const socials = [
  {
    href: "https://github.com/Unknownlemon03",
    src: githubLogo,
    alt: "Lemon Github page",
  },
  {
    href: "https://www.linkedin.com/in/bhargavshirke/",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
    alt: "Kimu's Youtube channel",
  },
  {
    href: "https://drive.google.com/file/d/186AWH4GVjftTQGQ9Y6lPr0qIdPh3bMcs/view",
    src: "https://cdn-icons-png.freepik.com/256/942/942748.png",
    alt: "Resume",
  },
];
export const Name = "Lemon"
export const firstIntro = "Heya! I'm Bhargav — just a smol dev who fell in love with building things that *actually* work (most of the time)."
export const messageList = [
  "I once debugged a WebSocket issue at 2 AM... and it worked only because I restarted the server.",
  "I like my code like my coffee: clean, strong, and preferably error-free.",
  "Real-time apps are fun—until you forget to handle disconnects. Oops.",
  "React is cool, but when I saw how fast Bun is, I questioned my loyalty.",
  "Docker made my life easier... until I forgot I mapped the wrong port.",
  "I believe in writing code that my future self won’t curse me for.",
  "If it runs on localhost:3000, it's basically done, right?",
  "Don't ask me why I like the name Lemon — it just feels right, okay?",
  "Yes, I *do* talk to my code. It helps. Don't judge.",
  "I like building stuff that works—and then figuring out why it broke.",
  "Sometimes I dream in JSON.",
  "Nothing feels better than seeing `Connected to server` on the first try.",
  "I write code to learn, to build, and to sometimes fight JavaScript weirdness.",
  "JavaScript and I had a good run… but once TypeScript came along, I knew it was over.",

];



export const projects = [
  {
    title: "Virtual Collaboration Platform",
    description: "A real-time collaboration platform (Game) with customizable spaces, avatars, and video chat.",
    image: "",  // Replace with your project image
    technologies: ["TypeScript", "Next.js", "Socket.IO", "PostgreSQL", "Prisma", "JWT", "Livekit", "Tailwind CSS", "Phaser.js", "Zod"],
    github: "https://github.com/UnknownLemon03/virtual-collaboration-platform"
  },
  {
    title: "Workflow Automation",
    description: "Your project automates tasks by connecting various services, triggering actions based on predefined events, and streamlining workflows for enhanced efficiency and seamless integration.  ",
    image: "",  // Replace with your project image
    technologies: ["TypeScript", "Java", "Next.js", "Spring Boot", "Kafka", "MySQL","Hibernate", "Tailwind CSS", "ShardCN", "JWT"],
    github: "https://github.com/UnknownLemon03/workflows-automation"
  },
  {
    title: "Smart E-Commerce Bookstore with Book Recommendations",
    description: "An e-commerce platform with ebook reader and   book recommendations using book description.",
    image: "",  // Replace with your project image
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js", "PostgreSQL", "Zod", "Prisma", "Python", "Flask", "scikit-learn", "Docker"],
    github: "https://github.com/UnknownLemon03/Ebook-ecommerce"
  },
  {
    title: "Restaurant Management System",
    description: "A real-time restaurant bill management system with data synchronization for collaboration",
    image: "",  // Replace with your project image
    technologies: ["React", "Redux", "Tailwind CSS", "Chart.js", "Node.js", "Express", "Socket.IO", "MongoDB"],
    github: "https://github.com/UnknownLemon03/restaurants-management"
  },
];


export const about = `
    A smol but mighty dev with just enough energy to start too many projects and somehow finish most of them. Always chasing that clean, fast, and satisfying build. <br/><br/>

Currently obsessed with building backend-heavy, feature-rich apps that can scale like crazy (or at least try to so I can eventually land a decent job and touch grass once in a while).<br/><br/>

Java and TypeScript are my go-to languages—nothing else quite clicks like these two.<br/><br/>
As soon as college looks away, I'm back in my editor making questionable life choices in code
<br/>
<br/>
I don’t always know what I’m building… but I’m definitely building something.
`

export const workStation = `
    My main OS is Ubuntu Linux, which I use alongside Windows in a dual boot setup. <br/><br/> I initially switched because I couldn't stand how much RAM Windows needed, but now I actually enjoy the balance of both and plan to stick with this setup for a while.
`

export const hobbies = `
  Playing  games and coding are some of the things I love doing the most
  <br><br>
  I still dunnou what to write here JHDSUOAHFAHDFAJDHFAJKHDAF
  <br><br><br>
  :3
`