import React from 'react'
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
     <Link to="/">
        <Button variant="info" style={{ width: "100%", height: "20%"}} >Home</Button>
    </Link>
    <Link to="/add">
        <Button variant="info" style={{ width: "100%", height: "20%"}} >Add New</Button>
    </Link>

 </>
  )
}

export default NavBar