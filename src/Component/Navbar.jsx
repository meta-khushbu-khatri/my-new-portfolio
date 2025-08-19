import React, { useState, useEffect } from 'react';
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa';

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Apply dark mode to <body>
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <nav
            className={`p-2 w-[800px] mx-auto border transition-colors duration-300 
                ${isDarkMode 
                    ? "bg-black text-white border-gray-700"   // Dark mode → pure black bg, dark gray border
                    : "bg-white text-black border-gray-200"}`} // Light mode → white bg, light gray border
        >
            <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">

                {/* Left: Logo */}
                <div className="text-2xl font-bold hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    KK
                </div>

                {/* Center: Navigation Links */}
                <div className="flex justify-between gap-3 items-center">
                    <div className="hidden md:flex gap-3 text-lg">
                        <a href="#portfolio" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Portfolio</a>
                        {/* <a href="#blog" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Blog</a>
                        <a href="#components" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Components</a> */}
                    </div>

                    {/* Right: Icons */}
                    <div className="flex items-center gap-3">
                        <button className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                            <FaGithub className="w-5 h-5" />
                        </button>

                        {/* Dark / Light toggle */}
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                            {isDarkMode ? (
                                <FaSun className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <FaMoon className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
