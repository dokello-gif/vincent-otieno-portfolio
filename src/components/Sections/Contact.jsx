import React from 'react';
import { Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-brand-navy mb-4">Get a Quote</h2>
                    <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
                    <p className="mt-4 text-gray-600">Ready to start your project? Contact us today.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="lg:w-1/3 space-y-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-brand-orange">
                            <h3 className="text-xl font-bold text-brand-navy mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-navy/5 p-3 rounded-full">
                                        <Phone className="h-6 w-6 text-brand-orange" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wide font-bold">Call Us</p>
                                        <p className="text-lg font-bold text-brand-navy">+254 727 679 093</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-navy/5 p-3 rounded-full">
                                        <Mail className="h-6 w-6 text-brand-orange" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wide font-bold">Email Us</p>
                                        <p className="text-base font-bold text-brand-navy">vincentotieno166@gmail.com</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:w-2/3">
                        <form className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors" placeholder="+254..." />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-bold text-gray-700 mb-2">Service Needed</label>
                                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors">
                                    <option>Electrical Installation</option>
                                    <option>Solar Power System</option>
                                    <option>Electric Fencing</option>
                                    <option>CCTV / Security</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm h-32 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors" placeholder="Describe your project..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-brand-navy hover:bg-brand-grey text-white font-bold py-4 px-8 rounded-sm transition-colors duration-300 flex items-center justify-center gap-2 uppercase tracking-wider">
                                Send Message <Send className="h-5 w-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
