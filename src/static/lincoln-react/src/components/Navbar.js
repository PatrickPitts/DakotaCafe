import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
        <>
          <nav className='navbar'>
          <div class="block1"><Link to='/' id="home">Dakota Cafe</Link></div>
            <div class="block2">
                <Link to='/menu'><button>Menu</button></Link>
                <Link to='/order-now'><button>Order Now</button></Link>
                <Link to='/reservation'><button>Reservation</button></Link>
                <Link to='/sign-in'><button>Sign in</button></Link>
                <Link to='/hours'><button>Hours of Operation</button></Link>
                <Link to='/email'><button>Email</button></Link>
            </div>
          </nav>
        </>
    );
}

export default Navbar
