import React from 'react';
import { ShieldCheck, Clock, Award, PenTool } from 'lucide-react';

const WhyChooseMe = () => {
    const features = [
        {
            icon: <ShieldCheck className="h-8 w-8 text-white" />,
            title: "Safety First Compliance",
            description: "Strict adherence to NCA & EPRA safety standards on every project."
        },
        {
            icon: <Clock className="h-8 w-8 text-white" />,
            title: "On-Time Completion",
            description: "We respect your time. Projects are delivered within the agreed timeline."
        },
        {
            icon: <Award className="h-8 w-8 text-white" />,
            title: "Certified Expertise",
            description: "Fully licensed technicians with years of hands-on field experience."
        },
        {
            icon: <PenTool className="h-8 w-8 text-white" />,
            title: "Quality Materials",
            description: "We only use authentic, high-grade materials for durability."
        }
    ];

    return (
        <section id="why-me" className="py-20 bg-brand-navy text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">

                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Vincent Powers?</h2>
                        <div className="h-1 w-20 bg-brand-orange mb-8 mx-auto lg:mx-0"></div>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            In an industry where safety and precision are non-negotiable, we stand out by delivering certified, high-quality work that gives you peace of mind. We don't cut corners—we build systems that last.
                        </p>
                        <a href="#contact" className="inline-block border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider transition-all duration-300">
                            Schedule Consultation
                        </a>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((item, idx) => (
                            <div key={idx} className="bg-white/5 p-6 rounded-md backdrop-blur-sm border border-white/10 hover:border-brand-orange/50 transition-colors">
                                <div className="mb-4 bg-brand-orange/20 p-3 rounded-full w-fit">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;
