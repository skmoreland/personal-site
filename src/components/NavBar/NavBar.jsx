import { Link } from "react-router-dom";
const NavBar = () => {
  return (
      <nav className = "bg-black w-full h-16 flex justify-between items-center px-4 font-title text-white">
            <div className = "text-2xl " >Sarah Moreland</div>
            <div className = "flex justify-between gap-x-4">
              <Link to="/">About Me</Link>
              <Link to="/projects">Experience</Link>
              <Link to="/contact">Contact</Link>
            </div>
      </nav>
  );
}

export default NavBar