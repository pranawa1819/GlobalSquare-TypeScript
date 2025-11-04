import { useQuery } from "@tanstack/react-query";
import axios from "axios";


function GetMutation() {

    const fetchData = async () => {
        const url = "https://petstore.swagger.io/v2/user/pranawa";
        const response = await axios.get(url);
        return response.data;

    }

    const { data } = useQuery({
        queryKey: ["getMutation"],
        queryFn: fetchData

    });

    console.log(data);
    return (
        <>
        <div>
           
        </div>
        </>
    );
};
export default GetMutation;