import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["JavaScript", "C++"]
        },
        {
            title: "Frameworks",
            skills: ["React.js", "TailwindCSS"]
        },
        {
            title: "Tools",
            skills: ["VSCode", "GitHub", "Figma"]
        },
        {
            title: "Other",
            skills: ["HTML", "CSS", "Tailwind"]
        }
    ];

    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-16 gradient-text"
                >
                    Skills
                </motion.h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-cyan-400">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span 
                                        key={idx} 
                                        className="px-4 py-2 rounded-lg skill-tag-glow"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
