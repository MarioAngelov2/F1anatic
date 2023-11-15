import React, { useState, useEffect } from "react";
import Container from "@/components/Container";
import { BlogsRecord, getXataClient } from "@/xata";
import BlogList from "./BlogList";

const Blogs = async () => {
    const xataClient = getXataClient();
    const blogsData = await xataClient.db.blogs.getMany();

    return (
        <div className="px-8 mt-7 h-screen">
            <Container>
                <BlogList blogs={blogsData} />
            </Container>
        </div>
    );
};

export default Blogs;
