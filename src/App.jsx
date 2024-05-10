import Navbar from "./components/Navbar"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppRoutes from "./utils/AppRoutes"
import Footer from "./components/Footer"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Recepies from "./pages/Recepies"
import LoginPage from "./components/LoginPage"
import SignUp from "./components/SignUp"
import AdminGuard from "./utils/AdminGuard"
import Dashboard from "./components/Dashboard"
import UserGuard from "./utils/UserGuard"
import Profile from "./components/Profile"
import Settings from "./pages/Settings"
import RecepieDetails from "./components/RecepieDetails"
import AddRecipe from "./components/AddRecipe"
import UpdateRecipe from "./components/UpdateRecipe"
import YourRecipe from "./components/YourRecipe"


function App() {
 
 
  return     <>
    <BrowserRouter>
    <div className="App">
        <Navbar/>
      <div className="container main">
          <Routes>
              <Route path='/home' element={<HomePage/>}/>
              <Route path='/recepies' element={<Recepies/>}/>
              <Route path='/settings' element={<Settings/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/recipecard' element={<RecepieDetails/>}/>
              <Route path='/recepies' element={<Recepies />}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/addrecepies' element={<UserGuard><AddRecipe/></UserGuard>}/>
              <Route path='/updaterecepies' element={<UserGuard><UpdateRecipe/></UserGuard>}/>
              <Route path='/yourrecipe' element={<YourRecipe><YourRecipe/></YourRecipe>}/>
              <Route path='*' element={<HomePage/>}/>
            </Routes>
      </div>
      <Footer/>
      </div>
      </BrowserRouter>
    </>

}

export default App
