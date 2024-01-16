import React from "react";
import Layout from "../../containers/layouts";
import CustomButton from "../../shared/CustomButton";
import categoryTableRowData from "../../data/categoryTableRowData";

const AddCategory = () => {
  return (
    <>
      <Layout pageTitle="Add Category">
        <div className="px-4">
          <div className="px-4 pt-8 pb-4 flex justify-end space-x-4 text-[13px] ">
            <CustomButton
              bgColor="primaryYellow"
              textColor="black"
              label="Cancel"
              onClick={() => {
                // Handle Approve button click
              }}
            />
            <CustomButton
              bgColor="black"
              textColor="white"
              label="Create Category"
              onClick={() => {
                // Handle Approve button click
              }}
            />
          </div>
          <div className="px-4 py-4 flex justify-end text-[13px] ">
            <CustomButton
              bgColor="black"
              textColor="white"
              label="Back To List"
              onClick={() => {
                // Handle Approve button click
              }}
            />
          </div>
          <div className="px-4">
            <p className="text-xl font-normal">Categories</p>
          </div>
          <div className="px-4 pt-4">
            <p className="text-sm font-normal">Add New Category</p>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse p-2">
              <thead className="bg-white text-darkBlue text-[13px]">
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
              <tbody className="text-[15px]">
                {categoryTableRowData.map((item, index) => (
                  <tr key={index} className="bg-white">
                    <td className=" py-4 text-center font-normal text-sm text-tableGray border-b border-lightGray">
                      <p>{item.categoryName}</p>
                    </td>
                    <td className=" py-4 text-center font-normal text-sm  text-tableGray border-b border-lightGray">
                      {item.subCategory}
                    </td>
                    <td className=" py-4 font-medium border-b border-lightGray">
                      <img
                        className="inline-block h-6 w-6 rounded-full ring-white"
                        src={item.image}
                        alt="User Profile thumbnail"
                      ></img>
                    </td>
                    <td className=" py-4 text-center font-normal text-sm text-tableGray border-b border-lightGray">
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

export default AddCategory;
