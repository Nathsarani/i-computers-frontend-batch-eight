
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './components/test'

import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'

function App() {
  

  return (

    <BrowserRouter>

        <div className=' w-full h-[600px] border-2'      /*full screen  */> 
                  <div  className='w-full h-screen bg-primary text-secondary'/*yata screen eka caha*/> 
                      <Routes path="/">
                          <Route path="/" element={<HomePage/>}/>
                          <Route path="/login" element={<LoginPage/>}/>
                          <Route path="/register" element={<RegisterPage/>}/>
                          <Route path="/admin" element={<AdminPage/>}/>
                          


                      </Routes>

                  </div>
               </div>
            </BrowserRouter>

         
          
  
  )
}

export default App
