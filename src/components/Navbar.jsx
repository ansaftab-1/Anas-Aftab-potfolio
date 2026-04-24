import React from "react";
import ThemeShifter from "./ThemeShifter";

const Navbar = () => {
    return (
        <nav className="fixed w-full top-0 z-50 pt-6 px-4 md:px-8 flex items-center justify-between">
            {/* Pill — centered, not full-width */}
            <div className="flex-1 flex justify-center">
                    <div className="flex items-center justify-between w-full max-w-4xl px-8 py-3 rounded-full backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10" style={{ background: 'rgba(15, 23, 42, 0.8)' }}>
                        <a
                            href="/#home"
                            className="text-2xl font-bold gradient-text cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap"
                        >
                            Anas Aftab
                        </a>

                        <div className="hidden md:flex space-x-8 font-medium items-center text-gray-300">
                            <a href="/#home"     className="hover:text-cyan-400 transition-colors">Home</a>
                            <a href="/#skills"   className="hover:text-cyan-400 transition-colors">Skills</a>
                            <a href="/#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
                            <a href="/#about"    className="hover:text-cyan-400 transition-colors">About</a>
                            <a href="/#contact"  className="hover:text-cyan-400 transition-colors">Contact</a>
                        </div>
                    </div>
            </div>

            {/* Theme toggle — absolutely positioned so it doesn't affect pill centering */}
            <div className="absolute right-[48px]">
                <ThemeShifter />
            </div>
        </nav>
    );
};

export default Navbar;
