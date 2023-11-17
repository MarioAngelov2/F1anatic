import React from "react";
import Container from "../Container";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { getXataClient } from "@/xata";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";

const xataClient = getXataClient();

const HeroBlogs = async () => {
    const blogData = await xataClient.db.blogs.getPaginated({
        pagination: { size: 3 },
    });

    return (
        <Container>
            <div className="px-8 lg:px-24 mt-24 mb-12">
                <div className="flex flex-col gap-12">
                    {blogData.records.map((blog) => (
                        <div
                            key={blog.blogTitle}
                            className="flex flex-col lg:flex-row gap-6 lg:items-start
                            bg-gray-100 lg:bg-transparent"
                        >
                            <div className="flex items-center justify-center lg:max-w-[400px] min-w-[200px] lg:min-w-[400px]">
                                <Image
                                    src={
                                        blog.blogImages
                                            ? blog.blogImages[0].url
                                            : "defaultImage"
                                    }
                                    alt="blogImage"
                                    width={1200}
                                    height={300}
                                    className="object-cover h-[300px]"
                                />
                            </div>
                            <div className="flex flex-col justify-evenly h-[400px] md:h-[300px] px-5 min-w-[200px]">
                                <h1 className="text-xl font-bold">
                                    {truncateText(blog.blogTitle!, 120)}
                                </h1>
                                <p className="">{truncateText(blog.titePreview!, 240)}</p>
                                <Link href={`/blogs/${blog.id}`} className="btnPrimary group w-[200px]">
                                    Прочети повече
                                    <FaArrowRightLong className="group-hover:translate-x-1 transition ease-in-out" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Link
                        href="/blogs"
                        className="flex items-center justify-center gap-2 py-6 w-full bg-gray-100 
                        font-semibold text-gray-400 hover:text-black transition duration-300 ease-in-out
                        group mt-8 mb-6 lg:mb-0 text-base lg:text-lg"
                    >
                        Виж повече статии
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default HeroBlogs;