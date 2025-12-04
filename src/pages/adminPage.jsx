import { Routes, Route ,Link} from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { PiNotepadFill } from "react-icons/pi";
import { AiFillProduct } from "react-icons/ai";
import { MdOutlineRateReview } from "react-icons/md";

export default function adminPage(){
    return(
        <div className="w-full h-full flex bg-accent"/* admin eke uda layer eka*/>
            <div className="w-[300px] h-full bg-accent text-primary" >
                    <div className ="w-full h-[120px] flex items-center text-2xl">
                        <img src="/logo.png" className="h-full w-[175px]" alt="logo"/><h1>Admin </h1>
                    </div >

                    <div className="w-full h-[500px] flex flex-col  text-2xl ">
                                <Link to ="/admin" className="w-full flex items-center h-[50px] gap-[20px]"><PiNotepadFill />Orders</Link>
                                <Link to="/admin/products" className="w-full flex items-center h-[50px] gap-[20px]"><AiFillProduct />Products</Link>
                                <Link to="/admin/users" className="w-full flex items-center h-[50px] gap-[20px]"><HiUsers />Users</Link>
                                <Link to="/admin/reviews" className="w-full flex items-center h-[50px] gap-[20px]"><MdOutlineRateReview />Reviews</Link>
                    </div>
            </div>
                    <div className="w-[calc(100%-300px)] bg-primary h-full text-6xl border-4 rounded-4xl border-accent overflow-y-scroll"  >

                                <Routes>
                                      <Route path="/" element={<h1>Orders</h1>}/>
                                      <Route path="/products" element={<h1>products</h1>}/>
                                      <Route path="/users" element={<h1>users</h1>}/>
                                      <Route path="/reviews" element={<h1>reveiws</h1>}/>
                                      <Route path="/*" element={<h1>Not Found</h1>}/>
                                      
                                </Routes>
                    </div>
                
            

        </div>

    )

}