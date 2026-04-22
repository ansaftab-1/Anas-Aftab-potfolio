import React from 'react';


const About = () => {
    return (
        <section id="about" className="py-24 px-6">
            <div 
                className="max-w-5xl mx-auto text-center glass p-12 rounded-3xl"
            >
                <h2 className="text-4xl font-bold mb-8 gradient-text">About Me</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    Hello, I'm Anas!<br /><br />
                    I'm a self-taught Frontend developer and a Computer Science student based in Islamabad, Pakistan.<br /><br />
                    I specialize in building responsive, user-friendly websites from scratch, transforming ideas into seamless digital experiences.
                </p>
            </div>
        </section>
    );
};

export default About;
