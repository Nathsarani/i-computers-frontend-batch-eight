import { Routes, Route ,Link} from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { PiNotepadFill } from "react-icons/pi";
import { AiFillProduct } from "react-icons/ai";
import { MdOutlineRateReview } from "react-icons/md";
import AdminProductPage from "./admin/adminProductsPage";
import AdminAddProductPage from "./admin/adminAddProductPage";
import AdminUpdateProductPage from "./admin/adminUpdateProductPage";
import AdminOrdersPage from "./admin/adminOrdersPage";

export default function adminPage(){
    return(
        <div className="w-full h-full flex bg-accent"/* admin eke uda layer eka*/>
            <div className="w-[300px] h-full bg-accent text-primary" >
                    <div className ="w-full h-[120px] flex items-center text-2xl">
                        <img src="/logo.png" className="h-full w-[175px]" alt="logo"/><h1>Admin </h1>
                    </div >

                    <div className="w-full h-[400px] flex flex-col  text-2xl pl-[20px]">
                                <Link to ="/admin" className="w-full flex items-center h-[50px] gap-5"><PiNotepadFill />Orders</Link>
                                <Link to="/admin/products" className="w-full flex items-center h-[50px] gap-5"><AiFillProduct />Products</Link>
                                <Link to="/admin/users" className="w-full flex items-center h-[50px] gap-5"><HiUsers />Users</Link>
                                <Link to="/admin/reviews" className="w-full flex items-center h-[50px] gap-5"><MdOutlineRateReview />Reviews</Link>
                    </div>
            </div>
                    <div className="w-[calc(100%-300px)] bg-primary h-full border-4 rounded-4xl border-accent overflow-y-scroll pl-[20px]"  >

                                <Routes>
                                      <Route path="/" element={<AdminOrdersPage/>}/>
                                      <Route path="/products" element={<AdminProductPage/>}/>
                                      <Route path="/add-product" element={<AdminAddProductPage/>}/>
                                      <Route path="/update-product" element={<AdminUpdateProductPage/>}/>
                                      <Route path="/users" element={<h1>users</h1>}/>
                                      <Route path="/reviews" element={<h1>reveiws</h1>}/>
                                      <Route path="/*" element={<h1>Not Found</h1>}/>
                                      
                                </Routes>
                    </div>
                
            

        </div>

    )

}