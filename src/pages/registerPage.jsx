import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "../components/loader";


export default function RegisterPage() {
    const[firstName,setFirstName]=useState("")
    const[lastName,setLastName]=useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[confirmPassword , setConfirmPassword]=useState("");
    const[isLoading ,setIsLoading]=useState(false);
    const navigate = useNavigate()
    
    async function register(){
        if(firstName.trim()== ""){
            toast.error("First name is required");
            return;
        }
        if(lastName.trim()== ""){
            toast.error("Last name is required");
            return;
        }
        if(email.trim()== ""){
            toast.error("Email is required");
            return;
        }
        if(password.trim()== ""){
            toast.error("Password is required");
            return;
        }   
        if(password !== confirmPassword){
            toast.error("Passwords do not match");
            return;
        }

        if(password != confirmPassword){
            toast.error("Passwords do not match");
            return;
        }

        setIsLoading(true)

   

        try{

        const res = await axios.post(import.meta.env.VITE_BACKEND_URL+ "/users/",{ 
            email : email.trim(),
            password : password.trim(),
            firstName: firstName.trim(),
            lastName: lastName.trim(), 
        });


     

     
        navigate("/login");

    

        
        
        //alert("Login successful! Welcome back.");
        toast.success("Register successful! Welcome To I-Computers.")
        setIsLoading(false)

        
        }catch(err){

             //alert("Login failed! Please check your credentials and try again.")
            console.log("Register failed! Please check your  data and try again.");
            console.log("FInd error",err);
            setIsLoading(false)
        }  
        
    }

    return (
        <div className="w-full h-screen bg-[url('/bg.jpg')] bg-center bg-cover bg-no-repeat flex">
            <div className="w-[50%] h-full flex justify-center items-center flex-col">
                <img src="/logo.png" alt="logo" className="w-[400px] h-[200px] mb-[20px] object-cover" />
                <h1 className="text-4xl text-accent text-shadow-2xs font-bold text-center"> Plug In to Better Performance.</h1>
                <h1 className="text-2xl text-secondary text-shadow-2xs italic text-center">High-quality accessories for work, gaming, and everyday use.</h1>

            </div>

            <div className="w-[50%] h-full flex justify-center items-center ">
                <div className="w-[450px] h-[600px]  backdrop-blur-2xl shadow-2xl rounded-2xl flex flex-col justify-center items-center p-[30px] ">
                    
                    <h1 className="text-[20px] font-semibold mb-[50px] text-accent text-shadow-2xs text-shadow-white">Register</h1>
                    
                    <input 
                        onChange={(e) => setFirstName(e.target.value)} 
                        type="text"
                        placeholder="First Name"
                        className="w-full h-[50px] mb-[20px] border rounded-lg border-secondary p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-accent" />
                    
                    <input 
                        onChange={(e) => setLastName(e.target.value)} 
                        type="text"
                        placeholder="Last Name"
                        className="w-full h-[50px] mb-[20px] border rounded-lg border-secondary p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-accent" />
                    

                    <input 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email"
                        placeholder="Email"
                        className="w-full h-[50px] mb-[20px] border rounded-lg border-secondary p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-accent" />
                    
                    <input 
                        onChange={(e) => setPassword(e.target.value)} 
                        type="password"
                        placeholder="Your Password" 
                        className="w-full h-[50px] mb-[20px]  border rounded-lg border-secondary p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-accent" />

                    <input 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        type="password"
                        placeholder=" Confirm Your Password" 
                        className="w-full h-[50px] mb-[40px] border rounded-lg border-secondary p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-accent" />

                          
                    
                    <button onClick={register} className="w-full h-[50px]  border rounded-lg border-secondary  text-[20px] font-bold  text-white bg-accent hover:bg-transparent  hover:text-secondary">
                        Register Now </button>

                    <p className="text-secondary not-italic">Already have an account?
                        <Link to="/register" className="text-accent italic "> Login here</Link>
                    </p>

                </div>





            </div>
            {isLoading && <Loader/>}
        </div>
    )

}