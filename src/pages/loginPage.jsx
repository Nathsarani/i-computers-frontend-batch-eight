import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "../components/loader";
import { GrGoogle } from "react-icons/gr";
import { useGoogleLogin } from "@react-oauth/google";


export default function LoginPage() {
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const [isloading ,setIsLoading]=useState(false);

    const googleLogin = useGoogleLogin({
        onSuccess: (response) => { 
			setIsLoading(true);
			axios.post(import.meta.env.VITE_BACKEND_URL + "/users/google-login", {
				token: response.access_token,                       //a response token assign as a token and ggive that backend

			}).then((res) => {
				localStorage.setItem("token", res.data.token);
				if (res.data.role == "admin") {
					navigate("/admin");
				} else {
					navigate("/");
				}
				toast.success("Login successful!.");
				setIsLoading(false);
			}).catch((err) => {
				console.log(err);
			});
			setIsLoading(false);
		 },
		onError: () => { toast.error("Google Login Failed"); },
		onNonOAuthError: () => { toast.error("Google Login Failed"); },
    })
    
    async function login(){

        console.log("Login button clicked");
        console.log("Email:",email);
        console.log("Password:",password);
        setIsLoading(true);

        try{

        const res = await axios.post(import.meta.env.VITE_BACKEND_URL+ "/users/login",{ 
            email : email,
             password : password 
        });


        console.log(res)
        localStorage.setItem("token", res.data.token);

        if (res.data.role == "admin") { 
				//window.location.href = "/admin";
                 navigate("/admin")
		} else {
				//window.location.href = "/";
                 navigate("/")

		}

		
        
        //alert("Login successful! Welcome back.");
        toast.success("Login successful! Welcome back.")
        setIsLoading(false)

        
        }catch(err){

             //alert("Login failed! Please check your credentials and try again.");
            toast.error("Login failed! Please check your credentials and try again.");
            console.log("Error during login");
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
                    
                    <h1 className="text-[40px] font-bold mb-[50px] text-accent text-shadow-2xs text-shadow-white">Login</h1>
                    
                    <input 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email"
                        placeholder="Enter your email"
                        className="w-full h-[50px] mb-[20px] border rounded-lg border-secondary p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-accent" />
                    
                    <input 
                        onChange={(e) => setPassword(e.target.value)} 
                        type="password"
                        placeholder="your password" 
                        className="w-full h-[50px] border rounded-lg border-secondary p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-accent" />

                          
                    
                    <p className=" text-secondary  text-right  w-full mb-[20px] ">
                        Forget your password? <Link to="/forgot-password" className="text-accent italic">
                        Reset it here</Link></p>
                    
                    <button onClick={login} className="w-full h-[50px]  mb-[20px] border rounded-lg border-secondary  text-[20px] font-bold  text-white bg-accent hover:bg-transparent  hover:text-secondary">
                        Login</button>

                       <button onClick={googleLogin}  className="w-full h-[50px]  border rounded-lg border-secondary  text-[20px] font-bold  text-white bg-accent hover:bg-transparent  hover:text-secondary">
                        Login with <GrGoogle className="inline ml-2 mb-1"/></button>


                    <p className="text-secondary not-italic">Don't have account?
                        <Link to="/register" className="text-accent italic "> Register here</Link>
                    </p>

                </div>





            </div>
              {isloading && <Loader/>}
        </div>
    )

}