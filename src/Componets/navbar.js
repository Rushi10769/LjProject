import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./navbar.css"
import Register from './register.js';


const Navbar = () => {

    
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">E-TRIP</span>
        <div className="navItems">
       
          <button className="navButton" role="button" onClick={<BrowserRouter>
      <Routes>  
      <Route path="./register.js" element={<Register/>} />
      </Routes>
      </BrowserRouter>}><span class="text">Register</span><span>New??</span></button>

          
          <button className="navButton1" role="button"><span class="text">Log in</span><span>I Know You..</span></button>
        </div>
      </div>
    </div>
  )
}


export default Navbar;