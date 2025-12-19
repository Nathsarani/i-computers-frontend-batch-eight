
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'
import TestPage from './pages/test'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ForgetPasswordPage from './pages/forgetPassword'


//1023763116980-sf3dqiju3m3dg30s8jv4g7et2hn4c6v7.apps.googleusercontent.com

function App() {
  

  return (
    <GoogleOAuthProvider clientId ="1023763116980-sf3dqiju3m3dg30s8jv4g7et2hn4c6v7.apps.googleusercontent.com">

    <BrowserRouter>

      <Toaster position='top-right'/>

        {/* <div className=' w-full h-screen border-2'  >  /* hema page ekakama container   */}
                  <div  className='w-full h-screen bg-primary text-secondary'/*container eke redda eka wenas wenwa screen eka anuwa(dynamic kotuwak admin,re,vge page wetena*/> 
                      <Routes path="/">
            
                          <Route path="/*" element={<HomePage/>}/>
                          <Route path="/login" element={<LoginPage/>}/>
                          <Route path="/register" element={<RegisterPage/>}/>
                          <Route path="/admin/*" element={<AdminPage/>}/>
                          <Route path="/test" element={<TestPage/>}/>
                          <Route path="/forgot-password" element={<ForgetPasswordPage/>}/>
                          


                      </Routes>

                  </div>
               {/* </div> */}
            </BrowserRouter>
            </GoogleOAuthProvider>

         
          
  
  )
}

export default App
