import React from "react";

const CustomButton = ({
  bgColor = "black",
  textColor = "white",
  label,
  onClick,
  smallDeviceWidth = "20",
  width = "44",
}) => {
  return (
    <button
      className={`bg-${bgColor} text-${textColor} p-1 px-3  md:py-2 rounded-full font-normal w-${smallDeviceWidth} md:w-${width} whitespace-pre`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
