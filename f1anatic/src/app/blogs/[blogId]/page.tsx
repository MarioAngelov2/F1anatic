import Container from "@/components/Container";
import { BlogsRecord, getXataClient } from "@/xata";
import moment from "moment";
import Image from "next/image";

const xataClient = getXataClient();

const BlogDetails = async ({ params }: { params: { blogId: string } }) => {
    const { blogId } = params;
    const blogData = await xataClient.db.blogs.read(blogId);

    return (
        <div className="relative">
            {blogData?.blogImages?.map((image) => (
                <div className="relative">
                    <div className="h-[500px] flex items-center justify-center relative">
                        <Image
                            src={image.url}
                            alt={image.name}
                            width={1200}
                            height={500}
                            className="object-cover w-screen min-w-[1000px] max-h-[500px] -z-10 
                            items-center justify-center"
                        />
                        <div className="absolute inset-0 bg-black opacity-50 w-full h-full"></div>
                    </div>
                    <div className="absolute top-52 right-0 left-0 text-white text-center pl-10 pr-10">
                        <h1 className="text-4xl font-bold">
                            {blogData.blogTitle}
                        </h1>
                        <p className="mt-1">
                            {moment(blogData.createdAt).calendar()}
                        </p>
                    </div>
                </div>
            ))}
            <Container>
                <div className="h-screen px-8 lg:px-24">
                    <h1 className="mt-8 mb-2 font-bold text-lg">{blogData?.blogSecondTitle}</h1>
                    <p>{blogData?.blogArticle}</p>
                </div>
            </Container>
        </div>
    );
};

export default BlogDetails;
