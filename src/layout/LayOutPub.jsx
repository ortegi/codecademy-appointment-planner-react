import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


const LayOutPub = () => {
    return(
        <div className="mt-5 mx-4">
            <NavBar/>
            <div className="mt-8 mx-6">   
            <Outlet/>
            </div>
        
        </div>
    )
}

export default LayOutPub;