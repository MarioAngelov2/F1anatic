import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BlogsRecord, getXataClient } from "@/xata";
import { truncateText } from "@/utils/truncateText";
import moment from "moment";
import Link from "next/link";

const xataClient = getXataClient();

const Hero = async () => {
    const blogData = await xataClient.db.blogs.read("rec_clb6b6kh3pss3b0febb0");

    return (
        <div className="px-8 lg:px-24 h-full">
            {/* First row */}
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 items-center mt-8">
                <div className="flex-1 lg:mt-12">
                    <h1 className="text-4xl font-bold">
                        {truncateText(blogData?.blogTitle!, 68)}
                    </h1>
                </div>
                <div className="flex-1 mt-4 lg:mt-12">
                    <p className="mb-2">
                        {truncateText(blogData?.titePreview!, 95)}
                    </p>
                    <div>
                        <Link href={`/blogs/${blogData?.id}`} className="btnPrimary group w-[200px]">
                            Прочети повече
                            <FaArrowRightLong className="group-hover:translate-x-1 transition ease-in-out" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Second row */}
            <div
                className="flex flex-col gap-4 items-center justify-center mt-12 
                max-w-[1440px] w-full overflow-hidden"
            >
                <div className="flex items-center justify-center max-h-[300px] lg:max-h-[420px]">
                    <Image
                        src={
                            blogData
                                ? blogData?.blogImages![0].url
                                : "defaultImage"
                        }
                        alt="main_image"
                        width={2000}
                        height={500}
                        className="object-cover"
                    />
                </div>
            </div>
            <p className="mt-4 text-xs md:text-base">Публикувано {moment(blogData?.createdAt).format("DD/MM/YYYY")}</p>
        </div>
    );
};

export default Hero;
