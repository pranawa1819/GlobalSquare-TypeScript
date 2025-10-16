

type propTypes={
  name: string,
  email: string,
  age: 20|25,
  isMarried: boolean,
  friends: string[],
  //country?: string // optional condition
  country:Country,

}

export enum Country{
  Brazil =  "Brazil",
  France =  "France",
  Canada =  "Canada"

}

function Person(props:propTypes){
   return(
    <>
    <div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Age: {props.age}</h1>
        <h1>Status: {props.isMarried}</h1>
        <h1>Friends:</h1>
        {props.friends.map((friend:string)=><h1> {friend}</h1>)}
        <h1>Country: {props.country}</h1>
    </div>
    </>
   );
};

export default Person;

