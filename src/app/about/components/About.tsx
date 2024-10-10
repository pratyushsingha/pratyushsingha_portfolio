"use client";
import React, { useState } from "react";
import { I_About } from "@/types/project";
import { bricolage_grotesque } from "@/utils/fonts";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Badge, Separator } from "@radix-ui/themes";
import Title from "@/components/ui/Title";

const About = () => {
  const [isMore, setIsMore] = useState<boolean>(false);
  return (
    <div className="w-full px-64 max-[1285px]:px-52 max-lg:px-4 max-sm:px-5 flex flex-col items-center mt-4 pb-8">
      <Title title="The Evolution of My Tech Journey" />

      <div className="w-full pl-36 pr-28 max-sm:px-2">
        {data.slice(0, 3).map((item, idx) => (
          <div key={idx}>
            <h1
              className={`text-2xl max-sm:text-xl mt-8 font-medium ${bricolage_grotesque}`}
            >
              {item.year}
            </h1>
            <div className="flex pl-2 mt-4">
              <div className={`w-full flex flex-col gap-3`}>
                {item.events.map((event, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 ${bricolage_grotesque}`}
                  >
                    <span>
                      <Separator
                        orientation="horizontal"
                        size="1"
                        className="w-8 bg-black dark:bg-gray-400"
                      />
                    </span>
                    <span className="text-[15px] max-sm:text-sm dark:text-[#dfdede]">
                      {event}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {data.length > 3 && (
          <div
            className={`flex justify-center mt-5 ${
              isMore ? "hidden" : "block"
            }`}
          >
            <Badge
              color="gray"
              variant="solid"
              highContrast
              onClick={() => setIsMore(true)}
              className={`text-xs max-sm:text-[10px] w-20 flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}
            >
              <span>See More</span>
              <span className="!ml-[-3px] mt-[1px]">
                <ChevronDownIcon className="h-3 w-3 dark:!text-black !text-white  shrink-0 text-muted-foreground transition-transform duration-200" />
              </span>
            </Badge>
          </div>
        )}

        {isMore &&
          data.slice(3).map((item, idx) => (
            <div key={idx}>
              <h1
                className={`text-2xl mt-8 font-medium ${bricolage_grotesque}`}
              >
                {item.year}
              </h1>
              <div className="flex pl-2 mt-4">
                <div
                  className={`w-full flex flex-col gap-3 ${bricolage_grotesque}`}
                >
                  {item.events.map((event, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 ${bricolage_grotesque}`}
                    >
                      <span>
                        <Separator
                          orientation="horizontal"
                          size="1"
                          className="w-8 bg-black dark:bg-gray-400"
                        />
                      </span>
                      <span className="text-[15px] dark:text-[#dfdede]">
                        {event}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

        <div
          className={`flex justify-center mt-5 ${isMore ? "block" : "hidden"}`}
        >
          <Badge
            color="gray"
            variant="solid"
            highContrast
            onClick={() => setIsMore(false)}
            className={`text-xs max-sm:text-[10px] w-20 flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}
          >
            <span>See Less</span>
            <span className="!ml-[-3px] mt-[1px]">
              <ChevronDownIcon className="rotate-180 h-3 w-3 dark:!text-black !text-white shrink-0 text-muted-foreground transition-transform duration-200" />
            </span>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default About;

const data: I_About[] = [
  {
    year: 2024,
    events: [
      "Built 3 Full stack innovative projects and on the way to build more. 🚀",
      "Attended Couple of hackathons,tried my best to solve the problems and learned a lot. 🏆",
      "Started to learn backend, explored Node.js, Express, and MongoDB, and built a few RESTful APIs. 🌐",
      "Proud of the progress I've made so far—each step has been a leap forward in my career.",
    ],
  },
  {
    year: 2023,
    events: [
      "Focused on University studies to maintain decent CGPA and balance my time between academics and coding. 📚",
      "Started learning React and built a few projects to solidify my understanding. ⚛️",
      "Learned Tailwind css and cloned couple of websites to improve my UI skills. 🎨",
    ],
  },
  {
    year: 2022,
    events: [
      "One day saw my friend's website and got curious about it, started learning HTML, CSS, and JavaScript. 🌐",
      "Started learning C programming but fully confused what's i am doing,why it needed 🤯",
      "Took admission on University for a Btech degree, marking the beginning of my formal education in computer science. 🎓",
    ],
  },
];
