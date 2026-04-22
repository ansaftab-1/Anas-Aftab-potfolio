import React, { useEffect, useRef } from 'react';
import webGLFluidEnhanced from 'webgl-fluid';

const Contact = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            webGLFluidEnhanced(canvasRef.current, {
                SIM_RESOLUTION: 128,
                DYE_RESOLUTION: 1024,
                CAPTURE_RESOLUTION: 512,
                DENSITY_DISSIPATION: 1,
                VELOCITY_DISSIPATION: 0.2,
                PRESSURE: 0.8,
                PRESSURE_ITERATIONS: 20,
                CURL: 30,
                SPLAT_RADIUS: 0.25,
                SPLAT_FORCE: 6000,
                SHADING: true,
                COLORFUL: true,
                COLOR_UPDATE_SPEED: 10,
                PAUSED: false,
                BACK_COLOR: { r: 10, g: 10, b: 15 },
                TRANSPARENT: false,
                BLOOM: true,
                BLOOM_ITERATIONS: 8,
                BLOOM_RESOLUTION: 256,
                BLOOM_INTENSITY: 0.8,
                BLOOM_THRESHOLD: 0.6,
                BLOOM_SOFT_KNEE: 0.7,
                SUNRAYS: true,
                SUNRAYS_RESOLUTION: 196,
                SUNRAYS_WEIGHT: 1.0,
            });
        }
    }, []);

    return (
        <section id="contact" className="relative py-24 px-6 min-h-screen flex items-center justify-center">
            {/* Content box with fluid simulation inside */}
            <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-[#0f0f13]">
                
                {/* Fluid Simulation Canvas */}
                <canvas 
                    ref={canvasRef} 
                    className="absolute inset-0 w-full h-full object-cover z-0"
                ></canvas>

                {/* Content overlay */}
                <div className="relative z-10 p-10 bg-black/40 w-full h-full pointer-events-none flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Contact</h2>

                    <form className="space-y-6 max-w-lg mx-auto w-full pointer-events-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 bg-[#0a0a0a]/90 border border-white/5 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white text-sm"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-4 bg-[#0a0a0a]/90 border border-white/5 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white text-sm"
                        />
                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="w-full p-4 bg-[#0a0a0a]/90 border border-white/5 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white text-sm resize-none"
                        ></textarea>
                        <button className="w-full bg-[#00bfff] hover:bg-[#0099cc] transition-colors py-3 rounded-lg font-bold text-white mt-4">
                            Send Message
                        </button>
                    </form>

                    <div className="mt-10 text-center pointer-events-auto">
                        <p className="text-gray-400 text-sm">ansaftab68@gmail.com</p>
                        <div className="flex justify-center gap-8 mt-6 text-2xl text-gray-400">
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
                </div>
            </div>
        </section>
    );
};

export default Contact;
