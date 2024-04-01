import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
function Sidebar({Links, close}) {
  return <>
  <div className='Side-Bar' onClick={close}>
   {
    Links.map(link=>(
      <a className="sidebar-links " href="#!" key={link.name}>
        <FontAwesomeIcon icon={link.icon}/>
        {link.name}</a>
    ))
   }
  </div>
  </>
}

export default Sidebar