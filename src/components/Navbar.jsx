import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed w-full top-0 z-50 pt-6 px-4 md:px-0">
            <div className="max-w-5xl mx-auto px-8 py-3 flex justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <a 
                    href="/#home" 
                    className="text-2xl font-bold gradient-text cursor-pointer hover:opacity-80 transition-opacity"
                >
                    Anas Aftab
                </a>
                <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
                    <a href="/#home" className="hover:text-cyan-400 hover:scale-105 transition-all">Home</a>
                    <a href="/#skills" className="hover:text-cyan-400 hover:scale-105 transition-all">Skills</a>
                    <a href="/#projects" className="hover:text-cyan-400 hover:scale-105 transition-all">Projects</a>
                    <a href="/#about" className="hover:text-cyan-400 hover:scale-105 transition-all">About</a>
                    <a href="/#contact" className="hover:text-cyan-400 hover:scale-105 transition-all">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
