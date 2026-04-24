import React, { useState, useEffect } from "react";

import MagneticButton from "./MagneticButton";
import { useRef } from "react";
import profileImage from "../assets/ans1.png";
import cvFile from "../assets/Anas Resume.pdf";

const texts = [
    { text: "CS Student", color: "#a855f7" },
    { text: "Frontend Developer", color: "#00f5ff" },
];

const Hero = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const [typingColor, setTypingColor] = useState(texts[0].color);
    
    // Removed Mouse Parallax effect variables and handlers
    useEffect(() => {
        const currentTextObj = texts[textIndex];
        const currentString = currentTextObj.text;
        
        // Typing speed logic
        let typingSpeed = 80;
        if (isDeleting) typingSpeed = 40; // faster deleting

        const handleTyping = () => {
            setTypingColor(currentTextObj.color);

            if (!isDeleting) {
                // Typing forward
                if (charIndex < currentString.length) {
                    setDisplayedText(currentString.substring(0, charIndex + 1));
                    setCharIndex(prev => prev + 1);
                } else {
                    // Finished typing, wait then delete
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting
                if (charIndex > 0) {
                    setDisplayedText(currentString.substring(0, charIndex - 1));
                    setCharIndex(prev => prev - 1);
                } else {
                    // Finished deleting, move to next text
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);

    }, [charIndex, isDeleting, textIndex, texts]); // Run effect when these change

    // Animation variants
    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariant = {
        hidden: { y: "100%" },
        visible: { 
            y: 0, 
            transition: { 
                duration: 1, 
                ease: [0.25, 1, 0.5, 1] 
            }
        }
    }; 

    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center px-6 pt-36 md:pt-40 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                <div 
                    className="col-span-1 space-y-6 md:space-y-10"
                >
                    {/* Left - Text content */}
                    
                    <div className="overflow-hidden pb-1">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
                            Hi, I'm <span className="gradient-text">Anas</span>
                        </h1>
                    </div>

                    <div className="overflow-hidden pb-1">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                            I am a <span 
                                style={{ color: typingColor }} 
                                className="role-text transition-colors duration-300"
                            >
                                {displayedText}
                            </span>
                            <span 
                                className="inline-block ml-3 w-1.5 h-[0.9em] rounded-full translate-y-1"
                                style={{
                                    background: "linear-gradient(to bottom, #00f5ff, #a855f7, #ff3366, #ffcc00)",
                                }}
                            />
                        </h2>
                    </div>

                    <div className="overflow-hidden pb-1">
                        <p className="text-xl sm:text-2xl max-w-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            Code with character.... <br className="hidden sm:inline" />
                            Design with intent.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-5 pt-4">
                        <MagneticButton href="#contact">
                            Contact Me
                        </MagneticButton>
                        <a href={cvFile} target="_blank" rel="noopener noreferrer"
                            className="px-9 py-4 rounded-xl btn-outline-glow text-lg font-semibold text-white hover:bg-white/10 transition-colors">
                            Resume
                        </a>
                    </div>
                </div>

                {/* Right - Profile Image Container */}
                <div className="relative hidden md:flex justify-center items-center">
                    <div className="relative group">
                        {/* Outer glowing ring */}
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
                        
                        {/* Profile Image */}
                        <div className="relative rounded-full overflow-hidden w-64 h-64 sm:w-72 sm:h-72 ring-4 ring-offset-4 ring-cyan-500/20 bg-transparent" style={{ ringColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
                            <img 
                                className="w-full h-full object-cover object-[15%_40%] transform group-hover:scale-110 transition-transform duration-700" 
                                src={profileImage} 
                                alt="Anas Aftab" 
                            />
                            {/* Subtle inner shadow/gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none"></div>
                        </div>
                        
                        {/* Floating Badge */}
                        <div className="absolute -bottom-2 -right-4 glass px-5 py-2.5 rounded-full border border-purple-500/30 shadow-lg shadow-purple-900/20 group-hover:-translate-y-2 transition-transform duration-300 z-20">
                            <p className="text-sm font-semibold text-gray-200">
                                Frontend Developer
                            </p>
                        </div>
                    </div>
                    
                    {/* Large ambient glow behind the circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-full blur-[80px] -z-10"></div>
                </div>
            </div>
        </section>
    );

};

export default Hero;
