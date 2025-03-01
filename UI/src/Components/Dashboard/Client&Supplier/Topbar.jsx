import { React, useState, useCallback } from "react";
import { FaSearch, FaBell, FaUserAlt } from "react-icons/fa";
import UserProfile from "./UserBar";

// SearchBar Component (unchanged)
const SearchBar = () => (
  <div className="flex items-center">
    <div className="w-[245px] h-12 flex flex-row items-center justify-start gap-2 py-[10px] px-[12px] border border-[#ebebeb] rounded-[9px] hover:bg-gray-100 transition-colors">
      <div className="w-6 h-6 flex items-center justify-center">
        <FaSearch className="text-black" />
      </div>
      <input
        type="text"
        placeholder="Quick search"
        className="bg-transparent outline-none tracking-[-0.02em] leading-[1.4] text-black placeholder-black"
      />
    </div>
  </div>
);

// UserSection Component (unchanged)
const UserSection = ({ openUserProfile }) => (
  <div className="flex items-center gap-4">
    <div className="flex flex-row items-center gap-4">
      <div className="w-9 h-6 flex items-center justify-center cursor-pointer">
        <FaBell className="text-black" />
      </div>
      <img
        src="Message.jpg"
        alt="Message"
        className="w-12 h-8 object-cover cursor-pointer"
      />
    </div>
    {/* User Profile Trigger */}
    <div
      className="flex flex-row items-center justify-end gap-[10px] cursor-pointer text-center text-base text-[#474747] font-inter"
      onClick={openUserProfile}
    >
      <div className="w-[220px] h-[50px] flex flex-col items-end justify-center gap-1">
        <b className="relative leading-[1.4] z-10">User.Admin</b>
        <div className="relative text-xs tracking-[-0.02em] leading-[1.4] text-[#333] opacity-70 z-0">
          chad_dennis98@domain.com
        </div>
      </div>
      <div className="w-12 h-12 rounded-[8px] bg-[#080808] border border-white flex items-center justify-center">
        <FaUserAlt className="text-white text-xl" />
      </div>
    </div>
  </div>
);

// Breadcrumbs Component (unchanged)
const Breadcrumbs = () => (
  <div className="h-[27px] flex flex-row items-center justify-center pr-[30px]">
    <div className="flex flex-row items-center justify-start">
      <b className="relative leading-[140%]">Dashboard</b>
    </div>
  </div>
);

// StatusBar Component (unchanged)
const StatusBar = () => (
  <div className="flex-1 flex flex-row items-center justify-end gap-[10px] text-center text-[18px] text-white">
    <div className="flex flex-row items-center justify-end text-right text-[16px] text-[#333] font-inter">
      <div className="w-[255px] relative h-[22px]">
        <b className="absolute top-0 left-0 leading-[140%]">
          Monday, 30/10/2023 - 10:28 AM
        </b>
      </div>
    </div>
  </div>
);

// Navbar Component
const Navbar = ({ setMainContent }) => {
  const [isUserProfileOpen, setUserProfileOpen] = useState(false);

  const openUserProfile = useCallback(() => {
    setUserProfileOpen(true);
  }, []);

  const closeUserProfile = useCallback(() => {
    setUserProfileOpen(false);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 md:left-[265px] right-0 h-[85px] bg-white shadow-md z-30">
        <div className="flex items-center justify-between h-full px-4 md:px-6">
          <SearchBar />
          <UserSection openUserProfile={openUserProfile} />
        </div>
        <div className="w-full relative bg-gradient-to-r from-gray-50 to-[#f0f0f0] h-[50px] flex flex-row items-center justify-start px-[30px] py-[20px] text-left text-base text-[#e4822f] font-inter shadow-sm">
          <Breadcrumbs />
          <StatusBar />
        </div>
      </header>
      {isUserProfileOpen && (
        <UserProfile onClose={closeUserProfile} setMainContent={setMainContent} />
      )}
    </>
  );
};

export default Navbar;