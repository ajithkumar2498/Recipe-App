import LoginPage from "./components/LoginPage"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import SignUp from "./components/SignUp"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppRoutes from "./utils/AppRoutes"
import HeroSection from "./components/HeroSection"
import ImproveSkill from "./components/ImproveSkill"
import QuoteSection from "./components/QuoteSection"
import ChefSection from "./components/ChefSection"
import Footer from "./components/Footer"
ImproveSkill
function App() {
 
  const router = createBrowserRouter(AppRoutes)
  return     <>
    <div className="App">
        <Navbar/>
      {/* <RouterProvider router={router} /> */}
      <div className="container main">
       <HeroSection/> 
       <ImproveSkill/>
       <QuoteSection/>
       <ChefSection/>
       
      </div>
      <Footer/>
      </div>
        
    </>

}

export default App
