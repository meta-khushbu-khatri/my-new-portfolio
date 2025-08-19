import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
import { FaXTwitter, FaArrowUpRightFromSquare } from 'react-icons/fa6';

const socialLinks = [
  {
    name: 'LinkedIn',
    username: 'Khushbu_2405',
    icon: <FaLinkedin className="text-blue-700 text-2xl" />,
    href: 'https://www.linkedin.com/in/khushbu-khatri-a10853196/',
    bg: 'bg-blue-100',
  },
  // {
  //   name: 'Instagram',
  //   username: 'khushbu_ig',
  //   icon: <FaInstagram className="text-pink-600 text-2xl" />,
  //   href: 'https://www.instagram.com/yourusername',
  //   bg: 'bg-pink-100',
  // },
  {
    name: 'X',
    username: 'khushbu_2405_x',
    icon: <FaXTwitter className="text-black text-2xl" />,
    href: 'https://x.com/Khushbu_2405',
    bg: 'bg-gray-200',
  },

  {
    name: 'GitHub',
    username: 'meta-khushbu-khatri',
    icon: <FaGithub className="text-gray-800 text-2xl" />,
    href: 'https://github.com/meta-khushbu-khatri/my-new-portfolio',
    bg: 'bg-gray-200',
  },

];

function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border border-gray-200   w-[800px] mx-auto p-5">
      {socialLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-lg border border-gray-300 hover:border-blue-500 transition-colors group shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className={`${link.bg} rounded-md p-1`}>
              {link.icon}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-black leading-tight">{link.name}</span>
              <span className="text-gray-600 text-sm">{link.username}</span>
            </div>
          </div>
          <FaArrowUpRightFromSquare className="text-gray-600 group-hover:text-blue-600 transition" />
        </a>
      ))}
    </div>
  );
}

export default Cards;