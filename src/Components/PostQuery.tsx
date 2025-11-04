import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostApi from "./PostApi";

function PostQuery(){
     const client = new QueryClient({});

    return(
      <QueryClientProvider client={client} >
        <PostApi />
      </QueryClientProvider>
    );
};

export default PostQuery