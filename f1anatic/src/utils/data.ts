import image1 from "../../public/main (1).png";
import image2 from "../../public/main (2).png";
import image3 from "../../public/main (3).png";

export const navLinks = [
    { name: ".блог", path: "/blogs" },
    { name: ".пилоти", path: "/drivers" },
    { name: ".отбори", path: "/" },
    { name: ".контакти", path: "/" },
];

export const webLinks = [
    { name: "Всички статии", path: "/blogs" },
    { name: "Пилоти", path: "/drivers" },
    { name: "Отбори", path: "/" }, 
    { name: "Профил", path: "/" },
    { name: "Вход", path: "/sign-in" },
    { name: "Регистрация", path: "/sign-up" },
];

export const webLinks2 = [
    { name: "За нас", path: "/" },
    { name: "Контакти", path: "/" },
    { name: "SEO карта", path: "/" },
];

export const blogPosts = [
    {
        title: "US Grand Prix Race Review",
        summary:
            "The Circuit of The Americas provided us with some heated battles... Let's take a closer look at how the race unfolded",
        image: image1,
    },
    {
        title: "Japanese Grand Prix Race Review",
        summary:
            "Can Max be crowned 2-time World Champion despite the hectic conditions?",
        image: image2,
    },
    {
        title: "Singapore Grand Prix Race Review",
        summary:
            "How the drivers handled the physically most challenging track in wet conditions",
        image: image3,
    },
];
