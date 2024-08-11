import axios from "axios"; // Import axios for making HTTP requests
import { CiSearch } from "react-icons/ci"; // Importing search icon
import { FaAngleDown } from "react-icons/fa"; // Importing angle down icon
import { GoDotFill } from "react-icons/go"; // Importing dot fill icon
import { IoIosSend } from "react-icons/io"; // Importing send icon
import { TbReload } from "react-icons/tb"; // Importing reload icon

// The AllInbox component handles the inbox view, displaying a list of emails and related controls.
function AllInbox({
  data,
  loadMail,
}: {
  data: any; // The 'data' prop contains the list of emails
  loadMail: (threadId: number) => void; // The 'loadMail' function is triggered when an email is selected
}) {
  // Function to handle reloading/resetting the inbox
  async function reloadHandler() {
    const token = localStorage.getItem("token"); // Get the auth token from local storage
    await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
      headers: {
        Authorization: token, // Include the auth token in the request headers
      },
    });

    console.log("clicked"); // Log when the reload handler is clicked
  }

  // Check if 'data' is an array, and if not, log an error and return null
  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return null; // Optionally, you can return a placeholder or error message here
  }

  return (
    <div className="border-r-2 bg-[#FAFAFA] dark:bg-black dark:dark:border-[#33383F] border-[#E0E0E0]  h-full overflow-y-scroll no-scrollbar">
      <div className="px-4 pt-4 flex justify-between">
        <div className="px-4 ">
          <div className="text-2xl py-3 text-[#4285F4] font-semibold flex items-center">
            All Inbox(s){" "}
            <FaAngleDown className="ml-2 font-normal mt-1 cursor-pointer" />
          </div>
          <div className="dark:text-white text-black font-bold">
            {data.length}/25{" "}
            <span className="text-[#7F7F7F] font-normal">Inboxes selected</span>
          </div>
        </div>
        {/* Reload button, triggers reloadHandler when clicked */}
        <div
          className="p-3 mt-3 dark:bg-[#25262B] bg-white border border-gray-200 dark:border-gray-800 mr-4 rounded-xl h-min cursor-pointer"
          onClick={reloadHandler}
        >
          <TbReload className="text-black dark:text-white" />
        </div>
      </div>

      {/* Search bar */}
      <div className="my-4 px-8">
        <div className="relative">
          <input
            placeholder=" Search"
            className="w-full dark:bg-[#23272C] bg-[#F4F6F8] rounded-md p-1 pl-8 border dark:border-[#FFFFFF1A] border-[#DFE3E8]"
          />
          <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        {/* Displays new replies count and sorting option */}
        <div className="flex justify-between py-4">
          <div className="dark:text-white text-black">
            <span className="dark:bg-[#222426] bg-[#ECECEC] text-[#5C7CFA] px-2 py-1 rounded-3xl">
              {data.length}
            </span>{" "}
            New Replies
          </div>
          <div className="flex items-center dark:text-white text-black ">
            Newest <FaAngleDown className="ml-3 text-xl" />
          </div>
        </div>
      </div>

      {/* Email list */}
      <div>
        {data.map((email: any) => (
          <Mail
            key={email.id} // Unique key for each email
            fromEmail={email.fromEmail} // Sender's email
            subject={email.subject} // Email subject
            threadId={email.threadId} // Email thread ID
            loadMail={loadMail} // Function to load the selected email
          />
        ))}
      </div>
    </div>
  );
}

// The Mail component represents an individual email in the inbox.
function Mail({
  fromEmail,
  subject,
  threadId,
  loadMail,
}: {
  fromEmail: string; // Sender's email
  subject: string; // Email subject
  threadId: number; // Email thread ID
  loadMail: (threadId: number) => void; // Function to load the selected email
}) {
  // Function to trim the email subject to a specified word count
  const trimSubject = (subject: string, wordCount: number) => {
    const words = subject.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + " ...";
    }
    return subject;
  };

  // Function to handle email click
  const handleMailClick = () => {
    loadMail(threadId); // Trigger the loadMail function with the selected thread ID
  };

  return (
    <div
      className="border-t-2 dark:border-[#ffffff25] border-[#8b8b8b64] mx-8 py-4 cursor-pointer"
      onClick={handleMailClick}
    >
      <div>
        <div className="flex justify-between">
          {/* Display sender's email */}
          <div className="dark:text-white text-black text-lg font-normal">
            {fromEmail}
          </div>
          {/* Display the date */}
          <div className="dark:text-[#FCFCFC66] text-[#919EAB] font-thin pr-3">
            Mar 7
          </div>
        </div>
        {/* Display the trimmed subject */}
        <div className="py-2 dark:text-[#E1E0E0] text-gray-600 font-normal">
          {trimSubject(subject, 7)}
        </div>
        {/* Display tags like 'Interested' and 'Campaign Name' */}
        <div className="flex">
          <div className="dark:bg-[#222426] bg-[#F0F0F0] px-3 py-1 rounded-2xl text-[#57E0A6] text-sm flex items-center">
            <GoDotFill className="mr-1 text-lg" />
            Interested
          </div>
          <div className="flex items-center dark:bg-[#222426] bg-[#F0F0F0] px-3 py-1 rounded-2xl dark:text-[#FFFFFF] text-black text-sm ml-2">
            <IoIosSend className="mr-1 text-lg" />
            Campaign Name
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllInbox;
