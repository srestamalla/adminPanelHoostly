import React from "react";
import { Link } from "react-router-dom";
import menuItemsData from "../../data/menuItemsData";
import SidebarMenuItemComponent from "../../components/SidebarMenuItemComponent";

const Sidebar = () => {
  return (
    <>
      <aside className="bg-white shadow-lg flex flex-col h-full">
        <div className="px-4 py-5">
          <h1 className="text-[13px] px-4 font-medium">Marketcayman Logo</h1>
          {/* <img src="/path-to-your-logo.png" alt="Logo" className="w-12 h-12" /> */}
        </div>
        <hr className="border-t-1 border-lightGray" />

        <nav className="p-4 flex-grow">
          <ul>
            {menuItemsData.map((item, index) => (
              <SidebarMenuItemComponent key={index} {...item} />
            ))}
          </ul>
        </nav>

        <div className="p-4">
          <ul>
            <li className="p-2 mt-auto text-[13px] font-medium">
              <Link
                to="#"
                className="py-2 flex items-center text-gray hover:text-primaryYellow"
              >
                <div className="mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_15_259)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.89543 14 2 14H12C13.1046 14 14 13.1046 14 12V2C14 0.895431 13.1046 0 12 0H2ZM5 2C4.44772 2 4 2.44772 4 3V11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11V3C6 2.44772 5.55228 2 5 2Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_15_259">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>Log Out</div>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
