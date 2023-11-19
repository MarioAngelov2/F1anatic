import { useState, useEffect } from "react";

interface DriverData {
    DriverStandings: {
        driverId: string;
        position: string;
        points: number;
        Constructors: {
            name: string;
        }[];
        Driver: {
            driverId: string;
            givenName: string;
            familyName: string;
        };
    }[];
}

export const useDriversData = () => {
    const [driver, setDriver] = useState([]);

    function getDriversStandings() {
        return fetch(
            `https://ergast.com/api/f1/2023/driverStandings.json`
        ).then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error(
                    `getDriversStandings failed with status: ${res.status}`
                );
            }
        });
    }

    useEffect(() => {
        getDriversStandings().then((result) => {
            setDriver(
                Object.values(result.MRData.StandingsTable.StandingsLists)
            );
        });
    }, []);

    const driverList = [
        {
            id: "",
            position: "",
            points: "",
            team: "",
            racingNumber: "",
            firstName: "",
            lastName: "",
            nationImg: "",
            driverImg: "",
        },
    ];

    const driverListApiData: any = [];

    driverList.forEach((driverList) => {
        driver.forEach((driverData: DriverData) => {
            if (driverData.DriverStandings) {
                const standings = driverData.DriverStandings;

                standings.forEach((data) => {
                    if (data.Driver.driverId === "max_verstappen") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/MAXVER01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Netherlands.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png",
                            driverProfileImg:
                                "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.1024.medium.jpg/1677069646195.jpg",
                            podiums: "80",
                            maxPoints: "2080.5",
                            grandPrixEntry: "166",
                            worldChampionships: "2",
                            highestPosition: "1",
                            placeBirth: "Hasselt, Belgium",
                        });
                    } else if (data.Driver.driverId === "perez") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/SERPER01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Mexico.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "alonso") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/FERALO01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Spain.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "hamilton") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/LEWHAM01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/United%20Kingdom.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "sainz") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/CARSAI01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Spain.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "stroll") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/LANSTR01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Canada.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "russell") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/GEORUS01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/United%20Kingdom.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "norris") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/LANNOR01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/United%20Kingdom.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "hulkenberg") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/NICHUL01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Germany.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "leclerc") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/CHALEC01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Monaco.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "bottas") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/VALBOT01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Finland.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "ocon") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/ESTOCO01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/France.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "piastri") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/OSCPIA01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Australia.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "gasly") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/PIEGAS01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/France.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "zhou") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/GUAZHO01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/China.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "tsunoda") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/YUKTSU01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Japan.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "kevin_magnussen") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/KEVMAG01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Denmark.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "albon") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/ALEALB01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Thailand.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "sargeant") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/LOGSAR01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/United%20States.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LOGSAR01_Logan_Sargeant/logsar01.png.transform/2col-retina/image.png",
                        });
                    } else if (data.Driver.driverId === "ricciardo") {
                        driverListApiData.push({
                            ...driverList,
                            id: data.Driver.driverId,
                            position: data.position,
                            points: data.points,
                            team: data.Constructors[0].name,
                            firstName: data.Driver.givenName,
                            lastName: data.Driver.familyName,
                            racingNumber:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/2018-redesign-assets/drivers/number-logos/DANRIC01.png.transform/2col-retina/image.png",
                            nationImg:
                                "https://media.formula1.com/d_default_fallback_image.png/content/dam/fom-website/flags/Australia.jpg.transform/2col-retina/image.jpg",
                            driverImg:
                                "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col-retina/image.png",
                        });
                    }
                });
            }
        });
    });
    return driverListApiData;
};
