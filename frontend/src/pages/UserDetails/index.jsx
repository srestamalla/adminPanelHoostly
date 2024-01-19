import React from "react";
import Layout from "../../containers/layouts";
import featuredAdsData from "../../data/featuredAdsData";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import editIcon from "../../assets/icons/editIcon.svg";
import lindseyStroudProfile from "../../assets/images/lindseyStroudProfile.png";
import CustomButton from "../../shared/CustomButton";
import adsPostedByUserData from "../../data/adsPostedByUserData";

const UserDetails = () => {
  return (
    <>
      <Layout pageTitle="User Details">
        <div className="px-4 pt-8">
          <div className="flex justify-between">
            <div className="flex space-x-2 items-center">
              <div>
                <img
                  className="inline-block h-12 w-12 md:h-28 md:w-28 rounded-full ring-white"
                  src={lindseyStroudProfile}
                  alt="User Profile thumbnail"
                />
              </div>
              <div className="text-[9px] md:text-[13px]">
                <div className="text-semibold">Lindsey Stroud</div>
                <div className="text-tableGray">lindsey.stroud@gmail.com</div>
                <div className="text-tableGray">123456789</div>
              </div>
            </div>
            <div className="space-y-1 md:space-y-0 md:px-4 md:space-x-4 pt-8 pb-4 md:flex md:items-center text-xs md:text-[13px] justify-end ">
              <div>
                <CustomButton
                  bgColor="primaryYellow"
                  textColor="black"
                  label="Disable"
                  onClick={() => {
                    // Handle Approve button click
                  }}
                  smallDeviceWidth="32"
                />
              </div>
              <div>
                <CustomButton
                  bgColor="black"
                  textColor="white"
                  label="Delete"
                  onClick={() => {
                    // Handle Approve button click
                  }}
                  smallDeviceWidth="32"
                />
              </div>
            </div>
          </div>
          <div className="pt-6 md:px-4">
            <p className="text-sm md:text-xl font-normal">Ads Posted By user</p>
          </div>
          <div className="md:px-4">
            {adsPostedByUserData.map((item, index) => (
              <div
                key={index}
                className="py-2 rounded bg-offWhite shadow-md text-[9px] md:text-[14px] flex items-center mt-4 w-screen md:w-auto overflow-x-auto"
              >
                <div className="px-2 md:px-4 py-3 w-60 md:w-auto whitespace-pre border-r">
                  <div>
                    From: <span className="font-semibold ">{item.from}</span>
                  </div>
                  <div>
                    To: <span className="font-semibold">{item.to}</span>
                  </div>
                </div>
                <div className="px-1 md:px-4 py-3 ">
                  <img
                    src={item.image}
                    alt={`${item.name} Image`}
                    className="w-44 md:w-auto"
                  />
                </div>
                <div className="px-1 md:px-4 py-3 font-semibold w-60">
                  {item.featuredAdsName}
                </div>
                <div className="pl-1 md:px-4 py-3 font-semibold">
                  <button
                    className={`${
                      item.status === "Active"
                        ? "bg-green"
                        : item.status === "Expired"
                        ? "bg-primaryYellow"
                        : "bg-red"
                    } text-white px-1 md:px-4 py-2 rounded-md`}
                  >
                    {item.status}
                  </button>
                </div>
                <div className="px-1 md:px-4 py-3 font-normal text-center ">
                  Category/Sub category
                </div>
                <div className="px-1 md:px-4 py-3 font-semibold">
                  <button className="bg-primaryYellow text-white px-1 md:px-4 py-2 rounded-md">
                    Promote
                  </button>
                </div>
                <div className="px-1 md:space-x-1 md:px-4 py-3 w-24 md:w-auto">
                  <button>
                    <img src={editIcon} alt="edit icon" />
                  </button>
                  <button>
                    <img src={deleteIcon} alt="Bin icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default UserDetails;
