import Container from "@/components/Container";
import Hero from "@/components/Hero/Hero";
import HeroBlogs from "@/components/HeroBlogs/HeroBlogs";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Container>
                <Hero />
                <HeroBlogs />
            </Container>
        </div>
    );
}
