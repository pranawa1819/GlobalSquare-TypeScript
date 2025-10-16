import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from '../Components/reactQuery';

function RQComp(){
     const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false }
    }
  });
    return(
      <QueryClientProvider client={client} >
        <Home />
      </QueryClientProvider>
    );
};

export default RQComp