import {  useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";


type RegistrationMutationProps = {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    phone: number,

};

function RegistrationMutation() {
    const[message,setMessage]=useState<string>('');
    const form = useForm<RegistrationMutationProps>();
    const { register, formState, handleSubmit,reset, watch } = form;
    
    const password = watch("password");
    const { errors } = formState;

    const DataPost =async(data: RegistrationMutationProps)=>{
        const url="https://petstore.swagger.io/v2/user";
        const response = await axios.post(url,data);
        return response.data;
    }

    const{mutate,isSuccess,isError}=useMutation({
        mutationKey:["registration"],
        mutationFn:DataPost,

        

        onSuccess: ()=>{
            setMessage("Registration Successful");
            reset();
        },

        onError:()=>{
            setMessage("Registration Failed. Please try again.");
        }
    });
    


    const onSubmit = (data: RegistrationMutationProps) => {
        console.log("Registration Data Submitted:", data);
        mutate(data)

        
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center  p-10 m-10 ">
                <h1 className="text-2xl text-pink-600 font-bold">Registration Mutation Component</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>

                        <label className="block text-gray-700 font-medium mt-5 mb-1">UserName</label>
                        <input type="text" {...register("username", { required: "Name is required" })} className="w-full border border-gray-400 rounded-lg p-2 mb-5  focus:outline-none focus:ring-2 focus:ring-pink-400" />
                        {errors.username && <p className="text-red-500">{errors.username?.message}</p>}

                        <div className="flex justify-around">
                            <label className="block text-gray-700 font-medium mb-1">FirstName</label>
                            <label className="block text-gray-700 font-medium mb-1">LastName</label>
                        </div>
                        <div className="flex justify-evenly">

                            <input type="text" {...register("firstName", { required: "First Name is required" })} className="w-full border border-gray-400 rounded-lg px-2 py-1 mb-5  focus:outline-none focus:ring-2 focus:ring-pink-400" />

                            <input type="text" {...register("lastName", { required: "Last Name is required" })} className="w-full border border-gray-400 rounded-lg ml-5 px-2 py-1 mb-5  focus:outline-none focus:ring-2 focus:ring-pink-400" />
                        </div>
                        <div className="flex justify-between">
                            {errors.firstName && <p className="text-red-500">{errors.firstName?.message}</p>}
                            {errors.lastName && <p className="text-red-500">{errors.lastName?.message}</p>}
                        </div>



                        <label className="block text-gray-700 font-medium mb-1 ">Email</label>
                        <input type="email" {...register("email", {
                            required: "Email is required", pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address"
                            }
                        })} className="w-full border border-gray-400 rounded-lg p-2 mb-5  focus:outline-none focus:ring-2 focus:ring-pink-400" />
                        {errors.email && <p className="text-red-500">{errors.email?.message}</p>}

                        <label className="block text-gray-700 font-medium mb-1 ">Phone Number</label>
                        <input type="number" {...register("phone", {
                            
                            required: "Phone number is required",
                            pattern: {
                                value: /^\d{10}$/,
                                message: "Invalid phone number"
                            }
                        })} className="w-full border border-gray-400 rounded-lg p-2 mb-5  focus:outline-none focus:ring-2 focus:ring-pink-400" />
                        {errors.phone && <p className="text-red-500">{ errors.phone?.message}</p>}

                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input type="password" {...register("password", { required: "Password is required", maxLength:6 })} className="w-full border border-gray-400 rounded-lg p-2 mb-5   focus:outline-none focus:ring-2 focus:ring-pink-400" />
                        {errors.password && <p className="text-red-500">{errors.password?.message}</p>}

                        <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
                        <input type="password" {...register("confirmPassword", { required: "Confirm Password is required", 
                            validate: {
                                confirmPassword: (value) => value == password || "Password does not match"
                            }
                         })} className="w-full border border-gray-400 rounded-lg p-2 mb-5 focus:outline-none focus:ring-2 focus:ring-pink-400" />
                        {errors.confirmPassword && <p className="text-red-500">{ errors.confirmPassword?.message}</p>}

                        <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300">SignUp</button>
                    </div>
                </form >
                {message && (
                    <p className={`mt-4 text-lg font-semibold ${isSuccess ? "text-green-600" : isError ? "text-red-600" : "" }`}>{message} </p>
                )}
            </div >
        </>
    );
};

export default RegistrationMutation;