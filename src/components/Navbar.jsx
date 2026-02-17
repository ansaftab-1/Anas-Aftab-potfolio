import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed w-full top-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a 
                    href="/#home" 
                    className="text-2xl font-bold gradient-text cursor-pointer hover:opacity-80 transition-opacity"
                >
                    Anas Aftab
                </a>
                <div className="hidden md:flex space-x-10 text-gray-300">
                    <a href="/#home" className="nav-link hover:text-cyan-400 transition-colors">Home</a>
                    <a href="/#skills" className="nav-link hover:text-cyan-400 transition-colors">Skills</a>
                    <a href="/#projects" className="nav-link hover:text-cyan-400 transition-colors">Projects</a>
                    <a href="/#about" className="nav-link hover:text-cyan-400 transition-colors">About</a>
                    <a href="/#contact" className="nav-link hover:text-cyan-400 transition-colors">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
