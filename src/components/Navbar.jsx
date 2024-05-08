import { Link,useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { faRightToBracket, faBowlFood, faGear, faHome, faPlusSquare, faPerson} from "@fortawesome/free-solid-svg-icons"
import toast from 'react-hot-toast'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'


function Navbar() {
    const location = useLocation()
    const auth = sessionStorage.getItem("token")
    console.log(auth)
    const [showSideBar, setShowSideBar]=useState(false)
    const [isLoggedIn, setIsLoggedIn]=useState(false)
    
    const Links = [
      {
        name:"HOME",
        path:"/home",
        icon:faHome
      },
      {
        name:"RECEPIES",
        path:"/recepies",
        icon:faBowlFood
      },
      {
        name:"ADD RECIPE",
        path:"/signup",
        icon:faPlusSquare
      },
      {
        name:"SETTINGS",
        path:"/settings",
        icon:faGear
      }
    ]
    const loginLinks = [
      {
        name:"HOME",
        path:"/home",
        icon:faHome
      },
      {
        name:"RECEPIES",
        path:"/recepies",
        icon:faBowlFood
      },
      {
        name:"ADD RECIPE",
        path:"/addrecepies",
        icon:faPlusSquare
      },
      {
        name:"profile",
        path:"/profile",
        icon:faUser
      },
      {
        name:"SETTINGS",
        path:"/settings",
        icon:faGear
      }
    ]
     useEffect(()=>{
       if(auth){
        setIsLoggedIn(true)
       }
       else{
        setIsLoggedIn(false)
        toast.success("logged out successful")
       }
       
     },[auth])
    function closeSideBar(){
      setShowSideBar(false)
    }
  return <>
   <div className="nav-bar container">
     <Link to='/home' className='logo'>R<span>ec</span>epiesZone</Link>
     <div className="nav-links">
     {/* {
       Links.map((link) =>(
        <Link className={location.pathname === link.path ? "active " : " "} to={link.path} key={link.name}>{link.name}</Link>
     ))
     }  */}
     {isLoggedIn? loginLinks.map((link) =>(
          <Link className={location.pathname === link.path ? "active " : " "} to={link.path} key={link.name}>{link.name}</Link>
        )) :
        Links.map((link) =>(
          <Link className={location.pathname === link.path ? "active " : " "} to={link.path} key={link.name}>{link.name}</Link>
       ))} 
      
   
     </div>
    <div onClick={()=> setShowSideBar(true)} className={showSideBar ? "sidebar-Icon active" : "sidebar-Icon"}>
        <div className="bar"> </div>
        <div className="bar"> </div>
        <div className="bar"> </div>
    </div>
   </div>
   { showSideBar && <Sidebar close={closeSideBar} Links={Links} loginLinks={loginLinks}/> }
   
  </>
}

export default Navbar