import React from "react";
import Layout from "../../containers/layouts";
import CustomButton from "../../shared/CustomButton";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import userTableRowData from "../../data/userTableRowData";

const UserManagement = () => {
  return (
    <>
      <Layout pageTitle="User Management">
        <div className="px-4 md:px-4">
          <div className="md:px-4 py-8 flex items-center text-[13px] justify-between ">
            <div className="w-3/5 relative text-gray">
              <input
                className="bg-white w-full text-black h-8 md:h-12 px-5 rounded-full text-sm focus:outline-none text-[11px] md:text-base"
                type="search"
                name="search"
                placeholder="Search User"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-2 md:mt-3 mr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
            <div className="text-[10px] md:text-base">
              <CustomButton
                bgColor="primaryYellow"
                textColor="black"
                label="Create User"
                onClick={() => {
                  // Handle Approve button click
                }}
              />
            </div>
          </div>
          <div className="md:px-4">
            <p className="text-sm md:text-xl font-normal">List of Users</p>
          </div>
          <div className="md:p-4">
            <table className="w-full border-collapse p-2">
              <thead className="bg-white text-darkBlue text-[8px] md:text-[13px]">
                <tr>
                  <th className=" py-2 border-b border-lightGray"></th>
                  <th className="font-medium py-2 border-b border-lightGray">
                    Name
                  </th>
                  <th className="font-medium py-2 border-b border-lightGray">
                    Email
                  </th>
                  <th className="font-medium py-2 border-b border-lightGray">
                    Phone No
                  </th>
                  <th className="font-medium py-2 border-b border-lightGray hidden md:table-cell">
                    Action
                  </th>
                  <th className="font-medium py-2 border-b border-lightGray hidden md:table-cell">
                    Action
                  </th>
                  <th className="font-medium pr-2 py-2 border-b border-lightGray">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                {userTableRowData.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white text-[8px] md:text-[13px]"
                  >
                    <td className="px-2 py-4  text-center border-b border-lightGray">
                      <div>
                        <input
                          id={`checkbox${item.id}`}
                          type="checkbox"
                          value=""
                          className="w-3 h-3 text-blue-600 bg-gray-100 border-gray rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray focus:ring-2 dark:bg-gray dark:border-gray"
                        />
                      </div>
                    </td>
                    <td className="py-4 font-medium border-b border-lightGray">
                      <div className="flex justify-left items-center gap-1 md:gap-3 md:space-x-3">
                        <img
                          className="inline-block h-3 w-3 md:h-6 md:w-6 rounded-full ring-white"
                          src={item.image}
                          alt="User Profile thumbnail"
                        ></img>
                        {item.name}
                      </div>
                    </td>
                    <td className=" py-4 text-center   text-tableGray border-b border-lightGray">
                      {item.email}
                    </td>
                    <td className=" py-4 text-center    text-tableGray border-b border-lightGray">
                      {item.phoneNo}
                    </td>
                    <td className=" py-4 text-center   text-tableGray border-b border-lightGray hidden md:table-cell">
                      View
                    </td>
                    <td className=" py-4 text-center   text-tableGray border-b border-lightGray hidden md:table-cell">
                      Disable /Enable
                    </td>
                    <td className=" py-4 text-center border-b border-lightGray">
                      <button>
                        <img
                          src={deleteIcon}
                          alt="Trash bin icon"
                          className="w-2 md:w-4"
                        />
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

export default UserManagement;
