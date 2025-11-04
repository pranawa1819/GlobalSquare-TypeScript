import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
type FormValues = {
    name: string,
    email: string,
    channel: string,
    social: {
        twitter: string,
        facebook: string
    },
    phoneNumbers: string[],

    phNumbers: {
        number: string
    }[]
}
function YoutubeForm() {
    const form = useForm<FormValues>();

    const { register, handleSubmit, formState,reset } = form;
    const { errors } = formState;
    // const {name, ref, onChange, onBlur}=register("name");

    const { fields, append, remove } = useFieldArray({
        name: "phNumbers",
        control: form.control
    });
    const onSubmit = (data: FormValues) => {
        console.log("Form Data Submitted:", data);
        reset();
    }
    return (
        <>
            <div className="flex items-center justify-center mt-10">
                <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center text-amber-600 mb-5">Youtube Form Component</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="block text-gray-700 font-medium mb-1">UserName</label>
                        {/*<input type="text" id="name" name={name} ref={ref} onChange={onchange} onBlur={onBlur} className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />*/}
                        <input type="text" id="name" {...register("name", {
                            required: "Username is required",
                        })}
                            className="w-full border border-gray-300 rounded-lg p-2 mb-5 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                        <p className="text-red-500">{errors.name?.message}</p>

                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input type="email" id="email" {...register("email", {
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address"
                            },
                            required: "Email is required",
                        })}
                            className="w-full border border-gray-300 rounded-lg p-2 mb-5 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                        <p className="text-red-500">{errors.email?.message}</p>

                        <label className="block text-gray-700 font-medium mb-1">Channel</label>
                        <input type="text" id="channel" {...register("channel", {
                            required: "Channel is required",
                        })}
                            className="w-full border border-gray-300 rounded-lg p-2 mb-5 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                        <p className="text-red-500">{errors.channel?.message}</p>

                        <label className="block text-gray-700 font-medium mb-1">Twitter</label>
                        <input type="text" id="twitter" {...register("social.twitter", {
                            required: "Twitter is required",
                        })}
                            className="w-full border border-gray-300 rounded-lg p-2 mb-5 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                        <p className="text-red-500">{errors.social?.twitter?.message}</p>

                        <label className="block text-gray-700 font-medium mb-1">Facebook</label>
                        <input type="text" id="facebook" {...register("social.facebook", {
                            required: "Facebook is required",
                        })}
                            className="w-full border border-gray-300 rounded-lg p-2 mb-5 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                        <p className="text-red-500">{errors.social?.facebook?.message}</p>

                        <label className="block text-gray-700 font-medium mb-1">Primary Phone Number</label>
                        <input type="text" id="phoneNumber" {...register("phoneNumbers.0", {
                            pattern: {
                                value: /^\d{10}$/,
                                message: "Invalid phone number"
                            },
                            required: "Phone Number is required",
                        })}
                            className="w-full border border-gray-300 rounded-lg p-2 mb-5 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                        <p className="text-red-500">{errors.phoneNumbers?.message}</p>


                        <label className="block text-gray-700 font-medium mb-1">Secondary Phone Number</label>
                        <input type="text" id="phoneNumber" {...register("phoneNumbers.1", {
                            pattern: {
                                value: /^\d{10}$/,
                                message: "Invalid phone number"
                            },
                            required: "Phone Number is required",
                        })}
                            className="w-full border border-gray-300 rounded-lg p-2 mb-5 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                        <p className="text-red-500">{errors.phoneNumbers?.message}</p>

                        <label className="block text-gray-700 font-medium mb-1">List of Phone Number</label>
                        <div>
                            {fields.map((field, index) => {
                                return (
                                    <div key={field.id} className="flex mb-2">
                                        <input type="text" {...register(`phNumbers.${index}.number` as const)} className=" border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"  />
                                        {index >= 0 && (
                                            <button type="button" className="ml-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-lg shadow-md transition duration-300" onClick={() => remove(index)}>Remove</button>
                                        )}


                                    </div>

                                )
                            })}
                            <button type="button" className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded-lg shadow-md transition duration-300" onClick={() => append({ number: "" })}>Add Phone Number</button>
                        </div>

                        <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 mt-5 rounded-lg shadow-md transition duration-300">Submit</button>
                    </form>
                    <DevTool control={form.control} />
                </div>
            </div>
        </>
    );
};

export default YoutubeForm;