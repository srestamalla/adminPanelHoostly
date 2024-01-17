import React from "react";

const DashboardCardComponent = ({ img, count, desc }) => {
  return (
    <>
      {img && (
        <div className="basis-1/4 flex items-center content-center bg-white px-3 py-6 rounded-[4px] card_component">
          <div>
            <img src={img} alt="User Icon" className="sm:max-sm:size-4" />
          </div>
          <div className="space-y-2 m-auto flex flex-col items-center font-medium">
            <h1 className="text-primaryYellow text-xl lg:text-5xl">{count}</h1>
            <p className="text-[16px] ">{desc}</p>
          </div>
        </div>
      )}
      {!img && (
        <div className="basis-1/4 flex items-center content-center bg-white px-3 py-6 rounded-[4px]">
          <div className="space-y-2 m-auto flex flex-col items-center content-center font-medium">
            <h1 className="text-primaryYellow text-5xl">{count}</h1>
            <p className="text-[16px]">{desc}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardCardComponent;
