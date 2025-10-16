import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

function WeatherApp() {
    const [location, setLocation] = useState("");
    const apiKey = "F9Z8QYYWMAXF64Q5EV746J97G";

    // Fetch weather data
    const fetchWeatherData = async () => {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
            location
        )}?unitGroup=metric&contentType=json&key=${apiKey}`;
        const response = await axios.get(url);
        return response.data;
    };

    // React Query 
    const { data, isLoading, isError, refetch, } = useQuery({
        queryKey: ["weatherData", location],
        queryFn: fetchWeatherData,
        enabled: false

    });
    console.log(data);


    return (
        <>
            <div className="min-h-150 flex flex-col items-center justify-center bg-gradient-to-br  transition-all duration-700 text-gray-800">
                <div className="bg-blue-50 backdrop-blur-md p-8 rounded-2xl shadow-xl w-11/12 sm:w-[500px] text-center">
                    <h1 className="text-3xl font-bold mb-6 text-gray-900 ">
                        🌦️ Weather App
                    </h1>

                    <div className="flex justify-center mb-6">
                        <input
                            type="text"
                            value={location}
                            placeholder="Enter city name..."
                            onChange={(e) => setLocation(e.target.value)}
                            className="border-2 border-gray-300 px-4 py-2 rounded-l-md w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            onClick={() =>refetch()}
                            className="bg-blue-600 text-white px-5 py-2 rounded-r-md hover:bg-blue-700 transition">
                            Search
                        </button>
                    </div>

                    {isLoading && <h2 className="text-xl font-medium">Loading...</h2>}
                    {isError && (
                        <h2 className="text-red-600 font-semibold">Error fetching data!</h2>
                    )}

                    {data && (
                        <div className="mt-6 text-center">
                            <h2 className="text-2xl font-semibold">
                                {data.resolvedAddress}
                            </h2>
                            <p className="text-5xl font-bold mt-2">
                                {data.days[0].datetime}
                            </p>
                            <p className="text-5xl font-bold mt-2">
                                {data.currentConditions.temp}°C
                            </p>
                            <p className="text-lg mt-2 capitalize">
                                {data.currentConditions.conditions}
                            </p>
                            <div className="flex justify-center gap-6 mt-4 text-gray-700">
                                <p>💧 {data.currentConditions.humidity}%</p>
                                <p>💨 {data.currentConditions.windspeed} km/h</p>
                            </div>
                        </div>
                    )}
                </div>
            </div >




        </>

    );

};
export default WeatherApp