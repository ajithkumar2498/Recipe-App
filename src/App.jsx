// import LoginPage from "./components/LoginPage"
import Navbar from "./components/Navbar"
// import Sidebar from "./components/Sidebar"
// import SignUp from "./components/SignUp"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppRoutes from "./utils/AppRoutes"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"

function App() {
 
  const router = createBrowserRouter(AppRoutes)
  return     <>

    <div className="App">
        <Navbar/>
      
      <div className="container main">
      <RouterProvider router={router} />
      </div>
      <Footer/>
      </div>
        
    </>

}

export default App
