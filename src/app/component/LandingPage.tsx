"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type Props = {
  texts: string[];  // array teks yang mau dianimasikan
  speed?: number;   // kecepatan ketik (ms/char)
  delay?: number;   // jeda antar kata (ms)
};

export function TypingText({
  texts,
  speed = 70,
  delay = 1500,
}: Props) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= texts.length) return;

    if (!deleting && subIndex === texts[index].length) {
      setTimeout(() => setDeleting(true), delay);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts, speed, delay]);

  return (
    <h1 className="text-lg sm:text-xl font-bold h-[24px] text-gray-400">
      {`${texts[index].substring(0, subIndex)}${subIndex === texts[index].length ? "" : "|"}`}
    </h1>
  );
}

function Section() {
  return (
    <section className="h-[100svh] flex items-center py-20 text-center justify-center flex-wrap lg:py-0" id="Home">
      <div className="">
        <div className="flex justify-center">
          <div className="rounded-full h-[280px] w-[280px] overflow-hidden bg-white/10">
            <Image
              src="/img/kiel_ganteng.png"
              alt="Profile Picture"
              className="mx-auto max-w-full z-20 h-[250px] mt-8"
              width={280}
              height={280}
            />
          </div>
        </div>
        <h1 className="font-semibold md:text-xl lg:text-2xl my-2">
          Hey everyone 👋, i&apos;m
          <span className="block text-2xl font-bold text-dark lg:text-4xl">
            Yehezkiel Haganta Tarigan
          </span>
        </h1>
        {/* <p className="text-gray-400 w-[500px] mt-2">
        I'm a passionate developer specializing in web development and artificial intelligence, dedicated to crafting clean, modern, and impactful digital solutions.
        </p> */}
        <TypingText texts={["Full-Stack Dev & AI Engineering Enthusiast","","Welcome to my personal website."]} />
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <>
      <Section />
    </>
  );
}
