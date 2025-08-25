"use client";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

function Nav(){
  return (
    <div className="w-full lg:items-center lg:w-auto lg:flex text-md absolute top-0 right-0 bg-black/50">
      <div className="text-sm font-semibold flex flex-col gap-3 p-5">
        <a href="#Home">Home</a>
        <a href="#AboutMe" className="p-2">
          About me
        </a>
        <a href="#Skills" className="p-2">
          Skills
        </a>
        <a href="#Project" className="p-2">Project</a>
        <a href="#Contact" className="p-2">Contact</a>
      </div>
    </div>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="flex items-center justify-between w-full flex-wrap py-5 top-0 absolute">
        <div className="text-lg font-bold">
            {"<Yehezkiel />"}
        </div>
        <div className="">
          <span className="flex lg:hidden">
            <button className="material-symbols-outlined cursor-pointer font-bold" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <Nav /> : <BiMenu size={30} />}
            </button>
          </span>
          <div className="w-full flex-grow hidden lg:items-center lg:w-auto lg:flex text-md">
            <div className="text-sm lg:flex-grow font-semibold">
              <a href="#Home">Home</a>
              <a href="#AboutMe" className="p-2">
                About me
              </a>
              <a href="#Skills" className="p-2">
                Skills
              </a>
              <a href="#Project" className="p-2">Project</a>
              <a href="#Contact" className="p-2">Contact</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
