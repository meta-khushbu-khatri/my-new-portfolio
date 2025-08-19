import React from 'react';

import typescript from '../assets/typescript.png';
import javascript from '../assets/javascript.png';
import python from '../assets/python.png';
import java from '../assets/java.png';
import node from '../assets/node.png';
import bun from '../assets/bun.png';
import react from '../assets/react.png';
import next from '../assets/next.png';
import tailwind from '../assets/tailwind.png';
// import shadcn from '../assets/shadcn.png';
import vite from '../assets/vite.png';
import git from '../assets/git.png';
import docker from '../assets/docker.png';
import mysql from '../assets/mysql.png';
import mongodb from '../assets/mongodb.png';
import figma from '../assets/figma.png';
import openai from '../assets/openai.png';



const skills = [
  { src: typescript, name: "TypeScript", link: "https://www.typescriptlang.org/" },
  { src: javascript, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { src: python, name: "Python", link: "https://www.python.org/" },
  { src: java, name: "Java", link: "https://www.java.com/" },
  { src: node, name: "Node.js", link: "https://nodejs.org/" },
  { src: bun, name: "Bun", link: "https://bun.sh/" },
  { src: react, name: "React", link: "https://reactjs.org/" },
  { src: next, name: "Next.js", link: "https://nextjs.org/" },
  { src: tailwind, name: "Tailwind CSS", link: "https://tailwindcss.com/" },
//   { src: shadcn, name: "ShadCN UI", link: "https://ui.shadcn.dev/" },
  { src: vite, name: "Vite", link: "https://vitejs.dev/" },
  { src: git, name: "Git", link: "https://git-scm.com/" },
  { src: docker, name: "Docker", link: "https://www.docker.com/" },
  { src: mysql, name: "MySQL", link: "https://www.mysql.com/" },
  { src: mongodb, name: "MongoDB", link: "https://www.mongodb.com/" },
  { src: figma, name: "Figma", link: "https://www.figma.com/" },
  { src: openai, name: "OpenAI", link: "https://openai.com/" },
];


function Skills() {
  return (
           <div className="text-black w-[800px] mx-auto  border border-gray-200 p-5">

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-10 gap-5 justify-items-center">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 sm:w-14 sm:h-14">
            <img
              src={skill.src}
              alt={skill.name}
              className="w-full h-full object-contain"
            />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-xs sm:text-sm px-2 py-1 bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
              {skill.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Skills;
