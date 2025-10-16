import { Link } from "react-router-dom";
import "../App.css";
function Header(){
    return(
     
     <div className="flex justify-between border-0 px-20 py-3 bg-amber-200  font-bold text-2xl">
        <Link to="/person" >TypeScript</Link>
        <Link to="/ReactQueryComp" >React Query</Link>
        <Link to="/customHooks" >Custom Hooks</Link>
        <Link to="/weatherQuery" >Weather App</Link>
        <Link to="/customCounter" >Counter</Link>
     </div>
     
    );

};
export default Header;