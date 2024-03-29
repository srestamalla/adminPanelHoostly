import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../containers/layouts";
import CustomButton from "../../shared/CustomButton";
import categoryTableRowData from "../../data/categoryTableRowData";
import fileIcon from "../../assets/icons/fileIcon.svg";

const CategoryManagement = () => {
  const navigate = useNavigate();

  const handleCreateCategoryClick = () => {
    navigate("/add-category");
  };

  return (
    <>
      <Layout pageTitle="Category Management">
        <div className="px-4">
          <div className="md:px-4 py-8 flex items-center text-[13px] justify-end ">
            <CustomButton
              bgColor="primaryYellow"
              textColor="black"
              label="Create Category"
              onClick={handleCreateCategoryClick}
              smallDeviceWidth="40"
            />
          </div>
          <div className="md:px-4">
            <p className="text-sm md:text-xl font-normal">List of Categories</p>
          </div>
          <div className="md:p-4">
            <table className="w-full border-collapse p-2">
              <thead className="bg-white text-darkBlue text-[9px] md:text-[13px]">
                <tr>
                  <th className="font-medium py-2 px-1 border-b border-lightGray">
                    Category Name
                  </th>
                  <th className="font-medium py-2 px-1 border-b border-lightGray">
                    Sub Category
                  </th>
                  <th className="font-medium py-2 px-1 border-b border-lightGray">
                    Icon
                  </th>
                  <th className="font-medium py-2 px-1 border-b border-lightGray">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-[9px] md:text-[15px]">
                {categoryTableRowData.map((item, index) => (
                  <tr key={index} className="bg-white">
                    <td className="px-3 py-4 w-40 md:w-auto font-normal  text-tableGray border-b border-lightGray">
                      {item.categoryName}
                    </td>
                    <td className=" px-2 py-4 w-40 md:auto font-normal   text-tableGray border-b border-lightGray">
                      {item.subCategory}
                    </td>
                    <td className=" py-4 border-b border-lightGray">
                      <img
                        className="inline-block h-4 w-4 md:h-6 md:w-6 rounded-full ring-white"
                        src={item.image}
                        alt="User Profile thumbnail"
                      ></img>
                    </td>
                    <td className=" pr-2 py-4 font-normal text-tableGray border-b border-lightGray ">
                      <div className=" md:flex md:space-x-2 md:justify-center md:items-center space-y-1 md:space-y-0">
                        <button className="bg-primaryYellow text-white w-14 rounded-[3px] py-1 px-1 flex items-center gap-1 md:justify-center md:w-20">
                          <img
                            src={fileIcon}
                            alt="File Icon"
                            className="w-3 md:w-4"
                          ></img>
                          <div>Edit</div>
                        </button>
                        <button className="bg-black text-white w-14 rounded-[3px] py-1 px-1 flex items-center gap-1 md:w-20">
                          <img
                            src={fileIcon}
                            alt="File Icon"
                            className="w-3 md:w-4"
                          ></img>
                          <div>Delete</div>
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

export default CategoryManagement;
