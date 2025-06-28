'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);

    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    checkSize();
    handleScroll();

    window.addEventListener('resize', checkSize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut', delay: 0.3 + i * 0.1 },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      height: 'auto',
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      height: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: 'easeIn' },
    },
  };

  if (!isMounted) {
    return null;
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="fixed top-4 left-0 w-full z-50 px-4 "
    >
      <motion.div
        className={`max-w-6xl mx-auto rounded-full border transition-all duration-300 ${
          scrolled
            ? 'border-gray-200 bg-gradient-to-br from-[#4B0000]/90 via-[#800000]/90 to-[#B22222]/90 backdrop-blur-md shadow-lime-50'
            : 'border-transparent'
        }`}
        whileHover={
          !scrolled
            ? {
                background: 'linear-gradient(to bottom right, rgba(75, 0, 0, 0.8), rgba(128, 0, 0, 0.8), rgba(178, 34, 34, 0.8))',
                backdropFilter: 'blur(4px)',
              }
            : {}
        }
      >
        <div className="px-6 py-3 flex justify-between items-center h-16">
          <motion.div
            variants={logoVariants}
            className={`tracking-tight overflow-hidden`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
             {isMobile ? (
      <Image src="/assets/logo.png" alt="Company Logo" width={50} height={50} />
    ) : (
        <Image src="/assets/big-logo.png" alt="Company Logo" width={150} height={150} />
      )}
          </motion.div>

          {isMobile ? (
            <motion.button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          ) : (
            <ul className="flex gap-8 text-white font-medium">
              {['Home', 'About', 'Contact'].map((item, i) => (
                <motion.li
                  key={item}
                  custom={i}
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.1, color: '#F5F5F5' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-gray-200 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="mt-2"
          >
            <motion.div
              className="max-w-6xl mx-auto rounded-lg bg-gradient-to-br from-[#4B0000]/95 via-[#800000]/95 to-[#B22222]/95 backdrop-blur-md shadow-lg"
            >
              <div className="p-4 flex flex-col gap-2">
                {['Home', 'About', 'Contact'].map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-2 text-white rounded-md hover:bg-[#800000]/80 transition-all duration-200"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.1 } }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;