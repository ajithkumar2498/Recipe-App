import React from 'react'
import { Link,useLocation} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
function Sidebar({Links, close}) {
  const location = useLocation()
  return <>
  <div className='Side-Bar' onClick={close}>
   {
    Links.map(link=>(
      <Link to={link.path} className={location.pathname === link.path ? "sidebar-links active " : "sidebar-links"}   key={link.name}>
        <FontAwesomeIcon icon={link.icon}/>
        {link.name}</Link>
    ))
   }
  </div>
  </>
}

export default Sidebar