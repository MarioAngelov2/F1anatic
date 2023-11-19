"use client";

import React, { useState, useEffect } from "react";
import { useDriversData } from "@/hooks/useDriversData";
import Container from "@/components/Container";
import Image from "next/image";

interface DriverData {
    driverImg: string;
    driverProfileImg: string;
    firstName: string;
    grandPrixEntry: string;
    lastName: string;
    highestPosition: string;
    id: string;
    maxPoints: string;
    nationImg: string;
    placeBirth: string;
    podiums: string;
    points: number;
    position: string;
    racingNumber: string;
    team: string;
    worldChampionships: string;
}

const Drivers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const driverListApiData = useDriversData();

    useEffect(() => {
        if (driverListApiData.length <= 0) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [driverListApiData]);

    return (
        <Container>
            <div className="px-4 py-6 md:px-8 lg:px-14 xl:px-24">
                <div className="mt-6 mb-14">
                    <div className="p-4 border-t-8 border-r-8 border-black rounded-tr-xl">
                        <h1 className="text-4xl font-black md:text-6xl">
                            F1 Drivers 2023
                        </h1>
                    </div>
                    <div className="p-6 mt-8 bg-gray-100 rounded-md">
                        <p>
                            Вижте официалния състав на F1 за този сезон. Пълна
                            информация на пилоти, точки и текущи позиции.
                            Следвайте любимите си F1 пилоти на и извън пистата.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 md:px-0">
                    {driverListApiData.map((driver: DriverData) => (
                        <div
                            key={driver.firstName}
                            className="transition duration-500 ease-in-out border-t-2 border-r-2 border-black rounded-md lg:hover:scale-105"
                        >
                            <div className="px-2">
                                <div className="flex justify-between mt-2">
                                    <span className="text-5xl font-bold">
                                        {driver.position}
                                    </span>
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl font-bold">
                                            {driver.points}
                                        </span>
                                        <span className="w-[60px] font-bold tracking-widest text-center text-white uppercase bg-black rounded-md">
                                            pts
                                        </span>
                                    </div>
                                </div>
                                <hr className="w-[95%] mx-auto mt-4 mb-4" />
                                <div className="flex justify-between mt-2">
                                    <div className="flex flex-col uppercase">
                                        <span>{driver.firstName}</span>
                                        <span className="text-xl font-bold">
                                            {driver.lastName}
                                        </span>
                                    </div>
                                    <div className="w-[50px] flex items-center">
                                        <Image
                                            src={driver.nationImg}
                                            alt="nation_image"
                                            width={200}
                                            height={200}
                                            className="border rounded-md"
                                        />
                                    </div>
                                </div>
                                <hr className="w-[95%] mx-auto mt-4 mb-4" />
                                <div>
                                    <span className="mb-4 text-sm">
                                        {driver.team}
                                    </span>
                                </div>
                                <div className="relative flex justify-end">
                                    <Image
                                        src={driver.driverImg}
                                        alt="driver_image"
                                        width={200}
                                        height={200}
                                    />
                                    <div className="absolute bottom-0 left-0">
                                        <Image
                                            src={driver.racingNumber}
                                            alt="racing_number"
                                            width={70}
                                            height={70}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Drivers;
