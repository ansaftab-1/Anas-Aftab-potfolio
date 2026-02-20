import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { useRef } from "react";
import profileImage from "../assets/ans1.jpg";

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
    
    // Parallax effect
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    
    // Mouse Parallax effect
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX - innerWidth / 2) / 25;
        const y = (clientY - innerHeight / 2) / 25;
        setMousePos({ x, y });
    };

    const resetMouse = () => {
        setMousePos({ x: 0, y: 0 });
    };
    
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

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
            ref={ref} 
            id="home" 
            onMouseMove={handleMouseMove}
            onMouseLeave={resetMouse}
            className="min-h-screen flex items-center px-6 pt-24 md:pt-20 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Motion container applies the stagger effect */}
                <motion.div 
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    animate={{ 
                        x: mousePos.x, 
                        y: mousePos.y,
                        rotateX: -mousePos.y * 0.1,
                        rotateY: mousePos.x * 0.1
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    style={{ perspective: 1000 }}
                    className="col-span-1 space-y-6 md:space-y-10"
                >

                    {/* Left - Text content */}
                    
                    <div className="overflow-hidden pb-1">
                        <motion.h1 variants={itemVariant} className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
                            Hi, I'm <span className="gradient-text">Anas</span>
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden pb-1">
                        <motion.h2 variants={itemVariant} className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                            I am a <span 
                                style={{ color: typingColor }} 
                                className="role-text transition-colors duration-300"
                            >
                                {displayedText}
                            </span>
                            <motion.span 
                                className="inline-block ml-3 w-1.5 h-[0.9em] rounded-full translate-y-1"
                                style={{
                                    background: "linear-gradient(to bottom, #00f5ff, #a855f7, #ff3366, #ffcc00)",
                                }}
                                animate={{
                                    scaleY: [1, 1.2, 1],
                                    opacity: [1, 0.6, 1],
                                    filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"]
                                }}
                                transition={{
                                    scaleY: { duration: 1, repeat: Infinity, ease: "easeInOut" },
                                    opacity: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
                                    filter: { duration: 3, repeat: Infinity, ease: "linear" }
                                }}
                            />
                        </motion.h2>
                    </div>

                    <div className="overflow-hidden pb-1">
                        <motion.p variants={itemVariant} className="text-xl sm:text-2xl text-gray-300 max-w-xl leading-relaxed">
                            I create dynamic, responsive websites<br className="hidden sm:inline" />
                            where innovation meets design.
                        </motion.p>
                    </div>

                    <motion.div variants={itemVariant} className="flex flex-wrap gap-5 pt-4">
                        <MagneticButton href="#contact">
                            Contact Me
                        </MagneticButton>
                        <a href="/Anas-cv.pdf" target="_blank" rel="noopener noreferrer"
                            className="px-9 py-4 rounded-xl btn-outline-glow text-lg font-semibold text-white hover:bg-white/10 transition-colors">
                            Resume
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right - DEV glass card with parallax effect */}
                <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: -mousePos.x * 0.5, y: -mousePos.y * 0.5 + 0 }}
                    style={{ y: yParallax, opacity }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="relative hidden md:block"
                >
                    <div className="glass p-6 rounded-3xl border border-cyan-500/20 shadow-2xl shadow-cyan-900/30 transform hover:scale-[1.02] transition-all duration-500 relative group">
                        <div className="relative rounded-2xl overflow-hidden aspect-[3/4] w-full max-w-sm mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                            <img 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                                src={profileImage} 
                                alt="Anas Aftab" 
                            />
                        </div>
                        <motion.p 
                            whileHover={{ 
                                scale: 1.1,
                                textShadow: "0px 0px 8px rgb(168, 85, 247)",
                                color: "#d8b4fe"
                            }}
                            animate={{
                                opacity: [1, 0.5, 1, 0.5, 1], // Blink effect
                                transition: { duration: 1.5, times: [0, 0.2, 0.4, 0.6, 1] } 
                            }}
                            // Only blink when actually hovering or interacting
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 text-xl text-gray-200 font-semibold text-center drop-shadow-md cursor-pointer"
                        >
                            Frontend Developer
                        </motion.p>
                    </div>
                    {/* Subtle glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/5 rounded-3xl blur-3xl -z-10"></div>
                </motion.div>
            </div>
        </section>
    );

};

export default Hero;
