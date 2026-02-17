import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 bg-black/40">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-between items-end mb-16"
                >
                    <h2 className="text-4xl font-bold gradient-text">Projects</h2>
                    <Link to="/projects" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                        View all <span className="group-hover:translate-x-1 transition-transform">~~&gt;</span>
                    </Link>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-14">
                    {/* Project 1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0 }}
                        className="project-card"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-3">Number Guessing Game</h3>
                            <p className="text-gray-400 mb-6">
                                Fun interactive guessing game built with HTML, CSS & JavaScript
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6 text-sm">
                                <span className="px-3 py-1 bg-white/10 rounded-full">HTML</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full">CSS</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full">JavaScript</span>
                            </div>
                            <a href="https://number-gusesses.netlify.app" target="_blank" rel="noopener noreferrer"
                                className="project-btn px-6 py-2 rounded-lg inline-block">
                                Live →
                            </a>
                        </div>
                    </motion.div>

                    {/* Project 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="project-card"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-3">Loruki Cloud Website</h3>
                            <p className="text-gray-400 mb-6">
                                Fully responsive cloud hosting landing page
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6 text-sm">
                                <span className="px-3 py-1 bg-white/10 rounded-full">HTML</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full">CSS</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full">JavaScript</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full">Responsive</span>
                            </div>
                            <a href="https://loruki-website-master.netlify.app" target="_blank" rel="noopener noreferrer"
                                className="project-btn px-6 py-2 rounded-lg inline-block">
                                Live →
                            </a>
                        </div>
                    </motion.div>

                    {/* Project 3 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="project-card"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-3">Haircut Landing Page</h3>
                            <p className="text-gray-400 mb-6">
                                Modern barber shop / haircut service landing page
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6 text-sm">
                                <span className="px-3 py-1 bg-white/10 rounded-full">HTML</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full">CSS</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full">JavaScript</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full">Responsive</span>
                            </div>
                            <a href="https://haircutpage.netlify.app" target="_blank" rel="noopener noreferrer"
                                className="project-btn px-6 py-2 rounded-lg inline-block">
                                Live →
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
