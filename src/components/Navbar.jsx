import { Link } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './Sidebar'
import { faRightToBracket, faPlus, faCog, faBowlFood, faGear} from "@fortawesome/free-solid-svg-icons"


function Navbar() {
    const [showSideBar, setShowSideBar]=useState(false)
    const Links = [
      {
        name:"ADD RECIPE",
        path:"/login",
        icon:faPlus
      },
      {
        name:"RECEPIES",
        path:"/recepies",
        icon:faBowlFood
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
     <a href="#!" className='logo'>F<span>oo</span>diesZone</a>
     <div className="nav-links">
      {
        Links.map((link) =>(
          <a to={link.path} key={link.name}>{link.name}</a>
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