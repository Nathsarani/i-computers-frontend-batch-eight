import { useState } from "react";


//https://ujbvmfmkxwvluzjzwlip.supabase.co
//sb_publishable_JdHvEduTOF1sa8IUC2ABPw_enWxUa-p

export default function Test(){
    const [count, setCount]= useState(0)
    const[status,setStatus]= useState("🌞")
return (
    <div className="w-full h-full flex justify-center items-center flex-col">
            <div className="w-[400px] h-[300px] shadow-2xl flex justify-center items-center">

                <button className="w-[120px] h-[50px] bg-red-600 text-white " 
                onClick={()=>{
                    setCount(count-1)
                }}>
                    Decrement
                </button>



                <h1 className="w-[120px] h-[50px] text-[30px] text-center">{count}</h1>

                <button className="w-[120px] h-[50px] bg-red-600 text-white"
                onClick={()=>{
                    setCount(count+1)
                    
                }}>
                    Increment
                </button>

                
            </div>
            <div className="w-[400px] h-[300px] shadow-2xl flex flex-col justify-center items-center">
                <span className="h-[30px] text-2xl flex font-bold">{status}</span>
                <div className="w-[250px] h-[30px] shadow-2xl  bg-amber-200 flex justify-center">

                    <button className="w-[120px] h-full bg-green-500 text-white"
                
                            onClick={()=>{
                                setStatus("🌞")
                    
                        }}>On</button>
                        
                    <button className="w-[120px] h-full bg-red-600 text-white"
                
                            onClick={()=>{
                                setStatus("🌑")
                    
                        }}>Off</button>

                    
                </div>
            </div>

        </div>




)
}