
const NavBar = () => {
  return (
      <nav className = "bg-black w-full h-16 flex justify-between items-center px-4 font-bebas text-white">
            <div className = "text-2xl " >Sarah Moreland</div>
            <div className = "flex justify-between gap-x-4">
              <a href="/">About Me</a>
              <a href="/projects">Experience</a>
              <a href="/contact">Contact</a>
            </div>
      </nav>
  );
}

export default NavBar