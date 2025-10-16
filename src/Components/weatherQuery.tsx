import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import WeatherApp from "./weatherApp";

function WeatherQuery(){
     const client = new QueryClient({});

    return(
      <QueryClientProvider client={client} >
        <WeatherApp />
      </QueryClientProvider>
    );
};

export default WeatherQuery