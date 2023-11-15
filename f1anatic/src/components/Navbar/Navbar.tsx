"use client";

import React, { useState } from "react";
import Container from "../Container";
import Link from "next/link";
import { navLinks } from "@/utils/data";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useUser, UserButton } from "@clerk/nextjs";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const { user, isLoaded } = useUser();

    const handleMoblieMenu = () => {
        setIsMobile((prev) => !prev);
    };

    const menuVariants = {
        initial: {
            scaleY: 0,
            transformOrigin: "top",
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.4,
                ease: [0.12, 0, 0.39, 0],
            },
            transformOrigin: "top",
        },
        exit: {
            scaleY: 0,
            transition: {
                duration: 0.4,
                ease: [0.12, 0, 0.39, 1],
            },
            transformOrigin: "top",
        },
    };

    return (
        <div className="bg-gray-800 py-6 sticky top-0 z-30">
            <Container>
                <div className="flex flex-row text-white px-8 lg:px-24">
                    <div className="flex flex-row justify-between w-full">
                        <Link
                            href="/"
                            className="text-2xl font-extrabold text-gray-400
                            hover:text-gray-300 transition duration-300 ease-in-out"
                        >
                            .f1
                            <span
                                className="text-white tracking-wide
                            hover:text-gray-300 transition duration-300 ease-in-out"
                            >
                                anatics
                            </span>
                        </Link>
                        <ul className="hidden lg:flex gap-12">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        className="linkStyle"
                                        href={link.path}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            {isLoaded && user ? (
                                <UserButton />
                            ) : (
                                <li>
                                    <Link className="linkStyle" href="/sign-in">
                                        .login
                                    </Link>
                                </li>
                            )}
                        </ul>
                        <div className="lg:hidden flex flex-row-reverse gap-6 items-center">
                            <RxHamburgerMenu
                                onClick={handleMoblieMenu}
                                size={32}
                                className="lg:hidden"
                            />
                            {isLoaded && user ? (
                                <UserButton />
                            ) : (
                                <Link href="/sign-in">.login</Link>
                            )}
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    {isMobile && (
                        <motion.div
                            variants={menuVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className={`fixed overflow-hidden h-screen w-screen top-0 bg-gray-800 
                        text-white`}
                        >
                            <div className="flex justify-end px-8 py-4">
                                <IoCloseOutline
                                    size={32}
                                    onClick={handleMoblieMenu}
                                />
                            </div>
                            <ul className="flex flex-col justify-center text-center text-4xl font-bold gap-4 mt-12">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.path}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </div>
    );
};

export default Navbar;
