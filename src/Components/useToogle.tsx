import { useState } from "react";

function useToogle(){

    const[state, setState]= useState(false);
    const toggle=()=>{
        setState((prev)=>!prev);
    };

    return {state, toggle}

};

export default useToogle

