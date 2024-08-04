import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faFilePen, faHouse } from '@fortawesome/free-solid-svg-icons'


const NavBar = ({isAuth}) => {
  return (
    <nav>
      <Link to="/"><FontAwesomeIcon icon={faHouse} />Home</Link>
      <Link to="/craetepost"><FontAwesomeIcon icon={faFilePen} />Post</Link>
      {!isAuth ? <Link to="/login"><FontAwesomeIcon icon={faArrowRightToBracket} />Login</Link> : <Link to="/logout"><FontAwesomeIcon icon={faArrowRightToBracket} />Logout</Link>}

    </nav>
  )
}

export default NavBar