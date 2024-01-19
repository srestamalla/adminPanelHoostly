import React from "react";
import Layout from "../../containers/layouts";
import bannerTableRowData from "../../data/bannerTableRowData";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import editIcon from "../../assets/icons/editIcon.svg";
import CustomButton from "../../shared/CustomButton";
import { useNavigate } from "react-router-dom";

const BannerList = () => {
  const navigate = useNavigate();

  const handleAddBannerClick = () => {
    navigate("/banner-management");
  };
  return (
    <>
      <Layout pageTitle="Banner Lists">
        <div className="px-4">
          <div className="px-4 py-8 flex justify-end text-[13px] ">
            <CustomButton
              bgColor="black"
              textColor="white"
              label="Add a banner"
              onClick={handleAddBannerClick}
              smallDeviceWidth="40"
            />
          </div>
          <div className="md:px-4">
            <p className="text-sm md:text-xl font-normal">Banner List</p>
          </div>
          <div className="md:p-4 w-screen md:w-auto">
            <table className="w-full border-collapse p-2">
              <thead className="bg-white text-darkBlue text-[8px] md:text-[13px]">
                <tr>
                  <th className="font-medium py-2 border-b border-lightGray">
                    Banner Name
                  </th>
                  <th className="font-medium py-2 border-b border-lightGray">
                    Banner File
                  </th>
                  <th className="font-medium py-2 border-b border-lightGray">
                    Banner Category
                  </th>
                  <th className="font-medium py-2 border-b border-lightGray">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                {bannerTableRowData.map((item, index) => (
                  <tr
                    key={index}
                    className=" bg-white text-[8px] md:text-[13px]"
                  >
                    <td className=" pl-2 py-4 font-medium border-b border-lightGray">
                      <div className="flex justify-left items-center gap-1 md:gap-3 md:space-x-3">
                        <img
                          className="inline-block h-3 w-3 md:h-6 md:w-6 rounded-full ring-white"
                          src={item.image}
                          alt="User Profile thumbnail"
                        ></img>
                        {item.bannerName}
                      </div>
                    </td>
                    <td className="py-4 text-center text-tableGray border-b border-lightGray">
                      {item.bannerFile}
                    </td>
                    <td className=" py-4 text-center text-tableGray border-b border-lightGray">
                      {item.bannerCategory}
                    </td>
                    <td className=" py-4 text-center border-b border-lightGray">
                      <div className="flex justify-center items-center space-x-1">
                        <button>
                          <img
                            src={editIcon}
                            alt="Edit icon"
                            className="w-2 md:w-4"
                          />
                        </button>
                        <button>
                          <img
                            src={deleteIcon}
                            alt="Bin icon"
                            className="w-2 md:w-4"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BannerList;
