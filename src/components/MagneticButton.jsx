import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = "", href, ...props }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    const content = (
        <motion.div
            style={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`relative rounded-xl btn-glow overflow-hidden ${className}`}
        >
            <div className="relative z-10 px-9 py-4 text-white text-lg font-semibold shadow-lg group overflow-hidden">
                <div className="relative flex flex-col items-center">
                    {/* First Text: Slides Up */}
                    <span className="block transform group-hover:-translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
                        {children}
                    </span>
                    
                    {/* Second Text: Slides In from Bottom */}
                    <span className="absolute block transform translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
                        {children}
                    </span>
                </div>
            </div>
        </motion.div>
    );

    // If it's a link
    if (href) {
        return (
            <a 
                href={href} 
                ref={ref} 
                onMouseMove={handleMouse} 
                onMouseLeave={reset}
                className="inline-block relative z-10"
                {...props}
            >
                {content}
            </a>
        );
    }
    
    // If it's a button/div
    return (
        <div 
            ref={ref} 
            onMouseMove={handleMouse} 
            onMouseLeave={reset}
            className="inline-block relative z-10 cursor-pointer"
            {...props}
        >
            {content}
        </div>
    );
};

export default MagneticButton;
