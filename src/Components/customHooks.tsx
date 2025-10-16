import useToogle from "./useToogle";



function CustomHooks(){
    // const {state, toggle}=useToogle();
    const data=useToogle();
  return(
    
    <>
     <div className="flex flex-col justify-between text-center items-center mt-30">
        <button className="border-1 border-black px-2 py-1 items-center" onClick={data.toggle}>{data.state?"Hide":"Show"} Details</button>
        {data.state && <h1 className="font-bold text-2xl mt-10">Hidden Details</h1>}
     </div>
    </>

  );
};

export default CustomHooks;