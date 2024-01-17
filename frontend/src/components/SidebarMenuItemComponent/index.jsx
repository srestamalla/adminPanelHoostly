import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarMenuItemComponent = ({ to, text, icon, open }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const urlParams = new URLSearchParams(window.location.search);
  const [pageActive, setPageActive] = useState(
    urlParams.get("pagesActive") ? true : false
  );
  const isAboutUsActive = location.pathname.includes("about-us") ? true : false;
  const isTermsAndConditionActive = location.pathname.includes(
    "terms-and-conditions"
  )
    ? true
    : false;

  const isPrivacyPolicyActive = location.pathname.includes("privacy-policy")
    ? true
    : false;
  if (to === "/pages") {
    return (
      <>
        <li
          className={`px-2 py-1 text-[13px] text-darkBlue group flex items-center 
        cursor-pointer  hover:text-primaryYellow"
            : "text-darkBlue hover:text-primaryYellow`}
          onClick={() => {
            setPageActive(!pageActive);
          }}
        >
          <div className="pr-5 text-gray group-hover:text-primaryYellow">
            {icon}
          </div>
          <div className={`${!open && "scale-0"}`}>{text}</div>
        </li>
        {pageActive ? (
          <div className=" py-2 pl-14 text-[12px]  bg-white w-32 md:w-auto ">
            <div className="py-1">
              <Link
                to="/about-us?pagesActive=true"
                className={`{
                  ${
                    isAboutUsActive
                      ? "text-primaryYellow"
                      : "hover:text-primaryYellow"
                  }`}
              >
                About Us
              </Link>
            </div>
            <div className="py-1">
              <Link
                to="/terms-and-conditions?pagesActive=true"
                className={`{
                  ${
                    isTermsAndConditionActive
                      ? "text-primaryYellow"
                      : "hover:text-primaryYellow"
                  }`}
              >
                Terms and Conditions
              </Link>
            </div>
            <div className="py-1">
              <Link
                to="/privacy-policy?pagesActive=true"
                className={`${
                  isPrivacyPolicyActive
                    ? "text-primaryYellow"
                    : "hover:text-primaryYellow"
                }`}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        ) : null}
      </>
    );
  }
  return (
    <li
      className={`px-2 py-1 text-[13px] `}
      onClick={() => {
        setPageActive(false);
      }}
    >
      <Link
        to={to}
        className={`py-2 flex items-center group ${
          isActive
            ? "text-primaryYellow hover:text-primaryYellow"
            : "text-darkBlue hover:text-primaryYellow"
        }`}
      >
        <div
          className={`pr-5 group-hover:text-primaryYellow ${
            isActive ? "text-primaryYellow" : "text-gray"
          }`}
        >
          {icon}
        </div>
        <div className={`group-hover:text-primaryYellow ${!open && "scale-0"}`}>
          {text}
        </div>
      </Link>
    </li>
  );
};

export default SidebarMenuItemComponent;
