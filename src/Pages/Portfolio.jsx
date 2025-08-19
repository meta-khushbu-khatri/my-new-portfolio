import React from 'react';
import Navbar from '../Component/Navbar';
import proImage from '../assets/pro.jpg'; // Your avatar image
import TextRotator from '../Component/TextRotator';
import Bio from '../Component/Bio';
import Cards from '../Component/Cartds';
import About from '../Component/About';
import Skills from '../Component/Skills';
import Experince from '../Component/Experince';

function Portfolio() {
    return (
        <div className="text-black w-[800px]  mx-auto p-5 ">
            <Navbar />
            {/* 
            <div className="border-t border border-gray-100" /> */}
            <div className="w-full border-t border-gray-200 border-l-8 h-full" />

            <div
                className=" h-[35vh] flex items-center justify-center w-[800px] mx-auto "
                style={{
                    backgroundImage: 'radial-gradient(#171717 1px, transparent 0)',
                    backgroundSize: '12px 12px',
                }}
            >
                <h1 className="text-2xl font-semibold text-black">Welcome to My Portfolio</h1>
            </div>

            {/* <div className="w-full border order-gray-200 " /> */}

            {/* Avatar with flag and info */}
            <div className="flex items-center h-35 w-[800px]  mx-auto p-5 border border-gray-200">
                {/* <div className="h-full w-1/4 flex items-center justify-center"> Added justify-center to center image horizontally */}
                {/* Profile Image */}
                <img
                    src={proImage}
                    alt="Avatar"
                    className="  w-35 h-35 rounded-full my-2"  // Set to w-180 h-180 (180px x 180px)
                    onError={(e) => { e.target.src = '/fallback-image.jpg'; }}
                />
                {/* </div> */}

                {/* User Info */}
                <div className="flex flex-col  w-3/4 h-full "> {/* Increased h-40 to h-48 to match outer div */}
                    {/* 1st Div - 50% */}
                    <div className="h-[70%] flex items-baseline-last text-black p-2">
                        Software Developer
                    </div>

                    {/* 2nd Div - 25% */}
                    <div className="h-[20%] font-bold text-gray-700 flex items-center p-2">
                        Khushbu Khatri
                        <span className="text-sky-500">✔️</span>
                        <span className="text-xs text-gray-400">🔊</span>
                    </div>

                    {/* 3rd Div - 25% */}
                    <TextRotator />

                </div>
            </div>

            <div className="relative mt-12">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-gray-200" />
            </div>


            <Bio />
            <div className="relative mt-12">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-gray-200" />
            </div>
            <Cards />
            <div className="relative mt-12">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-gray-200" />
            </div>
            <About />
            <div className="relative mt-12">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-gray-200" />
            </div>
            <Skills />
            <div className="relative mt-12">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-gray-200" />
            </div>
            <Experince />
        </div>
    );
}

export default Portfolio;