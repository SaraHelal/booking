import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <Link to="/"><span className='logo'>Booking.com</span></Link>  
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Sign in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar