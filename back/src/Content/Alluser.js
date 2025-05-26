import useAuth from "../Auth";
import Navbar from "../Navbar/Navbar";
const Alluser  = ()=>{

const { user } = useAuth();
return(

    <div className="min-h-screen flex flex-col bg-gray-200 ">
        
      <Navbar/>

    </div>


    
)
}
export default Alluser;