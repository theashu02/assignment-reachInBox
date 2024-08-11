import header from "../assets/header.svg";

function AppBar() {
  return (
    <div className="border-[#25262B] bg-black border-b-2 fixed text-white h-16 w-screen flex items-center justify-center">
      <div className="">
        <img src={header} alt="logo" className=" h-10"></img>
      </div>
    </div>
  );
}

export default AppBar;
