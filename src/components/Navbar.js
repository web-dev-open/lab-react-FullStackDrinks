import React from 'react'
import { Link } from 'react-router-dom'

function Navbar()
{
  return (
    <div className='navbar'>
        <Link to="/beers">
            <i class="fa-solid fa-house"></i>
        </Link>
    </div>
  )
}

export default Navbar