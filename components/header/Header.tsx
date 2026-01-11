'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import MenuButton from './components/MenuButton';
import { Button } from '../ui/button';

const menuItems = [
    { label: 'Paslaugos', href: '/services' },
    { label: 'Studio', href: '/contacts' },
    { label: 'The Map', href: '/' },
];

// Main Header Component
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed w-full flex justify-center pt-4 px-4 sm:px-6 md:px-8 z-2 top-0">
            <motion.header
                className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl inset-shadow-sm inset-shadow-white/50 shadow-xl"
                animate={{
                    height: isMenuOpen ? 'auto' : 'auto'
                }}
                transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                }}
            >
                {/* Top Bar */}
                <div className="flex items-center justify-between px-4 py-2.25">
                    logotipas
                    <div className="flex items-center ">
                        <Button variant='link' className=' text-white hover:no-underline font-inter'>Services</Button>
                          <Button variant='link' className=' text-white hover:no-underline font-inter'>Pricing</Button>
                        <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
                    </div>
                </div>

                {/* Expanded Menu Content */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{
                                height: 0,
                                opacity: 0
                            }}
                            animate={{
                                height: 'auto',
                                opacity: 1
                            }}
                            exit={{
                                height: 0,
                                opacity: 0
                            }}
                            transition={{
                                duration: 0.4,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                        >
                            <div className="pb-6">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{
                                            opacity: 0,
                                            y: -15
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -15
                                        }}
                                        transition={{
                                            delay: index * 0.03,
                                            duration: 0.25,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                        whileHover={{
                                            scale: 0.95,
                                            transition: { duration: 0.15 }
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="block px-4 sm:px-6 md:px-8 py-3 text-white hover:text-white/50 transition-all duration-300 text-xl font-semibold text-center hover:tracking-wider"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </div>
    );
}