import React from "react";
import Layout from "../../containers/layouts";
import featuredAdsData from "../../data/featuredAdsData";
import deleteIcon from "../../assets/icons/deleteIcon.svg";

const UserDetails = () => {
  return (
    <>
      <Layout pageTitle="User Details">
        <div className="px-4 pt-20">
          <div className="md:px-4">
            <p className="text-sm md:text-xl font-normal">Ads Posted By user</p>
          </div>
          <div className="md:px-4">
            {featuredAdsData.map((item, index) => (
              <div
                key={index}
                className="py-2 rounded bg-offWhite shadow-md text-[9px] md:text-[14px] flex justify-center items-center mt-4 w-screen md:w-auto"
              >
                <div className="pl-2 md:px-4 py-3 w-60 md:w-auto whitespace-pre">
                  <div>
                    From: <span className="font-semibold ">{item.from}</span>
                  </div>
                  <div>
                    To: <span className="font-semibold">{item.to}</span>
                  </div>
                </div>
                <div className=" mx-2 md:px-4 py-3 ">
                  <img
                    src={item.image}
                    alt={`${item.name} Image`}
                    className="w-40 md:w-auto "
                  />
                </div>
                <div className="px-1  md:px-4 py-3 font-semibold w-60">
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

export default UserDetails;
