import React from "react";
import Layout from "../../containers/layouts";
import featuredAdsData from "../../data/featuredAdsData";
import deleteIcon from "../../assets/icons/deleteIcon.svg";

const FeaturedAds = () => {
  return (
    <>
      <Layout pageTitle="Featured ADs">
        <div className="px-4 pt-20">
          <div className="md:px-4">
            <p className="text-sm md:text-xl font-normal">
              List of Featured Ads
            </p>
          </div>
          <div className="md:px-4 w-screen md:w-auto">
            {featuredAdsData.map((item, index) => (
              <div
                key={index}
                className="py-2 rounded bg-offWhite shadow-md text-[9px] md:text-[14px] flex justify-center items-center mt-4"
              >
                <div className="px-2 md:px-4  py-3 w-60 md:w-auto whitespace-pre border-r">
                  <div>
                    From: <span className="font-semibold ">{item.from}</span>
                  </div>
                  <div>
                    To: <span className="font-semibold">{item.to}</span>
                  </div>
                </div>
                <div className="pl-1 md:px-4 py-3 w-72 md:w-auto ">
                  <img
                    src={item.image}
                    alt={`${item.name} Image`}
                    className="w-40 md:w-auto "
                  />
                </div>
                <div className="px-1  md:px-4 py-3 font-semibold w-60 md:w-auto">
                  {item.featuredAdsName}
                </div>
                <div className="px-1 md:px-4 py-3 font-normal">
                  {item.price}
                </div>
                <div className="px-1 md:px-4 py-3 font-normal">{item.name}</div>
                <div className="px-1 md:px-4 py-3 font-semibold">
                  <button
                    className={`${
                      item.status === "Active" ? "bg-green" : "bg-red"
                    } text-white px-1 md:px-4 py-2 rounded-md`}
                  >
                    {item.status}
                  </button>
                </div>
                <div className="px-1 md:px-4 py-3 font-semibold">
                  <button className="bg-primaryYellow text-white px-1 md:px-4 py-2 rounded-md">
                    Promote
                  </button>
                </div>
                <div className="px-1 md:px-4 py-3 w-20 md:w-auto">
                  <button>
                    <img src={deleteIcon} alt="Bin icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FeaturedAds;
