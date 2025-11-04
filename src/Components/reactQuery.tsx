import {useQuery} from "@tanstack/react-query";
import axios from "axios";

function Home(){
    const {data , isLoading , isError, refetch} = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      const response = await axios.get("https://catfact.ninja/fact");
      return response.data;
    },
  });

  if(isLoading){
    return <h1 className="text-center font-bold text-2xl mt-20 ">Loading....</h1>
  }

  if(isError){
    return <h1 className="text-red-500"> Sorry! There is an error.</h1>
  }
  
    return(
        <>
        <div className="flex flex-col justify-between mt-10 ">
          <h1 className="font-mono text-2xl text-center ">Generate Cat Fact</h1>
            <h1 className="font-mono text-2xl text-center text-green-700 mt-5">Cat fact: {data?.fact} </h1>
            <h1 className="font-mono text-2xl text-center text-green-700 mt-5">Cat length: {data?.length} </h1>

            
        </div>
        <br/>
        <button onClick={()=>refetch()} className="border-1 border-black px-2 py-1 items-center ml-240">Update cat Info</button>
        </>
    )

};
export default Home;
