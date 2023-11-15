import { BlogsRecord } from "@/xata";
import React from "react";
import Image from "next/image";
import moment from "moment";

type BlogListProps = {
    blogs: BlogsRecord[];
};

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-4">
            {blogs.map((blog) => (
                <div
                    key={blog.id}
                    className="flex flex-row gap-4 bg-gray-100 hover:shadow-lg hover:bg-white
                    transition duration-300 ease-in-out cursor-pointer"
                >
                    {blog.blogImages?.map((image) => (
                        <div className="flex items-center justify-center w-[40%] max-h-[220px] overflow-hidden">
                            <Image
                                src={image.url}
                                alt={image.name}
                                width={1200}
                                height={600}
                                className="object-cover h-[220px]"
                            />
                        </div>
                    ))}
                    <div className="flex flex-col px-2 py-4 max-w-[60%] justify-between">
                        <h1 className="font-bold text-xl">{blog.blogTitle}</h1>
                        <p className="text-sm md:text-base mt-2">
                            {blog.blogSecondTitle}
                        </p>
                        <div>
                            <p className="text-sm text-gray-400 mt-2 lg:mt-0 italic">
                                Posted {moment(blog.createdAt).fromNow()}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
