
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav>
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
            <button>Login</button>
            <button>Get Started</button>
        </div>
    </nav>
  )
}

export default Navbar
