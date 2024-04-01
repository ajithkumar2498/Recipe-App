import LoginPage from "../components/LoginPage";
import SignUp from "../components/SignUp";
import Profile from "../components/Profile";
import { Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import AdminGuard from "./AdminGuard";
import UserGuard from "./UserGuard";

const AppRoutes = [
    {
        path:"/login",
        element:<LoginPage/>
    },
    {
        path:"/signup",
        element:<SignUp/>
    },
    {
        path:"/profile/:id",
        element: <UserGuard>
                       <Profile/>
                </UserGuard>
       
    },
    {
        path:"/dashboard",
        element: <AdminGuard>
                  <Dashboard/>
                 </AdminGuard>
       
    },
    {
        path:"*",
        element:<Navigate to='/login' />
    }
]


export default AppRoutes
    