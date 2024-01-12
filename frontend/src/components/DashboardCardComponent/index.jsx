import React from "react";

const DashboardCardComponent = ({ img, count, desc }) => {
  return (
    <>
      {img && (
        <div className="basis-1/4 flex items-center content-center bg-white px-3 py-6 space-x-4 rounded-[4px]">
          <div>
            <img src={img} alt="User Icon" />
          </div>
          <div className="space-y-2 m-auto flex flex-col items-center font-medium">
            <h1 className="text-primaryYellow text-5xl">{count}</h1>
            <p className="text-[18px] ">{desc}</p>
          </div>
        </div>
      )}
      {!img && (
        <div className="basis-1/4 flex items-center content-center bg-white px-3 py-6 space-x-3 rounded-[4px]">
          <div className="space-y-2 m-auto flex flex-col items-center content-center font-medium">
            <h1 className="text-primaryYellow text-5xl">{count}</h1>
            <p className="text-[18px]">{desc}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardCardComponent;
