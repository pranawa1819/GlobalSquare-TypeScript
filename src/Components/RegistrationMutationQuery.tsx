import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import RegistrationMutation from "./RegistrationMutation";
import GetMutation from "./RegistrationGetMutation";

function RegistrationQuery(){
     const client = new QueryClient({});

    return(
      <QueryClientProvider client={client} >
        <RegistrationMutation/>
        <GetMutation/>
      </QueryClientProvider>
    );
};

export default RegistrationQuery;