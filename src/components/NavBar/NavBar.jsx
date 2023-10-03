import { Link } from "react-router-dom";
const NavBar = () => {
  return (
      <nav className = "bg-black w-screen h-20 flex justify-between items-center px-4 font-title text-white">
            <div className={'pl-4 text-2xl lg:text-3xl bg-clip-text'} >
              <Link to="/">Sarah Moreland</Link>
            </div>
            <div className = "flex justify-between gap-x-4 decoration-4 underline-offset-4 lg:text-2xl">
              <Link to="/" className="decoration-prime-red hover:underline hover:underline">About Me</Link>
              <Link to="/projects" className="decoration-prime-blue hover:underline">Experience</Link>
              <Link to="/contact" className="decoration-prime-yellow hover:underline">Contact</Link>
            </div>
      </nav>
  );
}

export default NavBar