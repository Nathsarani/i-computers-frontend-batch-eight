import Header from "../components/header"
import { Routes,Route } from "react-router-dom"
import ProductPage from "./productPage"
import ProductOverview from "./productOverview"


export default function HomePage(){
    return(
        <div className="w-full h-full overflow-y-scroll max-h-full">
            <Header/>
            <div className="w-full min-h-[calc(100%-100px)] text-3xl">
            
                            <Routes>
                                      <Route path="/" element={<h1>Home Page</h1>}/>
                                      <Route path="/products" element={<ProductPage/>}/>
                                      <Route path="/about" element={<h1>About</h1>}/>
                                      <Route path="/contact" element={<h1>Contact</h1>}/>
                                      <Route path="/overview/:productID" element={<ProductOverview/>}/>
                                      <Route path="/*" element={<h1>Not Found</h1>}/>
                                      
                            </Routes>    


            
            </div>
            
        </div>


    )
}