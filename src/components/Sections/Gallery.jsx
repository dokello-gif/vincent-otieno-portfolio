import React from 'react';
import { motion } from 'framer-motion';

import solar1 from '../../assets/images/solar-project.png';
import solar2 from '../../assets/images/solar-project1.png';
import solar3 from '../../assets/images/solar-project2.png';
import solar4 from '../../assets/images/solar-project3.png';
import wiring1 from '../../assets/images/wiring.png';
import wiring2 from '../../assets/images/wiring1.png';
import wiring3 from '../../assets/images/wiring2.png';
import wiring4 from '../../assets/images/wiring3.png';

const Gallery = () => {
    const projects = [
        {
            id: 1,
            image: wiring1,
            title: 'Commercial Wiring Setup',
            category: 'Electrical'
        },
        {
            id: 2,
            image: solar1,
            title: 'Residential Solar Install',
            category: 'Renewable Energy'
        },
        {
            id: 3,
            image: wiring2,
            title: 'Industrial Panel Wiring',
            category: 'Maintenance'
        },
        {
            id: 4,
            image: solar2,
            title: 'Hybrid Solar System',
            category: 'Renewable Energy'
        },
        {
            id: 5,
            image: wiring3,
            title: 'Office Complex Wiring',
            category: 'Electrical'
        },
        {
            id: 6,
            image: solar3,
            title: 'Solar Panel Array',
            category: 'Renewable Energy'
        },
        {
            id: 7,
            image: wiring4,
            title: 'High-Voltage Maintenance',
            category: 'Electrical'
        },
        {
            id: 8,
            image: solar4,
            title: 'Commercial Solar Power',
            category: 'Renewable Energy'
        },
    ];

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-brand-navy mb-4">Recent Projects</h2>
                    <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
                    <p className="mt-4 text-gray-600">Browse our portfolio of successful installations.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ y: -5 }}
                            className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                        >
                            <div className="aspect-w-16 aspect-h-12 h-64 bg-gray-200">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-brand-orange text-sm font-bold uppercase tracking-wider">{project.category}</span>
                                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
