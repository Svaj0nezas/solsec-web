'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from "next/link";
import { Button } from "../ui/button";
import MenuButton from "./components/MenuButton";
import { ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

const navigationItems = [
    { label: 'Dokumentai', href: '/dokumentai' },
    { label: 'Kontaktai', href: '/kontaktai' },
];

const TėveliamsDropdownItems = [
    { label: 'Konsultacijos', href: '/konsultacijos' },
    { label: 'Saulės elektrinės kibernetinio saugumo auditas', href: '/auditas' },
];

export default function Headerold() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="sticky top-0 z-50">
                <header className="mx-auto w-full  backdrop-blur-lg border-b ">
                    <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 flex min-h-16 items-center justify-between ">
                        <Link
                            href="/"
                            aria-label="Go to homepage"
                            className="normal-text flex items-center font-semibold text-base text-text-primary duration-300 ease-in-out hover:opacity-80"
                        >
                            LogoTipas
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden items-center gap-0 lg:flex text-sm" aria-label="Main navigation">
                        <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="link" className='text-foreground group'>
                                        Paslaugos
                                        <ChevronDown
                                            className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180"
                                            aria-hidden="true"
                                        />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start" className="w-48  bg-card border-none">
                                    {TėveliamsDropdownItems.map((item) => (
                                        <DropdownMenuItem key={item.label} asChild>
                                            <Link href={item.href} className="cursor-pointer">
                                                {item.label}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                        
                            {navigationItems.slice(0, 2).map((item) => (
                                <Button key={item.label} asChild variant="link" className='text-foreground'>
                                    <Link
                                        href={item.href}
                                    >
                                        {item.label}
                                    </Link>
                                </Button>
                            ))}

                            

                            {navigationItems.slice(2).map((item) => (
                                <Button  key={item.label} variant='link' asChild className='text-foreground'>
                                    <Link
                                        href={item.href}
                                    >
                                        {item.label}
                                    </Link>
                                </Button>
                            ))}
                        </nav>

                        <div className="flex items-center gap-3 font-medium">
                            <Button  size='sm' className='rounded-xl px-4'>Registruotis</Button>
                            <div className="lg:hidden">
                                <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Mobile Menu - Absolutely positioned to overlay */}
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
                                duration: 0.3,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                            className="absolute top-full left-0 right-0 lg:hidden overflow-hidden  backdrop-blur-lg "
                        >
                            <nav className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-4 space-y-2">
                                {navigationItems.slice(0, 2).map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{
                                            opacity: 0,
                                            x: -20
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: -20
                                        }}
                                        transition={{
                                            delay: index * 0.05,
                                            duration: 0.2,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                    >
                                        <Button asChild variant="link" className='text-foreground/80 hover:text-foreground w-full justify-start'>
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        </Button>
                                    </motion.div>
                                ))}

                                {/* Tėveliams collapsible in mobile - default open */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: -20
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: -20
                                    }}
                                    transition={{
                                        delay: 2 * 0.05,
                                        duration: 0.2,
                                        ease: [0.4, 0, 0.2, 1]
                                    }}
                                >
                                    <Collapsible defaultOpen className='pl-1'>
                                        <CollapsibleTrigger asChild className='cursor-pointer'>
                                            <Button variant="link" className='w-full justify-start group text-foreground/80 hover:text-foreground data-[state=open]:text-foreground'>
                                                Tėveliams
                                                <ChevronDown
                                                    className="w-4 h-4 ml-1 transition-transform group-data-[state=open]:rotate-180"
                                                    aria-hidden="true"
                                                />
                                            </Button>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="pl-4 space-y-1">
                                            {TėveliamsDropdownItems.map((item) => (
                                                <Button key={item.label} asChild variant="link" className='text-foreground/80 hover:text-foreground w-full justify-start'>
                                                    <Link
                                                        href={item.href}
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </Button>
                                            ))}
                                        </CollapsibleContent>
                                    </Collapsible>
                                </motion.div>

                                {navigationItems.slice(2).map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{
                                            opacity: 0,
                                            x: -20
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: -20
                                        }}
                                        transition={{
                                            delay: (3 + index) * 0.05,
                                            duration: 0.2,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                    >
                                        <Button asChild variant="link" className='text-foreground/80 hover:text-foreground w-full justify-start'>
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        </Button>
                                    </motion.div>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}