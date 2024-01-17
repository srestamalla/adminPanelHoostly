import React from "react";

const CustomButton = ({
  bgColor = "black",
  textColor = "white",
  label,
  onClick,
}) => {
  return (
    <button
      className={`bg-${bgColor} text-${textColor} p-1 px-3 md:px-12 md:py-2 rounded-full font-normal w-20 md:w-44 whitespace-pre`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
