"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  stack: string[];
  github?: string;
  preview?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Memory Game",
      description:
        "This game will Train Short Term Memory, Improve Concentration and Focus, and Train Visual Memory, interactive gameplay that challenges players to sharpen memory and concentration skills in a fun way",
      image: "/img/project/memorygame.png",
      stack: ["TypeScript", "Next JS", "Tailwind CSS"],
      github: "https://github.com/YehezkielG/memory-game",
      preview: "https://memory-game-kiel.vercel.app",
    },{
      title: "Machine Learning From Scratch",
      description:
        "A collection of core Machine Learning algorithms implemented from scratch using Python and NumPy. This project demonstrates a deep understanding of mathematical foundations and algorithmic design without relying on high-level ML libraries.",
      image: "/img/project/mlfromscratch.png",
      stack: ["Python", "NumPy","Scikit-learn", "Math"],
      github: "https://github.com/YehezkielG/Machine-Learning-From-Scratch",
    },{
      title: "Next.js Dashboard",
      description:
        "A modern dashboard starter template built with Next.js, leveraging the App Router architecture. It features a clean, scalable layout with TypeScript support—perfect as a foundation for building data-driven admin interfaces quickly and reliably.",
      image: "/img/project/nextdash.png",
      stack: ["TypeScript", "Next JS", "Tailwind CSS"],
      github: "https://github.com/YehezkielG/nextjs-dashboard",
      preview: "https://nextjs-dashboard-kiel.vercel.app",
    },{
        title: "Focus-Forge — Pomodoro Timer & Task Manager",
        description:
          "A web-based Pomodoro timer paired with a task list manager, built using HTML, Tailwind CSS, and vanilla JavaScript. Tracks session history, customizable focus/ break intervals, browser tab title updates, and notifications to keep users on track.",
        image: "/img/project/pomodoro.png",
        stack: ["HTML5", "Tailwind CSS", "JavaScript"],
        github: "https://github.com/YehezkielG/Pomodoro_Timer",
        preview: "https://focusforge.vercel.app",
      },
      {
        title: "Tic-Tac-Toe: Two-Player.",
        description: 
          "A modern take on the classic Tic-Tac-Toe, built with vanilla JS, HTML, and CSS. Includes a real-time match timer, two-player mode, and live scoreboard to keep players engaged.",
        image: "/img/project/ttt.png",  // screenshot of your game
        github: "https://github.com/YehezkielG/Tic-Tac-Toe",
        preview: "https://yehezkielg.github.io/Tic-Tac-Toe/",
        stack: ["HTML5", "CSS", "JavaScript"]
      },
    {
      title: "Medical Diagnosis Assistant",
      description: 
        "This is a platform designed to assist in the early diagnosis of multiple diseases. Built with Next.js for a clean UI, while leveraging Scikit-learn, and TensorFlow for machine learning. This project emphasizes AI Ethics, focusing on transparency, explainability, and data privacy. Currently in the planning stage.",
      image: "",
      github: "", // repository not yet available
      preview: "", // live preview not yet available
      stack: ["TypeScript", "Next.js", "Tailwind CSS", "Python","Flask", "Scikit-learn", "TensorFlow"]
    },
  ];
  

  return (
    <section className="pb-10 bg-gradient-to-b" id="Project">
      <h2 className="text-xl font-bold text-center text-white mb-10">
        My Projects
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto"
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-950/50 rounded-2xl shadow-lg overflow-hidden border border-slate-800 hover:shadow-xl hover:shadow-slate-700/20 transition-all duration-300"
          >
            <div className="relative w-full h-48 overflow-hidden">
                {
                project.image ? (
                  <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={200}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-500">
                  <span className="text-sm italic">coming soon</span>
                  </div>
                )
                }
            </div>
            <div className="p-6 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-black/50 text-slate-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <hr className="border-[1px] border-gray-700 my-4" />
                <div className="flex gap-4">
                  {!(project.github) && !(project.preview) ? (
                    <span className="text-sm text-gray-500 italic">Coming soon...</span>
                  ) : ""
                  }
                  {project.github && (
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-sm bg-gray-700/50 rounded-lg hover:bg-gray-700/70 flex items-center gap-2"
                  >
                    <Image src="/img/skills/github.png" className="w-5" width={20} height={20} alt="" />
                    GitHub
                  </a>
                  )}
                {project.preview && (<a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-sm bg-gray-700/50 rounded-lg hover:bg-gray-700/70 flex items-center gap-2"
                >
                  <Image src="/img/project/globe.png" className="w-5" width={20} height={20} alt="" />
                  Live Preview
                </a>)}
              </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
        <div className="w-full text-end text-sm text-gray-500 italic mt-4">
          <a className=" hover:underline"
            href="https://github.com/YehezkielG?tab=repositories">
              More Projects on my GitHub &rarr;
            </a>
        </div>
    </section>
  );
};

export default Projects;
