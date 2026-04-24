import React from "react";
import ThemeShifter from "./ThemeShifter";

const Navbar = () => {
    return (
        <nav className="fixed w-full top-0 z-50 pt-6 px-4 md:px-8 flex items-center justify-between">
            {/* Pill — centered, not full-width */}
            <div className="flex-1 flex justify-center">
                <div
                    className="px-8 py-3 flex items-center gap-8 rounded-full backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
                    style={{ background: 'var(--bg-nav)', border: '1px solid var(--border-color)' }}
                >
                    <a
                        href="/#home"
                        className="text-2xl font-bold gradient-text cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        Anas Aftab
                    </a>

                    <div className="hidden md:flex space-x-8 font-medium items-center" style={{ color: 'var(--text-secondary)' }}>
                        <a href="/#home"     className="hover:text-cyan-400 hover:scale-105 transition-all">Home</a>
                        <a href="/#skills"   className="hover:text-cyan-400 hover:scale-105 transition-all">Skills</a>
                        <a href="/#projects" className="hover:text-cyan-400 hover:scale-105 transition-all">Projects</a>
                        <a href="/#about"    className="hover:text-cyan-400 hover:scale-105 transition-all">About</a>
                        <a href="/#contact"  className="hover:text-cyan-400 hover:scale-105 transition-all">Contact</a>
                    </div>
                </div>
            </div>

            {/* Theme toggle — right of the pill, same vertical axis */}
            <ThemeShifter />
        </nav>
    );
};

export default Navbar;
