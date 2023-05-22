
const NavBar = () => {
  return (
      <nav className = "bg-light-green w-full h-16 border-b-8 border-dark-green flex justify-between items-center px-4 font-bebas">
            <div className = "text-xl" >Sarah Moreland</div>
            <div className = "flex justify-between gap-x-4">
              <a href="/">About Me</a>
              <a href="/">Projects</a>
              <a href="/">Contact</a>
            </div>
      </nav>
  );
}

export default NavBar