import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
    const [particles, setParticles] = useState([]);

    // SVG paths for floating icons
    const icons = [
        // Code </>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>,
        // Git branch
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 19.5v-15m0 0l-3.75 3.75M7.5 4.5l3.75 3.75M21 15v3.75a2.25 2.25 0 01-2.25 2.25h-3.75m-6-15h3.75a2.25 2.25 0 012.25 2.25v3.75" />
        </svg>,
        // Terminal
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    ];

    useEffect(() => {
        const generateParticles = () => {
            const colors = ['#00bfff', '#a855f7', '#ec4899', '#ffffff', '#fbbf24', '#10b981', '#ff5722'];
            // Increase proportion of small dots (circle) to keep it clean, making large elements (icon, wireframe) rare accents
            const shapes = [
                'circle', 'circle', 'circle', 'circle', 'circle', 'circle', 
                'triangle', 'star', 
                'icon', 'wireframe'
            ]; 
            
            // Reduced total particles from 60 to 30 so it doesn't look messy
            const newParticles = Array.from({ length: 30 }).map((_, i) => {
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                
                let size;
                if (shape === 'wireframe') {
                    size = Math.random() * 100 + 150; // 150px to 250px
                } else if (shape === 'icon') {
                    size = Math.random() * 15 + 40; // 40px to 55px
                } else if (shape === 'circle') {
                    size = Math.random() * 5 + 2; // small dots
                } else {
                    size = Math.random() * 10 + 6; // small stars/triangles
                }

                return {
                    id: i,
                    shape,
                    iconIndex: shape === 'icon' ? Math.floor(Math.random() * icons.length) : null,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    size,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    animationDuration: Math.random() * 20 + 30, // Much slower movement (30s to 50s) for an elegant feel
                    xMovement: (Math.random() - 0.5) * 200, 
                    yMovement: (Math.random() - 0.5) * 200, 
                    rotation: shape === 'wireframe' ? Math.random() * 45 - 20 : Math.random() * 360,
                    rotationSpeed: (Math.random() - 0.5) * 60 // Even slower spin
                };
            });
            setParticles(newParticles);
        };
        generateParticles();
    }, []);

    return (
        <div className="fixed inset-0 z-[-10] overflow-hidden bg-gradient-to-br from-[#0f111a] via-[#1a1b35] to-[#120e24]">
            {/* Subtle Grid Background to match image exactly */}
            <div 
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
            ></div>

            {/* Glowing Accent Orbs in Background (Right side purple glow as in image) */}
            <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-purple-600/15 rounded-full blur-[150px] mix-blend-screen pointer-events-none translate-x-1/3"></div>

            <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] z-0"></div>
            
            {particles.map((particle) => {
                if (particle.shape === 'wireframe') {
                    // Large tilted wireframe card from the image
                    return (
                        <motion.div
                            key={particle.id}
                            className="absolute z-[-6] rounded-[2rem] border border-blue-400/20 shadow-[0_0_15px_rgba(96,165,250,0.1)]"
                            style={{
                                left: particle.left,
                                top: particle.top,
                                width: particle.size,
                                height: particle.size * 1.2, // Rectangular
                            }}
                            animate={{
                                x: [0, particle.xMovement, 0],
                                y: [0, particle.yMovement, 0],
                                opacity: [0.6, 0.1, 0.6],
                                rotate: [particle.rotation, particle.rotation + (particle.rotationSpeed / 2)] 
                            }}
                            transition={{
                                duration: particle.animationDuration * 1.5, // Slower for big objects
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    );
                }

                if (particle.shape === 'icon') {
                    // Glassmorphic Icon Card styled like the purple icons in the image
                    return (
                        <motion.div
                            key={particle.id}
                            className="absolute z-[-5] flex items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-900/20 backdrop-blur-sm shadow-[0_0_15px_rgba(192,132,252,0.15)] text-purple-300"
                            style={{
                                left: particle.left,
                                top: particle.top,
                                width: particle.size,
                                height: particle.size,
                            }}
                            animate={{
                                x: [0, particle.xMovement, 0],
                                y: [0, particle.yMovement, 0],
                                opacity: [0.9, 0.4, 0.9],
                                rotate: [particle.rotation, particle.rotation + (particle.rotationSpeed / 4)]
                            }}
                            transition={{
                                duration: particle.animationDuration,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div style={{ transform: `scale(${particle.size / 60})` }}>
                                {icons[particle.iconIndex]}
                            </div>
                        </motion.div>
                    );
                }

                // Standard Shapes (Circle, Triangle, Star)
                let shapeStyle = {
                    backgroundColor: particle.color,
                    filter: `drop-shadow(0 0 ${particle.size / 2}px ${particle.color}) opacity(0.8)`,
                };

                if (particle.shape === 'triangle') {
                    shapeStyle.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
                } else if (particle.shape === 'star') {
                    shapeStyle.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
                } else {
                    shapeStyle.borderRadius = '50%';
                }

                return (
                    <motion.div
                        key={particle.id}
                        className="absolute z-[-5]"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            width: particle.size,
                            height: particle.size,
                            ...shapeStyle
                        }}
                        animate={{
                            x: [0, particle.xMovement, 0],
                            y: [0, particle.yMovement, 0],
                            opacity: [0.8, 0.2, 0.8],
                            scale: [1, 1.3, 1],
                            rotate: [particle.rotation, particle.rotation + particle.rotationSpeed, particle.rotation + particle.rotationSpeed * 2]
                        }}
                        transition={{
                            duration: particle.animationDuration,
                            repeat: Infinity,
                            ease: "easeInOut", // Smoother movement
                        }}
                    />
                );
            })}
        </div>
    );
};

export default BackgroundAnimation;
