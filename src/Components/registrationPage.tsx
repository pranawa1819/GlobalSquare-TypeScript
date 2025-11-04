import { useState } from "react"

type Data={
    firstName:string,
    lastName:string,
    email:string,   
    phone:string,
    password:string,
    confirmPassword:string
}

function RegistrationPage() {
    const [data, setData] = useState<Data>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    })

    const [error, setError] = useState({
        errorfirstName: "",
        errorlastName: "",
        erroremail: "",
        errorphone: "",
        errorpassword: "",
        errorconfirmPassword: ""

    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let isValid = true;

        if (!data.firstName.trim()) {
            setError((prevError) => ({ ...prevError, errorfirstName: "First Name is required" }));
            isValid = false;
        }

        if (!data.lastName.trim()) {
            setError((prevError) => ({ ...prevError, errorlastName: "Last Name is required" }));
            isValid = false;
        }

        if (!data.email.trim()) {
            setError((prevError) => ({ ...prevError, erroremail: "Email is required" }));
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            setError((prevError) => ({ ...prevError, erroremail: "Email is invalid" }));
            isValid = false;
        }

        if (!data.phone.trim()) {
            setError((prevError) => ({ ...prevError, errorphone: "Phone number is required" }));
            isValid = false;

        } else if (!/^\d{10}$/.test(data.phone)) {
            setError((prevError) => ({ ...prevError, errorphone: "Phone number is invalid" }));
            isValid = false;
        }

        if (!data.password.trim()) {
            setError((prevError) => ({ ...prevError, errorpassword: "Password is required" }));
            isValid = false;
        } else if (data.password.length < 6) {
            setError((prevError) => ({ ...prevError, errorpassword: "Password must be at least 6 characters" }));
            isValid = false;
        }


        if (data.password !== data.confirmPassword) {
            setError((prevError) => ({ ...prevError, errorconfirmPassword: "Passwords do not match" }));
            isValid = false;
        }



        if (isValid) {
            setError({
                errorfirstName: "",
                errorlastName: "",
                erroremail: "",
                errorphone: "",
                errorpassword: "",
                errorconfirmPassword: ""
            });
            
            alert("Registered Successfully ");
            console.log("User Data:", data);
            setData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
            });
        }
     
    };
    return (
        <>
            <div className="flex items-center justify-center min-h-screen ">
                <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
                    <h1 className="text-3xl font-bold text-center text-amber-600 mb-2">SignUp Form</h1>
                    <p className="text-center text-gray-600 mb-6">Please fill the details</p>

                    <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">

                        <div className="flex justify-around">
                            <label className="block text-gray-700 font-medium mb-1">FirstName</label>
                            <label className="block text-gray-700 font-medium mb-1">LastName</label>
                        </div>
                        <div className="flex justify-evenly">

                            <input type="text" value={data.firstName} onChange={(e) => setData({ ...data, firstName: e.target.value })} className="w-full border border-gray-400 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-400" />

                            <input type="text" value={data.lastName} onChange={(e) => setData({ ...data, lastName: e.target.value })} className="w-full border border-gray-400 rounded-lg ml-5 px-2 py-1focus:outline-none focus:ring-2 focus:ring-amber-400" />
                        </div>
                        <div className="flex justify-between">
                            {error.errorfirstName && <p className="text-red-500">{error.errorfirstName}</p>}
                            {error.errorlastName && <p className="text-red-500">{error.errorlastName}</p>}
                        </div>

                        {/* <label className="block text-gray-700 font-medium mb-1">UserName</label>
                        <input type="email" value={data.email} onChange={(e) => setData({...data, lastName: e.target.value})} className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />*/}

                        <label className="block text-gray-700 font-medium mb-1 ">Email</label>
                        <input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                        {error.erroremail && <p className="text-red-500">{error.erroremail}</p>}

                        <label className="block text-gray-700 font-medium mb-1 ">Phone Number</label>
                        <input type="number" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                        {error.errorphone && <p className="text-red-500">{error.errorphone}</p>}

                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input type="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                        {error.errorpassword && <p className="text-red-500">{error.errorpassword}</p>}

                        <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
                        <input type="password" value={data.confirmPassword} onChange={(e) => setData({ ...data, confirmPassword: e.target.value })} className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                        {error.errorconfirmPassword && <p className="text-red-500">{error.errorconfirmPassword}</p>}

                        <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300">SignUp</button>
                    </form>
                </div>

            </div >

        </>
    );

};

export default RegistrationPage