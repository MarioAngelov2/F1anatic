import image1 from "../../public/main (1).png";
import image2 from "../../public/main (2).png";
import image3 from "../../public/main (3).png";

export const navLinks = [
    { name: ".blogs", path: "/" },
    { name: ".drivers", path: "/" },
    { name: ".teams", path: "/" },
    { name: ".contact", path: "/" },
    { name: ".login", path: "/sign-in" },
];

export const webLinks = [
    { name: "All Blogs", path: "/" },
    { name: "Current Drivers", path: "/" },
    { name: "Current Teams", path: "/" },
    { name: "Profile", path: "/" },
    { name: "Login", path: "/" },
    { name: "Sign Up", path: "/" },
];

export const webLinks2 = [
    { name: "About us", path: "/" },
    { name: "Contact us", path: "/" },
    { name: "SEO map", path: "/" },
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
