import React from "react";
import CustomButton from "../../shared/CustomButton";

const DashboardTableRowComponent = ({ image, name, category, location }) => (
  <tr className="border-1 py-2 rounded bg-offWhite shadow-md">
    <td className="px-4 py-3">
      <img src={image} alt={`${name} Image`} />
    </td>
    <td className="px-4 py-3 font-semibold">{name}</td>
    <td className="px-4 py-3 font-semibold">{category}</td>
    <td className="px-4 py-3 font-semibold">{location}</td>
    <td className="px-4 py-3">
      <div className="flex items-center justify-center space-x-10 text-[16px]">
        <CustomButton
          bgColor="primaryYellow"
          textColor="black"
          label="Approve"
          onClick={() => {
            // Handle Approve button click
          }}
        />
        <CustomButton
          bgColor="black"
          textColor="white"
          label="Reject"
          onClick={() => {
            // Handle Reject button click
          }}
        />
      </div>
    </td>
  </tr>
);

export default DashboardTableRowComponent;
