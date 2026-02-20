import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-black/40">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto glass p-10 rounded-3xl"
            >
                <h2 className="text-4xl font-bold text-center mb-10 gradient-text">Contact</h2>

                <form className="space-y-6 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="w-full p-4 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white"
                    ></textarea>
                    <button className="w-full btn-primary py-3 rounded-lg font-semibold text-white">
                        Send Message
                    </button>
                </form>

                <div className="mt-10 text-center">
                    <p className="text-gray-400">ansaftab68@gmail.com</p>
                    <div className="flex justify-center gap-8 mt-6 text-3xl text-gray-400">
                        <a href="https://github.com/ansaftab-1" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github hover:text-cyan-400 transition-colors"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin hover:text-cyan-400 transition-colors"></i>
                        </a>
                        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter hover:text-cyan-400 transition-colors"></i>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
