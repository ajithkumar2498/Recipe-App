import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'
import { faRightToBracket, faFloppyDisk, faGear, faPlus, faCog, faBowlFood} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

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
        path:"/saved",
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
        icon:faCog
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
        Links.map(link =>(
          <a href="#!" key={link.name}>{link.name}</a>
        ))
      }
        {/* <a href="#!" >home</a>
        <a href="#!">recipies</a>
        <a href="#!">settings</a> */}
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