import React from 'react';


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
        <section id="skills" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
                    Skills
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <div 
                            key={index} 
                            className="glass p-8 rounded-2xl transition-all duration-300"
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
                        </div>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default Skills;
