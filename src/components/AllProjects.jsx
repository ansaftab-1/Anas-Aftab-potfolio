import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AllProjects = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "Interactive Portfolio Website",
            tags: ["React.js", "TailwindCSS", "Framer Motion"],
            link: "#",
            category: "small"
        },
        {
            title: "GTA VI Fan Website",
            description: "Immersive fan experience website for the upcoming GTA VI",
            tags: ["React", "Vite", "Tailwind CSS"],
            link: "/projects/gtavi/index.html",
            category: "complete"
        },
        {
            title: "Loruki Cloud Website",
            description: "Fully responsive cloud hosting landing page",
            tags: ["HTML", "CSS", "JavaScript", "Responsive"],
            link: "https://loruki-website-master.netlify.app",
            category: "complete"
        },
        {
            title: "Haircut Landing Page",
            description: "Modern barber shop / haircut service landing page",
            tags: ["HTML", "CSS", "Responsive"],
            link: "https://haircutpage.netlify.app",
            category: "complete"
        }
    ];

    const completeProjects = projects.filter(p => p.category === "complete");
    const smallProjects = projects.filter(p => p.category === "small");

    return (
        <div className="bg-[#0a0f1c] text-white font-inter min-h-screen">
            <Navbar />
            <div className="pt-24 px-6 max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold gradient-text mb-2">/Projects</h1>
                    <p className="text-gray-400">List of my projects</p>
                </div>

                {/* Complete Projects Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-cyan-400">#complete-projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {completeProjects.map((project, index) => (
                            <div key={index} className="project-card group">
                                <div className="absolute top-0 left-0 w-full h-48 bg-gray-800/50 flex items-center justify-center overflow-hidden">
                                     {/* Placeholder Image or Pattern */}
                                    <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-cyan-900/40 group-hover:scale-110 transition-transform duration-500"></div>
                                </div>
                                <div className="mt-48 pt-6 relative z-10">
                                    <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-400">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="border border-white/10 px-2 py-1 rounded hover:border-cyan-500/50 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-6 text-sm line-clamp-2">
                                        {project.description}
                                    </p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                                       className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 rounded transition-colors text-sm font-medium">
                                        Live <i className="fas fa-arrow-right transform -rotate-45 group-hover:rotate-0 transition-transform"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Small Projects Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-cyan-400">#small-projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {smallProjects.map((project, index) => (
                            <div key={index} className="project-card group">
                                <div className="mt-8 relative z-10"> {/* Adjusted top margin since no image placeholder for small projects maybe? Or keep consistent */}
                                     {/* Simplified card for small projects */}
                                    <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-400">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="border border-white/10 px-2 py-1 rounded hover:border-cyan-500/50 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-6 text-sm">
                                        {project.description}
                                    </p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                                       className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 rounded transition-colors text-sm font-medium">
                                        Live <i className="fas fa-arrow-right transform -rotate-45 group-hover:rotate-0 transition-transform"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllProjects;
