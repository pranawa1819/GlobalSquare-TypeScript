import { useState } from "react";

function LoginPage() {
    const [username, setUserName] = useState<string>("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string>("");
    const [succcess, setSuccess] = useState<string>("");

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!username.trim() || !password.trim()){
            setError("Username or Password is empty!!");

        }
        else if(username!== "pranawa"){
            setError("Incorrect Username");
        }

        else if(password !== "pranawa@123"){
            setError("Incorrect Password");
        }

        
        else{
            setError("");
            setSuccess("SuccessFully Logged In");
            setUserName("");
            setPassword("");
            
        }
        
        
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen ">
                <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
                    <h1 className="text-3xl font-bold text-center text-amber-600 mb-2">Login Form</h1>
                    <p className="text-center text-gray-600 mb-6">Please enter your details to login</p>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {succcess && <p className="text-green-500 text-center">{succcess}</p>}
                    <form  onSubmit={(e)=>handleSubmit(e)} className="space-y-4">
                        <label className="block text-gray-700 font-medium mb-1">UserName</label>
                        <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                        <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300">LogIn</button>
                    </form>

                </div>
            </div>
        </>
    );
};

export default LoginPage;