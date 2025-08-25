"use client";
import { BiPhone } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  const contacts = {
    email: "yehezkielhaganta@gmail.com",
    BiPhone: "+62 838-2290-5683",
    location: "Indonesia",
  };

  const socialMedia = [
    {
      platform: "GitHub",
      url: "https://github.com/YehezkielG",
      icon: <FaGithub size={28} className="text-black dark:text-white" />,
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/yehezkiel-haganta",
      icon: <FaLinkedin size={28} className="text-blue-600" />,
    },
    {
      platform: "Discord",
      url: "https://discord.com/users/zekiel041",
      icon: <FaDiscord size={28} className="text-indigo-500" />,
    },
  ];

  return (
      <motion.div
        initial={{ opacity: 0, y: 0, x:50}}
        whileInView={{ opacity: 1, y: 0, x:0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-12 bg-slate-950/50 text-white sm:py-5 p-3"
       id="Contact"
      >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-4">
          Feel free to reach out if you want to collaborate, discuss a project,
          or just say hi 👋
        </p>

        <a
          href={`mailto:${contacts.email}`}
          className="text-sm text-gray-400 mb-2 flex items-center justify-center gap-2"
        >
          <FaEnvelope className="text-red-500" />
          {contacts.email}
        </a>

        {contacts.BiPhone && (
          <p className="text-sm text-gray-400 mb-2 flex items-center justify-center gap-2">
            <BiPhone className="text-green-400" /> {contacts.BiPhone}
          </p>
        )}

        {contacts.location && (
          <p className="text-sm text-gray-400 mb-6">📍 {contacts.location}</p>
        )}

        <div className="flex justify-center gap-6">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition transform"
              aria-label={item.platform}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      </motion.div>
  );
}
