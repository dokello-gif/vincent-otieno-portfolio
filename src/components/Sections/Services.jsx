import React from 'react';
import { Zap, Sun, Shield, Grid, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Electrical Installation',
            description: 'Complete wiring, maintenance, and safety inspections for residential and commercial buildings.',
            icon: <Zap className="h-10 w-10 text-brand-orange" />,
        },
        {
            id: 2,
            title: 'Solar Power Systems',
            description: 'Design and installation of efficient solar energy solutions to reduce costs and ensure reliability.',
            icon: <Sun className="h-10 w-10 text-brand-orange" />,
        },
        {
            id: 3,
            title: 'Electric Fencing',
            description: 'High-voltage security fencing installation with alarm integration for maximum perimeter safety.',
            icon: <Shield className="h-10 w-10 text-brand-orange" />,
        },
        {
            id: 4,
            title: 'Gypsum & Lighting',
            description: 'Modern gypsum ceiling designs integrated with custom LED lighting solutions.',
            icon: <Grid className="h-10 w-10 text-brand-orange" />,
        },
        {
            id: 5,
            title: 'CCTV Surveillance',
            description: 'Smart surveillance setup with remote monitoring capabilities for home and business.',
            icon: <Video className="h-10 w-10 text-brand-orange" />,
        },
    ];

    return (
        <section id="services" className="py-20 bg-slate-100 dark:bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">Our Core Services</h2>
                    <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Delivering technical excellence and reliability across all electrical and security disciplines.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-transparent hover:border-brand-orange group"
                        >
                            <div className="mb-6 p-4 bg-brand-navy/5 dark:bg-brand-light/5 rounded-full inline-block group-hover:bg-brand-orange/10 transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-3">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
