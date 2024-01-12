import React from "react";

const CustomButton = ({ bgColor, textColor, label, onClick }) => {
  return (
    <button
      className={`bg-${bgColor} text-${textColor} p-2 px-12 rounded-full font-normal`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
