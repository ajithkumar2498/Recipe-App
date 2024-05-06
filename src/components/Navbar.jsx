import { Link,useLocation } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './Sidebar'
import { faRightToBracket, faBowlFood, faGear, faHome, faPlusSquare} from "@fortawesome/free-solid-svg-icons"


function Navbar() {
    const location = useLocation()
    const [showSideBar, setShowSideBar]=useState(false)
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
        name:"ADD RECEPIES",
        path:"/addrecepies",
        icon:faPlusSquare
      },
      {
        name:"LOGIN",
        path:"/login",
        icon:faRightToBracket
      },
      {
        name:"SETTINGS",
        path:"/settings",
        icon:faGear
      }
    ]
    function closeSideBar(){
      setShowSideBar(false)
    }
  return <>
   <div className="nav-bar container">
     <Link to='/home' className='logo'>R<span>ec</span>epiesZone</Link>
     <div className="nav-links">
      {
        Links.map((link) =>(
          <Link className={location.pathname === link.path ? "active " : " "} to={link.path} key={link.name}>{link.name}</Link>
        ))
      }
     </div>
    <div onClick={()=> setShowSideBar(true)} className={showSideBar ? "sidebar-Icon active" : "sidebar-Icon"}>
       
        <div className="bar"> </div>
        <div className="bar"> </div>
        <div className="bar"> </div>
    </div>
   </div>
   { showSideBar && <Sidebar close={closeSideBar} Links={Links}/> }
   
  </>
}

export default Navbar