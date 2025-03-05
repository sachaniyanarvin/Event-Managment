import React from "react";
import { FaTimes , FaEdit, FaEnvelopeOpen, FaBell, FaPaperclip, FaCogs, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// ProfileOption Component (unchanged)
const ProfileOption = ({ icon: Icon, text, onClick }) => (
  <div
    className="w-[300px] flex flex-row items-center justify-end px-6 gap-2 hover:bg-gray-100 transition-colors cursor-pointer"
    onClick={onClick}
  >
    <b className="relative leading-[140%]">{text}</b>
    <div className="w-12 h-12 flex flex-col items-center justify-center">
      <div className="w-3 h-3" />
      <div className="w-6 h-6 flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <div className="w-3 h-3" />
    </div>
  </div>
);

// UserProfile Component
const UserProfile = ({ onClose, setMainContent }) => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    setMainContent("MyProfile");
    onClose(); 
  };

  const handleInbox = () => {
    setMainContent("Inbox");
    onClose();
  };

  const handleNotifications = () => {
    setMainContent("Notification");
    onClose();
  }

  return (
    <div className="fixed top-0 right-0 h-full w-full sm:w-72 md:w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 translate-x-0 rounded-tl-4xl rounded-bl-4xl">
      {/* Body */}
      <div className="absolute inset-0 flex flex-col items-end justify-start">
        {/* Header Section */}
        <div className="self-stretch border-b border-[#ebebeb] h-[85px] flex flex-row items-center justify-start py-5 px-7 text-[20px] text-[#e4822f]">
          <div className="flex-1 flex flex-row items-start justify-start">
            <b className="relative leading-[140%]">User Profile</b>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-white flex items-center justify-center text-[16px] text-[#333] hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <FaTimes />
          </button>
        </div>
        {/* User Type Section */}
        <div
          className="self-stretch border-b border-[#ebebeb] flex flex-col items-end justify-start text-center text-[#474747]"
          style={{
            background: "linear-gradient(90.03deg, rgba(255,255,255,0.48), rgba(235,235,235,0.48)), #fff",
          }}
        >
          <div className="self-stretch h-[85px] flex flex-row items-center justify-end pr-7">
            <div className="flex flex-row items-center justify-end gap-2">
              <div className="w-[220px] h-[50px] flex flex-col items-end justify-center gap-1">
                <b className="relative leading-[140%]">User.Admin</b>
                <div className="relative text-[12px] tracking-[-0.02em] leading-[140%] text-[#333] opacity-70">
                  chad_dennis98@domain.com
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg  border border-white flex items-center justify-center">
                <img src="Client.jpg" className="text-white text-xl rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        {/* Main Options Group 1 */}
        <div className="self-stretch border-b border-[#ebebeb] flex flex-col items-end justify-start py-6 text-[#080808]">
          <ProfileOption icon={FaEdit} text="Edit Profile" onClick={handleEditProfile} />
          <ProfileOption icon={FaEnvelopeOpen} text="Inbox" onClick={handleInbox}/>
          <ProfileOption icon={FaBell} text="Notifications" onClick={handleNotifications}/>
        </div>
        {/* Main Options Group 2 */}
        <div className="self-stretch border-b border-[#ebebeb] flex flex-col items-end justify-start py-6 text-[#080808]">
          <ProfileOption icon={FaPaperclip} text="Integration Settings" />
          <ProfileOption icon={FaCogs} text="System Settings" />
        </div>
        {/* Actions Section */}
        <div className="self-stretch flex flex-col items-end justify-center p-6 text-center text-sm text-white">
          <button
            className="rounded-lg bg-[#e4822f] flex flex-row items-center justify-center py-3 px-4 gap-2 hover:opacity-90 transition-opacity cursor-pointer"
            onClick={() => navigate("/")}
          >
            <b className="relative leading-[140%]">Sign out</b>
            <FaSignOutAlt className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;