"use client";
import ProjectCardList from "../components/ProjectCardList";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Link as ScrollLink } from "react-scroll";
import { inter, bricolage_grotesque } from "@/utils/fonts";
import About from "./about/components/About";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { Link, Avatar as Picture } from "@radix-ui/themes";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex justify-center py-5 pt-36 dark:bg-black">
        <div className="w-2/3 max-sm:w-full flex flex-col items-center">
          <div>
            <Link
              href="https://avatars.githubusercontent.com/u/111200225?v=4"
              target="_blank"
            >
              <Picture
                src="https://avatars.githubusercontent.com/u/111200225?v=4"
                fallback="PS"
                size="6"
                radius="full"
              />
            </Link>
          </div>
          <div className="mt-4 px-32 max-sm:px-4">
            <h1
              className={`!text-[3rem] mt-2 max-sm:!text-[1.6rem] !whitespace-nowrap font-bold tracking-tight text-center ${bricolage_grotesque}`}
            >
              Hi, I&apos;m Pratyush Singha👋
            </h1>

            <h1
              className={`mt-2 max-sm:mt-5 max-sm:px-3 !text-base max-sm:!text-sm text-center !font-normal !tracking-normal inter !leading-6 ${inter}`}
            >
              Passionate full stack developer with strong technical skills and a
              hunger to learn. Skilled in working with modern frameworks such as
              React and Next js, Seeking opportunities to work with a dynamic
              team where I can contribute my skills and grow as a developer.
              Let &apos;s connect and discuss how I can help bring your projects to
              life.
            </h1>
          </div>
          <div className="mt-10">
            <RainbowButton>
              <ScrollLink
                to="contact-section"
                activeClass="active"
                smooth={true}
                offset={-120}
                duration={1100}
              >
                Get in touch
              </ScrollLink>
            </RainbowButton>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-16">
        <ProjectCardList />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Skills />
      </div>
      <div className="w-full flex justify-center mt-4">
        <Education
          institute_link={"https://www.jisuniversity.ac.in/"}
          institute_logo={"/university.png"}
          course_title={"Bachelors of Technology"}
          ending_date={"Expected August 2026"}
          institute_name={"JIS UNIVERSITY"}
          cgpa={8.4}
          description={
            "Currently pursuing B.tech in Computer Science & Engineering, focusing on building products, web technologies, and programming languages."
          }
        />
      </div>
      <div className="w-full flex justify-center mt-4">
        <About />
      </div>

      <div className="w-full flex justify-center mt-4" id="contact-section">
        <Contact />
      </div>
    </motion.div>
  );
}
