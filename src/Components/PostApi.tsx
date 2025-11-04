import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";



type FormValues = {
    title: string,
    body: string,
    userId: number
}

function PostApi() {
    const form = useForm<FormValues>();
    const { register, formState, handleSubmit, reset } = form;
    const [message, setMessage] = useState<string>('');

    const postData = async (data: FormValues) => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await axios.post(url, data);
        return response.data;
    }

    const { mutate , isError, isSuccess } = useMutation({
        mutationKey: ["post"],
        mutationFn: postData,

        onSuccess: () => {
            setMessage(" Data posted successfully!");
            reset();
        },


        onError: () => {
            setMessage(" Failed to post data. Please try again.");
        },

    });

    const onsubmit = (data: FormValues) => {
        console.log("Form Data Submitted:", data);
        setMessage('');
        mutate(data);
    }

    const { errors } = formState;



    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold text-center mt-20">Simple Form</h1>


                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className="flex flex-col justify-center mt-10 w-full shadow-2xl p-5 rounded">
                        <label className="block text-gray-700 font-medium mb-1">Title</label>
                        <input type="text" placeholder="Enter title"{...register("title", { required: "Title is required", })} className="w-full border border-gray-300 rounded-lg p-2 mb-5 " />
                        <p className="text-red-500">{errors.title?.message}</p>

                        <label className="block text-gray-700 font-medium mb-1">Body</label>
                        <input type="text" placeholder="Enter body"{...register("body", { required: "Body is required", })} className="w-full border border-gray-300 rounded-lg p-2 mb-5 " />
                        <p className="text-red-500">{errors.body?.message}</p>

                        <label className="block text-gray-700 font-medium mb-1">User ID</label>
                        <input type="text" placeholder="Enter user id"{...register("userId", { valueAsNumber: true, required: "User Id is required", })} className="w-full border border-gray-300 rounded-lg p-2 mb-5 " />
                        <p className="text-red-500">{errors.userId?.message}</p>

                        <button type="submit" className="bg-pink-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-pink-600 mt-5 ">Submit</button>
                    </div>


                </form >
                {message && (
                    <p className={`mt-4 text-lg font-semibold ${isSuccess ? "text-green-600" : isError ? "text-red-600" : "" }`}>{message} </p>
                )}
                <DevTool control={form.control} />

            </div >
        </>
    );
};

export default PostApi;