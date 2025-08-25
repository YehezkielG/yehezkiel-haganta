"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function FullstackSkill() {
  const FullstackSkill = [
    { name: "javascript", image: "Javascript.png" },
    { name: "typescript", image: "TS.png" },
    { name: "next js", image: "nextjs.png" },
    { name: "react", image: "react.png" },
    { name: "tailwind", image: "tailwind.png" },
    { name: "mongodb", image: "mongodb.png" },
    { name: "nodejs", image: "nodejs.png" },
    { name: "express js", image: "expressjs.png" },
  ];
  return (
    <>
      {FullstackSkill.map((item) => (
        <div
          className="group relative flex justify-center items-center"
          key={item.name}
        >
          <Image
            src={`/img/skills/${item.image}`}
            className="h-20 relative z-10"
            alt={item.name}
            width={80}
            height={80}
          />
          {/* Tooltip */}
          <span className="z-20 absolute -bottom-7 scale-0 rounded bg-slate-800 px-2 py-1 text-xs text-white transition-all group-hover:scale-100 whitespace-nowrap">
            {item.name}
          </span>
        </div>
      ))}
    </>
  );
}
function AIMLskills() {
  const AIMLskills = [
    { name: "python", image: "python.png" },
    { name: "scikit learn", image: "skLearn.png" },
    { name: "tensorflow", image: "tensorflow.png" },
    { name: "pytorch", image: "pytorch.png" },
    { name: "excel", image: "excel.png" },
  ];

  return (
    <>
      {AIMLskills.map((item) => (
        <div
          className="group relative flex justify-center items-center"
          key={item.name}
        >
          <Image
            src={`/img/skills/${item.image}`}
            className="h-20 relative z-10"
            alt={item.name}
            width={80}
            height={80}
          />
          {/* Tooltip */}
          <span className="z-20 absolute -bottom-7 scale-0 rounded bg-slate-800 px-2 py-1 text-xs text-white transition-all group-hover:scale-100 whitespace-nowrap">
            {item.name}
          </span>
        </div>
      ))}
    </>
  );
}
function OtherSkills() {
  const otherSkills = [
    { name: "c++", image: "cpp.png" },
    { name: "c#", image: "cSharp.png" },
    { name: "java", image: "java.png" },
    { name: "unity", image: "unity.png" },
    { name: "figma", image: "figma.png" },
    { name: "github", image: "github.png" },
  ];

  return (
    <>
      {otherSkills.map((item) => (
        <div
          className="group relative flex justify-center items-center"
          key={item.name}
        >
          <Image
            src={`/img/skills/${item.image}`}
            className="h-20 relative z-10"
            width={80}
            height={80}
            alt={item.name}
          />

          {/* Tooltip */}
          <span className="z-20 absolute -bottom-7 scale-0 rounded bg-slate-800 px-2 py-1 text-xs text-white transition-all group-hover:scale-100 whitespace-nowrap">
            {item.name}
          </span>
        </div>
      ))}
    </>
  );
}

export default function SkillsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, x: -50 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-gray-200 my-10"
      id="Skills"
    >
      <div className="w-full text-xl font-bold my-5 text-center">
        My Skills & Technology
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <fieldset className="w-full md:w-1/2 rounded-lg md:mr-10 bg-slate-950/50 justify-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
          <legend className="ml-2 p-2 text-xl">Full-Stack</legend>
          <FullstackSkill />
        </fieldset>
        <fieldset className="w-full md:w-1/2 rounded-lg mt-5 md:mt-0 bg-slate-950/50 justify-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
          <legend className="ml-2 p-2 text-xl">AI/ML</legend>
          <AIMLskills />
        </fieldset>
      </div>
      <fieldset className="w-full rounded-lg mt-5 bg-slate-950/50 justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 py-5">
        <legend className="ml-2 p-2 text-xl">Other</legend>
        <OtherSkills />
      </fieldset>
    </motion.div>
  );
}
