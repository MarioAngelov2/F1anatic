"use client";

import Container from "@/components/Container";
import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

const AddBlog = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FieldValues>();

    return (
        <Container>
            <div className="flex flex-col items-center px-8 lg:px-24 mt-10 min-h-screen">
                <h1 className="text-3xl font-bold mb-8">Create New Blog</h1>
                <form
                    action="POST"
                    className="flex flex-col gap-4 w-[100%] lg:w-[70%] mb-12"
                >
                    <input
                        type="text"
                        placeholder="Blog title"
                        className="formInput"
                    />
                    <input
                        type="text"
                        placeholder="Title preview"
                        className="formInput"
                    />
                    <input
                        type="text"
                        placeholder="Article 1 Title"
                        className="formInput"
                    />
                    <textarea
                        placeholder="Article 1"
                        className="formInput h-[120px]"
                    />
                    <input
                        type="text"
                        placeholder="Article 2 Title"
                        className="formInput mt-4"
                    />
                    <textarea
                        placeholder="Article 2"
                        className="formInput h-[120px]"
                    />
                    <label>
                        Upload photo(s)
                        <input type="file" hidden />
                    </label>
                    <input
                        type="text"
                        placeholder="Article 3 Title"
                        className="formInput mt-4"
                    />
                    <textarea
                        placeholder="Article 3"
                        className="formInput h-[120px]"
                    />
                    <input
                        type="text"
                        placeholder="Article 4 Title"
                        className="formInput mt-4"
                    />
                    <textarea
                        placeholder="Article 4"
                        className="formInput h-[120px]"
                    />
                </form>
                    <button className="btnPrimary w-[80%] lg:w-[20%] mb-12">Create</button>
            </div>
        </Container>
    );
};

export default AddBlog;
