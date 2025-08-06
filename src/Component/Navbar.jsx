import React, { useState, useEffect } from 'react';
import { FaSearch, FaGithub, FaMoon } from 'react-icons/fa';

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle dark mode class on body
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <nav className={`p-2 w-[800px] mx-auto border border-gray-200  ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black '
                }`}
        >
            <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between ">

                {/* Left: Logo */}
                <div className="text-2xl font-bold hover:text-gray-600 transition-colors ">
                    KK
                </div>

                {/* Center: Navigation Links */}
                <div className='flex justify-between gap-3 items-center'>
                    <div className="hidden md:flex gap-3 text-lg">
                        <a href="#portfolio" className="hover:text-gray-600 transition-colors">Portfolio</a>
                        <a href="#blog" className="hover:text-gray-600 transition-colors">Blog</a>
                        <a href="#components" className="hover:text-gray-600 transition-colors">Components</a>
                    </div>

                    {/* Right: Icons */}
                    <div className="flex items-center gap-3  ">
                        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                            <FaGithub className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                        >
                            <FaMoon className="-5 h-5" />
                        </button>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
