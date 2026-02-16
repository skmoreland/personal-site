import internet from "../../assets/images/internet.svg";

const WindowsNav = () => {
  return (
    <nav className=" w-screen h-12 font-windows bg-windows-gray p-1">
      <div
        className={
          "h-10 w-full p-2 bg-windows-blue text-white flex gap-x-2 text-xl items-center"
        }
      >
        <img src={internet} alt="windows internet logo" className="h-6"></img>
        Sarah Moreland
      </div>
    </nav>
  );
};

export default WindowsNav;
