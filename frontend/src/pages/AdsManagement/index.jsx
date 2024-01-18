import React from "react";
import Layout from "../../containers/layouts";
import adsTableRowData from "../../data/adsTableRowData";
import CustomButton from "../../shared/CustomButton";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import editIcon from "../../assets/icons/editIcon.svg";

const AdsManagement = () => {
  return (
    <>
      <Layout pageTitle="Ads Management">
        <div className="px-4">
          <div className="px-1 md:px-4 py-8 flex justify-end text-[13px] ">
            <CustomButton
              bgColor="primaryYellow"
              textColor="black"
              label="Create Ads"
              onClick={() => {
                // Handle Approve button click
              }}
              smallDeviceWidth="22"
            />
          </div>
          <div className="px-1 md:px-4">
            <p className="text-sm md:text-xl font-normal">See List of Ads</p>
          </div>
          <div className="p-1 md:p-4">
            <table className="w-full border-collapse">
              <thead className="bg-white text-darkBlue text-[9px] md:text-[13px]">
                <tr>
                  <th className="font-medium py-2 px-1">Image</th>
                  <th className="font-medium py-2 px-1">Ads Name</th>
                  <th className="font-medium py-2 px-1">Categories</th>
                  <th className="font-medium py-2 px-1">Status</th>
                  <th className="font-medium py-2 px-1">Location</th>
                  <th className="font-medium py-2 px-1">Action</th>
                </tr>
              </thead>
              <tbody className="text-[9px] md:text-[14px]">
                {adsTableRowData.map((item, index) => (
                  <React.Fragment key={index}>
                    <tr className="bg-primaryBg">
                      <td colSpan="7" className="h-4"></td>
                    </tr>
                    <tr className="py-2 rounded bg-offWhite shadow-md">
                      <td className="px-1 md:px-4 py-3">
                        <img src={item.image} alt={`${item.name} Image`} />
                      </td>
                      <td className="px-1 md:px-4 py-3 font-semibold">
                        {item.adsName}
                      </td>
                      <td className="px-1 md:px-4 py-3 font-normal">
                        {item.category}
                      </td>
                      <td className="px-1 md:px-4 py-3 font-semibold">
                        <button
                          className={`${
                            item.status === "Active" ? "bg-green" : "bg-red"
                          } text-white px-1 md:px-4 py-2 rounded-md`}
                        >
                          {item.status}
                        </button>
                      </td>
                      <td className="px-1 md:px-4 py-3 font-normal">
                        {item.location}
                      </td>
                      <td className="px-1 md:px-4 py-3 ">
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
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdsManagement;
