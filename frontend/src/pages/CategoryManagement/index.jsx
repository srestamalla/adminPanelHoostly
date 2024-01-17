import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../containers/layouts";
import CustomButton from "../../shared/CustomButton";
import categoryTableRowData from "../../data/categoryTableRowData";

const CategoryManagement = () => {
  const navigate = useNavigate();

  const handleCreateCategoryClick = () => {
    navigate("/add-category");
  };

  return (
    <>
      <Layout pageTitle="Category Management">
        <div className="px-4">
          <div className="px-4 py-8 flex justify-end text-[13px] ">
            <CustomButton
              bgColor="primaryYellow"
              textColor="black"
              label="Create Category"
              onClick={handleCreateCategoryClick}
              smallDeviceWith="40"
            />
          </div>
          <div className="px-4">
            <p className="text-sm md:text-xl font-normal">List of Categories</p>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse p-2">
              <thead className="bg-white text-darkBlue text-[9px] md:text-[13px]">
                <tr>
                  <th className="font-medium py-2 border-b border-lightGray">
                    Category Name
                  </th>
                  <th className="font-medium py-2 border-b border-lightGray">
                    Sub Category
                  </th>
                  <th className="font-medium py-2 border-b border-lightGray">
                    Icon
                  </th>
                  <th className="font-medium py-2 border-b border-lightGray">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-[9px] md:text-[15px]">
                {categoryTableRowData.map((item, index) => (
                  <tr key={index} className="bg-white">
                    <td className=" py-4 text-center font-normal  text-tableGray border-b border-lightGray">
                      <p>{item.categoryName}</p>
                    </td>
                    <td className=" py-4 text-center font-normal   text-tableGray border-b border-lightGray">
                      {item.subCategory}
                    </td>
                    <td className=" py-4 font-medium border-b border-lightGray">
                      <img
                        className="inline-block h-6 w-6 rounded-full ring-white"
                        src={item.image}
                        alt="User Profile thumbnail"
                      ></img>
                    </td>
                    <td className=" py-4 text-center font-normal  text-tableGray border-b border-lightGray">
                      <button></button>
                      Disable /Enable
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
