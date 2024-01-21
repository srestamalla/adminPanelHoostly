import React from "react";

const CustomButton = ({
  bgColor = "black",
  textColor = "white",
  label,
  onClick,
  smallDeviceWidth = "20",
  width,
}) => {
  return (
    <button
      className={`bg-${bgColor} text-${textColor} p-1 px-3 rounded-full font-normal w-${smallDeviceWidth} ${
        width ? `md:w-${width}` : `md:w-44`
      } whitespace-pre`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
