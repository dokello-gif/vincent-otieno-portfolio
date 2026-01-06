import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <Shield className="h-6 w-6 text-brand-orange" />
                        <span className="font-display font-bold text-lg tracking-wider">VINCENT OTIENO</span>
                    </div>

                    <div className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Vincent Otieno. All rights reserved.
                    </div>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        {/* Social placeholders */}
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Facebook</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
