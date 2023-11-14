import React from "react";
import Container from "../Container";
import Image from "next/image";
import { blogPosts } from "@/utils/data";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const HeroBlogs = () => {
    return (
        <Container>
            <div className="px-8 lg:px-24 mt-24 mb-12">
                <div className="flex flex-col gap-12">
                    {blogPosts.map((blog) => (
                        <div
                            key={blog.title}
                            className="flex flex-col lg:flex-row gap-6 items-center lg:items-start
                            bg-gray-100 lg:bg-transparent"
                        >
                            <div className="lg:max-w-[400px] min-w-[300px] lg:min-w-[400px]">
                                <Image
                                    src={blog.image}
                                    alt="blogImage"
                                    width={1200}
                                    height={300}
                                />
                            </div>
                            <div className="flex flex-col px-5 min-w-[300px] ">
                                <h1 className="lg:mt-7 mb-2 text-xl font-bold">
                                    {blog.title}
                                </h1>
                                <p className="">{blog.summary}</p>
                                <button className="btnPrimary group mt-8 mb-6 lg:mb-0">
                                    Read more
                                    <FaArrowRightLong className="group-hover:translate-x-1 transition ease-in-out" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 py-6 w-full bg-gray-100 
                        font-semibold text-gray-400 hover:text-black transition duration-300 ease-in-out
                        group mt-8 mb-6 lg:mb-0 text-base lg:text-lg"
                    >
                        View More Blogs
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default HeroBlogs;
