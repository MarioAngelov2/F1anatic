import Container from "@/components/Container";
import { BlogsRecord, getXataClient } from "@/xata";
import moment from "moment";
import Image from "next/image";
import { VscSend } from "react-icons/vsc";

const xataClient = getXataClient();

const BlogDetails = async ({ params }: { params: { blogId: string } }) => {
    const { blogId } = params;
    const blogData = await xataClient.db.blogs.read(blogId);

    return (
        <div className="relative">
            {blogData?.blogImages?.map((image) => (
                <div key={image.id} className="relative overflow-hidden">
                    <div className="h-[500px] flex items-center justify-center relative overflow-hidden">
                        <Image
                            src={image.url}
                            alt={image.name}
                            width={1200}
                            height={500}
                            className="object-cover w-screen min-w-[1000px] max-h-[500px] -z-10 
                            items-center justify-center fixed overflow-hidden"
                        />
                        <div className="absolute inset-auto bg-black opacity-50 w-full h-full"></div>
                    </div>
                    <div
                        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
                        text-white lg:text-center pl-10 pr-10  md:w-[80%] xl:w-[70%] 2xl:w-[50%] w-full"
                    >
                        <h1 className="text-4xl font-bold">
                            {blogData.blogTitle}
                        </h1>
                        <p className="mt-1">
                            {moment(blogData.createdAt).calendar("DD/MM/YYYY")}
                        </p>
                    </div>
                </div>
            ))}
            <div className="w-screen bg-white pt-1 pb-8">
                <Container>
                    <div className="h-full px-4 md:px-8 lg:px-24 z-20 bg-white w-full">
                        <div>
                            <h1 className="mt-8 mb-2 font-bold text-lg">
                                {blogData?.articleOneTitle}
                            </h1>
                            <p>{blogData?.articleOne}</p>
                            {blogData?.articleImage?.map((image) => (
                                <div key={image.id} className="flex justify-center mt-6 max-h-[500px]">
                                    <Image
                                        src={image.url}
                                        alt={image.name}
                                        width={1200}
                                        height={300}
                                        className="object-cover md:h-[500px] w-[100%] md:w-[70%]"
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
                            <p className="text-gray-500 italic text-sm md:text-base mt-4">
                                Източник: Club S1
                            </p>
                        </div>
                        {/* ADD COMMENT SECTION */}
                        <div className="flex flex-col justify-between bg-gray-200 w-full h-32 mt-16 p-3 md:p-6 mb-12">
                            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                                Сподели своя коментар!
                            </h1>
                            <div className="flex flex-row items-center justify-between">
                                <input
                                    type="text"
                                    placeholder="Добави коментар..."
                                    className="w-[90%] border-b-2 border-gray-300 
                                    bg-transparent outline-none px-2 py-1"
                                />
                                <VscSend
                                    size={38}
                                    className="text-gray-400 border-b-2 border-gray-300 py-1
                                    w-20 cursor-pointer hover:text-gray-800 transition duration-300 ease-in-out"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default BlogDetails;
