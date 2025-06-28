import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center space-y-4">
                <p
                    className="transition-transform duration-500 hover:scale-105"
                >
                    &copy; {new Date().getFullYear()} Shifayah. All rights reserved.
                </p>
              
                <div className="flex justify-center space-x-4">
                    <a
                        href="#"
                        className="transition-transform duration-500 hover:scale-110"
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="#"
                        className="transition-transform duration-500 hover:scale-110"
                        aria-label="Twitter"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="#"
                        className="transition-transform duration-500 hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="#"
                        className="transition-transform duration-500 hover:scale-110"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;