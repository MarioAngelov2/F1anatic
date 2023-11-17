import { BlogsRecord } from "@/xata";
import React from "react";
import Image from "next/image";
import moment from "moment";
import { truncateText } from "@/utils/truncateText";
import Link from "next/link";

type BlogListProps = {
    blogs: BlogsRecord[];
};

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 mx-auto gap-4">
            {blogs.map((blog) => (
                <Link key={blog.id} href={`/blogs/${blog.id}`}>
                    <div
                        className="flex flex-row gap-4 bg-gray-100 hover:shadow-lg hover:bg-white
                        transition duration-300 ease-in-out cursor-pointer"
                    >
                        {blog.blogImages?.map((image) => (
                            <div
                                key={image.id}
                                className="flex items-center justify-center w-[40%] max-h-[220px] overflow-hidden"
                            >
                                <Image
                                    src={image.url}
                                    alt={image.name}
                                    width={1200}
                                    height={600}
                                    className="object-cover h-[220px]"
                                />
                            </div>
                        ))}
                        <div className="flex flex-col px-2 py-2 md:py-4 max-w-[60%] max-h-[300px] justify-between">
                            <h1 className="font-bold text-lg md:text-xl leading-6">
                                {truncateText(blog.blogTitle!, 50)}
                            </h1>
                            <p className="text-xs md:text-base md:mt-2">
                                {truncateText(blog.titePreview!, 90)}
                            </p>
                            <div>
                                <p className="text-xs md:text-sm text-gray-400 mt-2 lg:mt-0 italic">
                                    Публикувано{" "}
                                    {moment(blog.createdAt).format(
                                        "DD MMM YYYY"
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default BlogList;
