import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMap, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faDiscord} from '@fortawesome/free-brands-svg-icons'
import '../css/header.css'
import '../css/buttons.css'
 
export default function Header() {
  return (
    <header>
        <nav>
            <a className='nav-button' href='#main'><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></a>
            <a className='nav-button' href='#map'><FontAwesomeIcon icon={faMap}></FontAwesomeIcon></a>
            <a className='nav-button' href='#team'><FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon></a>
            <a className='nav-button' href='https://twitter.com/i/flow/login?redirect_after_login=%2FFlare_Punks' target='_blank' ><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
            <a className='nav-button' href='https://discord.com/invite/8cdPB9M3e8' target='_blank' ><FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon></a>
           
        </nav>
    </header>
  )
}
