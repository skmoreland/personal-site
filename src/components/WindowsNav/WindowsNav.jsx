import { Link } from "react-router-dom";
import internet from "../../assets/images/internet.svg";

const WindowsNav = () => {
  return (
    <nav className=" w-screen h-22 font-windows bg-windows-gray p-1">
      <div
        className={
          "h-10 w-full p-2 bg-windows-blue text-white flex gap-x-2 text-xl items-center"
        }
      >
        <img src={internet} alt="windows internet logo" className="h-6"></img>
        <Link to="/">Sarah Moreland</Link>
      </div>
      <div className="h-10 w-full p-2 items-center  flex gap-x-4 underline-offset-4">
        <Link to="/" className="hover:underline">
          <u>A</u>bout Me
        </Link>
        <Link to="/projects" className="hover:underline">
          <u>E</u>xperience
        </Link>
        <Link to="/contact" className="hover:underline">
          <u>C</u>ontact
        </Link>
      </div>
    </nav>
  );
};

export default WindowsNav;
