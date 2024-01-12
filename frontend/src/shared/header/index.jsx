import React from "react";
import notificationIcon from "../../assets/icons/notificationIcon.png";

const Header = ({ pageTitle }) => {
  return (
    <header className="bg-white p-4 flex border-b-1 border-lightGray">
      <h1 className="text-[20px] pl-8">{pageTitle}</h1>
      <div className="ml-auto">
        <img src={notificationIcon} alt="Notification Icon" />
      </div>
      {/* Add other header content as needed */}
    </header>
  );
};

export default Header;
