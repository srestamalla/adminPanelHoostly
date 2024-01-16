import React from "react";
import Layout from "../../containers/layouts";
import bannerTableRowData from "../../data/bannerTableRowData";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import editIcon from "../../assets/icons/editIcon.svg";
import CustomButton from "../../shared/CustomButton";

const BannerList = () => {
  return (
    <>
      <Layout pageTitle="Banner Lists">
        <div className="px-4">
          <div className="px-4 py-8 flex justify-end text-[13px] ">
            <CustomButton
              bgColor="black"
              textColor="white"
              label="Add a banner"
              onClick={() => {
                // Handle Add a banner button
              }}
            />
          </div>
          <div className="px-4">
            <p className="text-xl font-normal">Banner List</p>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse p-2">
              <thead className="bg-white text-darkBlue text-[13px]">
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
                  <tr key={index} className="bg-white">
                    <td className=" py-4 font-medium border-b border-lightGray">
                      <div className="flex justify-center items-center space-x-3">
                        <img
                          className="inline-block h-6 w-6 rounded-full ring-white"
                          src={item.image}
                          alt="User Profile thumbnail"
                        ></img>
                        <p>{item.bannerName}</p>
                      </div>
                    </td>
                    <td className=" py-4 text-center font-normal text-sm text-tableGray border-b border-lightGray">
                      <p>{item.bannerFile}</p>
                    </td>
                    <td className=" py-4 text-center font-normal text-sm  text-tableGray border-b border-lightGray">
                      {item.bannerCategory}
                    </td>
                    <td className=" py-4 text-center border-b border-lightGray">
                      <button>
                        <img src={editIcon} alt="Edit icon" />
                      </button>
                      <button>
                        <img src={deleteIcon} alt="Bin icon" />
                      </button>
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
