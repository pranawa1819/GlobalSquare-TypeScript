
import { useForm } from "react-hook-form";

type FormValues = {
    name: string,
    showDetails: boolean,
    extraDetails: string
}

function UnRegister() {
    const form = useForm<FormValues>();
    const { register, unregister, handleSubmit, watch } = form;

    const onsubmit = (data: FormValues) => {
        console.log("UnRegister Form Data Submitted:", data);
    }
    const showDetails = watch("showDetails");

 

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold text-center mt-20">This is UnRegister Component</h1>


                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className="flex flex-col justify-center mt-10 w-full shadow-2xl p-5 rounded-lg">
                        <label className="block text-gray-700 font-medium mb-1">Username</label>
                        <input type="text" placeholder="Enter name"{...register("name", { required: "Name is required" })} className="w-full border border-gray-300 rounded-lg p-2 mb-5 " />

                        <div className="flex gap-5">
                            <label className="block text-gray-700 font-medium mb-1">Show Extra Details</label>
                            <input type="checkbox" {...register("showDetails")} className="border-2 ml-2 w-6 h-6 " />
                        </div>
                        {showDetails && (<>
                            <label className="block text-gray-700 font-medium mb-1"> Extra Details</label>
                            <input type="text" {...register("extraDetails")} placeholder="Add extra details" className="mb-5  w-full border border-gray-300 rounded-lg p-2" />
                            <button type="button" onClick={() => unregister("extraDetails")} className="bg-amber-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-amber-600 ">UnRegister Extra Details</button>
                        </>)}
                       

                        <button type="submit" className="bg-amber-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-amber-600 mt-5 ">Submit</button>
                    </div>
                </form >

            </div >

        </>
    );


};

export default UnRegister;