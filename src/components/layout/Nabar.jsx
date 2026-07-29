import { Menu } from "lucide-react"
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav>
        <div className="nav-container">
        <div className="logo">
            InterviewVerse AI 
        </div>
        <ul className="list-of-content ">
            <li>Home</li>
        <li>Features</li>
        <li>How It Works</li>
        <li>Companies</li>
        <li>About</li> 
        </ul>
        <div className="buttons">
            <button className="login-btn">Login</button>
            <button className="getstartedbutton">Get Started</button>
        </div>
        <div className="menu-icon">
    <Menu size={30}/>
</div>
</div>
    </nav>
  )
}

export default Navbar
