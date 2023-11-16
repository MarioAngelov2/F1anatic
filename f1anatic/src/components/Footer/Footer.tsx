import React from "react";
import Container from "../Container";
import { webLinks, webLinks2 } from "@/utils/data";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-gray-800 py-12 z-30">
            <Container>
                <div className="text-white px-8 lg:px-24 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0">
                    <div className="justify-self-start">
                        <h1 className="text-2xl font-extrabold tracking-wide">
                            .f1anatics
                        </h1>
                        <p className="text-sm mb-4">More than fans</p>
                        <p className="text-sm text-gray-400">
                            We are not only fans of F1. We are obsessed with all
                            the details and information that make up our beloved
                            sport, we analyse situations to understand and make
                            You understand the world of F1 better with each
                            article. We are F1anatics, we are more then fans.
                        </p>
                    </div>
                    <div className="lg:justify-self-center">
                        <ul className="flex flex-col gap-2 text-sm">
                            {webLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        className="footerLinks"
                                        href={link.path}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:justify-self-center">
                        <ul className="flex flex-col gap-2 text-sm">
                            {webLinks2.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        className="footerLinks"
                                        href={link.path}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:justify-self-end">
                        <h1 className="text-lg font-bold mb-1">
                            Subscribe to our newsletter
                        </h1>
                        <input
                            placeholder="enter your email"
                            type="text"
                            className="px-2 w-full h-8 bg-gray-600 outline-none text-sm"
                        />
                        <button className="subscribeBtn">Subscribe</button>
                    </div>
                </div>
                <hr className="w-[90%] mx-auto mt-12 mb-12" />
                <div className="flex flex-col justify-center items-center">
                <div className="text-white flex flex-row items-center justify-center gap-4">
                    <FaYoutube size={30} />
                    <FaFacebook size={24} />
                    <FaInstagram size={25} />
                    <BsTwitterX size={23} />
                </div>
                <p className="text-gray-400 text-sm mt-3">Check out our social media accounts for more.</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
