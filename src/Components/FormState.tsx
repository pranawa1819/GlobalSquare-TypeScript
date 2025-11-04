import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
type FormValues = {
    name: string,
    password: string
}

function FormStateExample() {
    const form = useForm<FormValues>();
    const { register, formState, handleSubmit , reset,watch} = form;

    const onsubmit = (data: FormValues) => {
        console.log("UnRegister Form Data Submitted:", data);
        reset();
    }
    const name = watch("name"); 
    const { errors, isSubmitSuccessful, submitCount, isSubmitting, isDirty } = formState;
   


    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold text-center mt-20">Login Form</h1>


                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className="flex flex-col justify-center mt-10 w-full shadow-2xl p-5 rounded">
                        <label className="block text-gray-700 font-medium mb-1">Username</label>
                        <input type="text" placeholder="Enter name"{...register("name", {
                            required: "Name is required",
                            validate: {
                                name: (value) => value == "Pranawa" || "Incorrect Name"
                            }
                        })} className="w-full border border-gray-300 rounded-lg p-2 mb-5 " />
                        { name && <p>You are typing: {name}</p>}
                        <p className="text-red-500">{errors.name?.message}</p>

                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input type="password" placeholder="Enter name"{...register("password", {
                            required: "Password is required",
                            validate: {
                                password: (value) => value == "pranawa123" || "Incorrect Password"
                            }
                        })} className="w-full border border-gray-300 rounded-lg p-2 mb-5 " />
                        <p className="text-red-500">{errors.password?.message}</p>

                        <button type="submit" className="bg-amber-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-amber-600 mt-5 ">Logged In</button>
                    </div>

                    <div className="mt-5">
                        <p>isSubmitSuccessful: {isSubmitSuccessful ? "True" : "False"}</p>
                        <p>submitCount: {submitCount}</p>
                        <p>isSubmitting: {isSubmitting ? "True" : "False"}</p>
                        <p>isDirty: {isDirty ? "True" : "False"}</p>
                    </div>
                </form >
                <DevTool control={form.control} />

            </div >

        </>
    );


};

export default FormStateExample;