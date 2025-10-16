import useCounter from "./useCounter";


function CustomCounter(){
    
    const data=useCounter();
  return(
    
    <>
     <div className="flex flex-col justify-between text-center items-center mt-30">
        <button className="border-1 border-black px-2 py-1 items-center" onClick={data.increment}>Increment</button>
        <h1>{data.count}</h1>
        <button className="border-1 border-black px-2 py-1 items-center" onClick={data.decrement}>Decrement</button>
     </div>
    </>

  );
};

export default CustomCounter;