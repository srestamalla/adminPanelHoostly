import React from "react";
import Layout from "../../containers/layouts";
import featuredAdsData from "../../data/featuredAdsData";
import deleteIcon from "../../assets/icons/deleteIcon.svg";

const FeaturedAds = () => {
  return (
    <>
      <Layout pageTitle="Featured ADs">
        <div className="px-4 pt-20">
          <div className="px-4">
            <p className="text-xl font-normal">List of Featured Ads</p>
          </div>
          <div className="px-4">
            {featuredAdsData.map((item, index) => (
              <div key={index} className="card-container my-5">
                <div className="py-2 rounded bg-offWhite shadow-md text-sm flex justify-center items-center">
                  <div className="px-4 py-3">
                    <p>
                      From: <span className="font-semibold">{item.from}</span>
                    </p>
                    <p>
                      To: <span className="font-semibold">{item.to}</span>
                    </p>
                  </div>
                  <div className="px-4 py-3">
                    <img src={item.image} alt={`${item.name} Image`} />
                  </div>
                  <div className="px-4 py-3 font-semibold">
                    {item.featuredAdsName}
                  </div>
                  <div className="px-4 py-3 font-normal">{item.price}</div>
                  <div className="px-4 py-3 font-normal">{item.name}</div>
                  <div className="px-4 py-3 font-semibold">
                    <button className="bg-green text-white px-4 py-2 rounded-md">
                      {item.status}
                    </button>
                  </div>
                  <div className="px-4 py-3 font-semibold">
                    <button className="bg-primaryYellow text-white px-4 py-2 rounded-md">
                      Promote
                    </button>
                  </div>
                  <div className="px-4 py-3">
                    <button>
                      <img src={deleteIcon} alt="Bin icon" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="p-4">
              <table className="w-full border-collapse">
                <thead className="bg-white text-darkBlue text-[13px]">
                  <tr>
                    <th className="font-medium py-2">Date</th>
                    <th className="font-medium py-2">Image</th>
                    <th className="font-medium py-2">Featured Ads Name</th>
                    <th className="font-medium py-2">Price</th>
                    <th className="font-medium py-2">Name</th>
                    <th className="font-medium py-2">Status</th>
                    <th className="font-medium py-2">Action</th>
                    <th className="font-medium py-2">Action</th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  {featuredAdsData.map((item, index) => (
                    <React.Fragment key={index}>
                      <tr className="bg-primaryBg">
                        <td colSpan="8" className="h-4"></td>
                      </tr>
                      <tr className="py-2 rounded bg-offWhite shadow-md">
                        <td className="px-4 py-3">
                          <div>
                            <p>From: {item.from}</p>
                            <p>To: {item.to}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <img src={item.image} alt={`${item.name} Image`} />
                        </td>
                        <td className="px-4 py-3 font-semibold">
                          {item.featuredAdsName}
                        </td>
                        <td className="px-4 py-3 font-normal">{item.price}</td>
                        <td className="px-4 py-3 font-normal">{item.name}</td>
                        <td className="px-4 py-3 font-semibold">
                          <button className="bg-green text-white px-4 py-2 rounded-md">
                            {item.status}
                          </button>
                        </td>
                        <td className="px-4 py-3 font-semibold">
                          <button className="bg-primaryYellow text-white px-4 py-2 rounded-md">
                            Promote
                          </button>
                        </td>
                        <td className="px-4 py-3">
                          <button>
                            <img src={deleteIcon} alt="Bin icon" />
                          </button>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div> */}
        </div>
      </Layout>
    </>
  );
};

export default FeaturedAds;
