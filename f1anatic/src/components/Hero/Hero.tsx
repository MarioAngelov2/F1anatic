import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="px-8 lg:px-24 min-h-screen">
            {/* First row */}
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 items-center mt-8">
                <div className="flex-1 mt-12">
                    <h1 className="text-4xl font-bold">
                        Formula 1 Car Release Dates for the 2023 Season
                    </h1>
                </div>
                <div className="flex-1 mt-4 lg:mt-12">
                    <p className="mb-2">
                        Most of the teams has accounced the release date of
                        their new f1 cars and liveries and we have gathered them
                        for you!
                    </p>
                    <div>
                        <button className="btnPrimary group">
                            Read more
                            <FaArrowRightLong
                                className="group-hover:translate-x-1 transition ease-in-out"
                            />
                        </button>
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
                        src="/main.png"
                        alt="main_image"
                        width={2000}
                        height={500}
                        className="object-cover"
                    />
                </div>
            </div>
            <p className="mt-4">Posted 9 months ago</p>
        </div>
    );
};

export default Hero;
