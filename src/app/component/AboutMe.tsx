"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-wrap bg-slate-950/50 text-gray-200 sm:py-5 p-3"
      id="AboutMe"
    >
      <div className="flex justify-center items-center w-full md:w-1/4 mb-5 md:mb-0">
        <div className="rounded-full h-[120px] w-[120px] md:h-[150px] md:w-[150px] relative flex items-center justify-center overflow-hidden">
          <Image
            src="/img/kiel_ganteng_2.png"
            alt="Profile"
            className="object-cover"
            fill
          />
        </div>
      </div>
      <div className="w-full md:w-3/4">
        <h2 className="text-xl md:text-2xl font-bold">About Me</h2>
        <p className="my-2 text-base md:text-lg text-gray-400">
          Hi, I’m Yehezkiel, computer science student passionate about building
          fullstack applications and exploring the world of AI engineering.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-lg">
          <span className="my-2">Full Name</span>
          <span className="my-2 text-gray-400 flex items-center">
            <Image src="/img/about me/prsn.png" className="w-5 mr-1 h-5" alt="Person Icon" width={20} height={20} />
            Yehezkiel Haganta Tarigan
          </span>
          <span className="my-2">Interest</span>
          <span className="my-2 text-gray-400">
            <div className="flex items-center">
              <Image src="/img/about me/coding.png" className="w-5 mr-1 h-5" alt="Coding Icon" width={20} height={20} /> Full-Stack Development
            </div>
            <div className="flex items-center">
              <Image src="/img/about me/neural-network.png" className="w-5 mr-1 h-5" alt="AI Icon" width={20} height={20} /> AI Engineering
            </div>
          </span>
          <span className="my-2">Non-IT Interest</span>
          <span className="my-2 text-gray-400">
            <div className="flex items-center">
              <Image src="/img/about me/pyc.png" className="w-5 mr-1 h-5" alt="Psychology Icon" width={20} height={20} />
              Psychology
            </div>
            <div className="flex items-center">
              <Image src="/img/about me/guitar.png" className="w-5 mr-1 h-5" alt="Guitar Icon" width={20} height={20} />
              Guitar
            </div>
          </span>
          <span className="my-2">Favorite Colour</span>
          <span className="my-2 flex items-center">
            <span className="bg-black border-[1px] border-gray-300 w-5 rounded-full h-5 mr-1"></span>
            <span className="bg-[#252525] border-[1px] border-gray-300 rounded-full w-5 mr-1 h-5"></span>
            <span className="bg-[#000080] border-[1px] border-gray-300 rounded-full w-5 mr-1 h-5"></span>
          </span>
          <span className="my-2">Favorite Programming Language</span>
          <span className="my-2 text-gray-400">
            <div className="flex items-center">
              <Image src="/img/skills/TS.png" className="w-5 mr-1 h-5" alt="TypeScript Icon" width={20} height={20} /> Typescript
            </div>
            <div className="flex items-center">
              <Image src="/img/skills/python.png" className="w-5 mr-1 h-5" alt="Python Icon" width={20} height={20} /> Python
            </div>
          </span>
          <span>Education</span>
          <span>
            <div className="flex items-center p-2 rounded-lg w-fit text-sm">
              <Image src="/img/about me/smk.png" className="w-8 mr-3 h-w-8" alt="SMK Logo" width={32} height={32} />
              <div>
                <a href="https://smktritechinformatika.sch.id">SMK Tritech Informatika</a>
                <div className="text-gray-400">Software Engineer</div>
                <div className="text-xs text-gray-400">2021 - 2024</div>
              </div>
            </div>
            <div className="flex items-center p-2 rounded-lg w-fit text-sm">
              <Image src="/img/about me/unimed.png" className="w-8 mr-3 h-w-8" alt="Unimed Logo" width={32} height={32} />
              <div>
                <a href="https://portal.unimed.ac.id">Medan State University</a>
                <div className="text-gray-400">Computer Science</div>
                <div className="text-xs text-gray-400">2024 - now</div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
