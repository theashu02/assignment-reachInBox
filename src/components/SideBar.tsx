// Import necessary React hooks and icons
import { useState } from "react";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import logo from "../assets/logo.svg";
import { TfiMenuAlt } from "react-icons/tfi";

function SideBar({ onMenuItemClick }: any) {
  // useState hook to manage the currently selected menu item, initialized with the default path "/"
  const [selectedItem, setSelectedItem] = useState("/");

  // Function to handle menu item click
  const handleMenuItemClick = (path: string) => {
    setSelectedItem(path); // Update the selected item state
    onMenuItemClick(path); // Trigger the callback function passed as a prop to notify parent component
  };

  return (
    <div className="dark:bg-[#101113] bg-white overflow-y-scroll no-scrollbar h-screen w-14 flex flex-col justify-between items-center py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed z-10">
      {/* Logo at the top of the sidebar */}
      <div className="rounded-xl">
        <img
          src={logo}
          className="h-8 rounded-xl object-left overflow-visible"
          alt="Logo"
        />
      </div>

      {/* Menu icons list */}
      <div className="text-[#AEAEAE] text-2xl space-y-5">
        {/* Home icon */}
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/")}
        >
          <RiHome5Fill />
        </div>

        {/* Search icon */}
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/search" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/search")}
        >
          <RiUserSearchLine />
        </div>

        {/* Mail icon */}
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/mail" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/mail")}
        >
          <RiMailFill />
        </div>

        {/* Send icon */}
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/send" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/send")}
        >
          <IoIosSend />
        </div>

        {/* Menu icon */}
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/stack" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/stack")}
        >
          <TfiMenuAlt />
        </div>

        {/* Inbox icon */}
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/inbox" ? "bg-gray-600  rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/inbox")}
        >
          <FaInbox />
        </div>

        {/* Stats icon */}
        <div
          className={`cursor-pointer p-1 ${
            selectedItem === "/stacks" ? "bg-gray-600 rounded-lg" : ""
          }`}
          onClick={() => handleMenuItemClick("/stacks")}
        >
          <IoStatsChartSharp />
        </div>
      </div>

      {/* User initials or avatar at the bottom of the sidebar */}
      <div className="text-white bg-green-600 p-2 rounded-full">AS</div>
    </div>
  );
}

export default SideBar;
