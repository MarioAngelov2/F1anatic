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
                    <div className="h-[500px] flex items-center justify-center relative overflow-hidden">
                        <Image
                            src={image.url}
                            alt={image.name}
                            width={1200}
                            height={500}
                            className="object-cover w-screen min-w-[1000px] max-h-[500px] -z-10 
                            items-center justify-center fixed"
                        />
                        <div className="absolute inset-auto bg-black opacity-50 w-full h-full"></div>
                    </div>
                    <div
                        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
                        text-white lg:text-center pl-10 pr-10 w-full md:w-[80%] xl:w-[70%] 2xl:w-[50%]"
                    >
                        <h1 className="text-4xl font-bold">
                            {blogData.blogTitle}
                        </h1>
                        <p className="mt-1">
                            {moment(blogData.createdAt).calendar()}
                        </p>
                    </div>
                </div>
            ))}
            <div className="w-screen bg-white pt-1">
                <Container>
                    <div className="min-h-screen px-4 md:px-8 lg:px-24 z-20 bg-white w-full">
                        <h1 className="mt-8 mb-2 font-bold text-lg">
                            {blogData?.articleOneTitle}
                        </h1>
                        <p>{blogData?.articleOne}</p>
                        {blogData?.articleImage?.map((image) => (
                            <div className="mt-6 max-h-[600px]">
                                <Image
                                    src={image.url}
                                    alt={image.name}
                                    width={1200}
                                    height={300}
                                    className="object-cover md:h-[600px]"
                                />
                            </div>
                        ))}
                        <h2 className="mt-8 mb-2 font-bold text-lg">
                            {blogData?.articleTwoTitle}
                        </h2>
                        <p>{blogData?.articleTwo}</p>
                        <h3 className="mt-8 mb-2 font-bold text-lg">
                            {blogData?.ArticleThreeTitle}
                        </h3>
                        <p>{blogData?.ArticleThree}</p>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default BlogDetails;
