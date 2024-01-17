import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuItemsData from "../../data/menuItemsData";
import SidebarMenuItemComponent from "../../components/SidebarMenuItemComponent";
import useCheckMobileScreen from "../../assets/hooks/useCheckMobileScreen";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  const isMobile = width <= 768;
  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    }
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <aside
        className={`bg-white shadow-lg flex flex-col min-h-full relative ${
          open ? "w-72" : "w-14"
        }`}
      >
        <div className={`${open ? "px-4" : "px-2"} py-5`}>
          <h1 className="text-[13px]  font-medium">
            {open ? "Marketcayman Logo" : "Logo"}
          </h1>
          {/* <img src="/path-to-your-logo.png" alt="Logo" className="w-12 h-12" /> */}
        </div>
        <hr className="border-t-1 border-lightGray" />
        {isMobile ? (
          <div
            onClick={() => setOpen(!open)}
            className="absolute top-16 right-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-4 h-4 text-gray ${open && "rotate-180"} `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        ) : null}

        <nav className="p-4 flex-grow">
          <ul>
            {menuItemsData.map((item, index) => (
              <SidebarMenuItemComponent key={index} {...item} open={open} />
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
                <div className={`${!open && "scale-0"}`}>Log Out</div>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
