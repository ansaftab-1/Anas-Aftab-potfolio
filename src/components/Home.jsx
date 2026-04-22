import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="text-white font-inter min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Projects />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
