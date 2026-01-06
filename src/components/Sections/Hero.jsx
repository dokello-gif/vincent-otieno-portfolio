import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import bgImage from '../../assets/images/Background.png';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center text-white overflow-hidden">
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }} // Custom Industrial bg
            >
                <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
            </div>

            <div className="container relative z-10 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-1 w-12 bg-brand-orange"></div>
                        <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Licensed & Insured Technical Services</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Precision Electrical <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            & Security Solutions
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                        Expert installation and maintenance for residential and commercial properties.
                        Specializing in solar power, high-security electric fences, and smart surveillance systems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 text-sm shadow-lg shadow-orange-900/20">
                            Get a Free Quote <ArrowRight className="h-5 w-5" />
                        </a>
                        <a href="#services" className="border border-gray-500 hover:border-white text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 text-sm">
                            View Services
                        </a>
                    </div>

                    {/* Quick trust indicators */}
                    <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-400 bg-black/20 p-4 rounded-lg backdrop-blur-sm inline-flex">
                        <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-brand-orange" /> <span>NCA Accredited</span></div>
                        <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-brand-orange" /> <span>24/7 Support</span></div>
                        <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-brand-orange" /> <span>Safety First</span></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
