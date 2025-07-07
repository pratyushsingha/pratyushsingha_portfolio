import { Project } from "@/types/project";
import React from "react";
import ProjectCard from "./ProjectCard";
import Title from "@/components/ui/Title";

const ProjectCardList = () => {
  return (
    <div className="w-full px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8">
      <Title title="Projects" />
      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-2 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0">
        {data.map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCardList;

const data: Project[] = [
  {
    logo: "/threads.svg",
    title: "Threads",
    description:
      "A social media application, exactly looks like the UI of Threads.",
    techStack: [
      "React",
      "Shadcn",
      "Tailwind CSS",
      "NodeJS",
      "MongoDB",
      "Redux",
      "Express JS",
      "Pusher JS",
      "Docker",
      "Aws Ec2",
    ],
    link: "https://xtwit.vercel.app",
    source: "https://github.com/pratyushsingha/threads",
  },
  {
    logo: "/pngwing.com.png",
    title: "Hexafalls Mystery Mode",
    description:
      "Hexafalls hackathon website in mystery mode.",
    techStack: [
      "React",
      "Shadcn",
      "Tailwind CSS",
      "Framer Motion"
    ],
    link: "https://mystery.hexafalls.tech/",
  },
  {
    logo: "/pngwing.com.png",
    title: "insightbolt",
    description:
      "Lightning Fast Analytics for your site.f",
    techStack: [
      "Next.js",
      "Prisma",
      "Zustand",
      "Docker",
      "PostgreSQL",
      "Tailwind CSS",
      "Recharts"
    ],
    link: "https://insightbolt-gray.vercel.app",
    source: "https://github.com/pratyushsingha/Insightbolt"
  },
  {
    logo: "/image.png",
    title: "ResumeReveal",
    description:
      "Spice up your job search with a dash ofhumoror get serious insights.",
    techStack: [
      "React",
      "Gemini Api",
      "Tailwind CSS",
      "ShadCN"
    ],
    link: "https://resumereveal.vercel.app/",
    source: "https://github.com/pratyushsingha/Resume_Reveal"
  },

  {
    logo: "/vscode.png",
    title: "GitCode",
    description:
      "A chrome extension that bridges the repository and your local workspace.",
    techStack: ["Javascript", "HTML", "CSS", "Chrome Extension"],
    link: "https://gitcode.zenux.live",
    source: "https://github.com/pratyushsingha/Git_Code",
  },
  {
    logo: "/valentine.png",
    title: "My Valentine",
    description:
      "Create your own valentine page in simple clicks.Propose Your Juillet in a Nerdy Way ",
    techStack: ["Shadcn", "Magic UI", "Prisma", "Postgres", "NextJS"],
    link: "https://myvalentine.live/",
    source: "https://github.com/pratyushsingha/Git_Code",
  },
  {
    logo: "/clikit.png",
    title: "Clikit - URL shortener",
    description:
      "Clikit is a URL shortener offering advanced features like URL analytics and custom domain integration.It works on a freemium model, with a clean, user-friendly interface.",
    techStack: [
      "React",
      "Shadcn",
      "Tailwind CSS",
      "NodeJS",
      "MongoDB",
      "Zustand",
      "Express JS",
      "Razorpay",
      "Docker",
      "Nginx",
      "Aws Ec2",
    ],
    link: "https://app.clikit.live",
    source: "https://github.com/pratyushsingha/clikit",
  },
  {
    logo: "/github.png",
    title: "GitViewer",
    description:
      "A simple app that lets users search for GitHub profiles and view real-time data such as repositories, followers, and following using the GitHub API.",
    techStack: ["HTML", "Tailwind CSS", "Javascript", "Github API"],
    link: "https://pratyushsingha.github.io/GitViewer",
    source: "https://github.com/pratyushsingha/GitViewer",
  },
];
