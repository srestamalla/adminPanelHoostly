import React from "react";
import Layout from "../../containers/layouts";
import usericon from "../../assets/icons/usericon.png";
import DashboardCardComponent from "../../components/DashboardCardComponent";
import airPodsImg from "../../assets/images/airPodsImg.png";
import CustomButton from "../../shared/CustomButton";
import DashboardTableRowComponent from "../../components/DashboardTableRowComponent";
import dashboardTableRowData from "../../data/dashboardTableRowData";

const Dashboard = () => {
  const dashboardCards = [
    { img: usericon, count: "568", desc: "Total User" },
    { img: usericon, count: "100", desc: "Total Ads" },
    { img: usericon, count: "867", desc: "Total Featured Ads" },
    { count: "$85.00", desc: "Total Payments" },
  ];

  const renderDashboardCards = () => {
    return dashboardCards.map((card, index) => (
      <DashboardCardComponent
        key={index}
        img={card.img}
        count={card.count}
        desc={card.desc}
      />
    ));
  };

  return (
    <Layout pageTitle="Dashboard">
      <div className="px-4">
        <div className="p-4 flex space-x-2 justify-end">
          {["Days", "Weeks", "Months"].map((period, index) => (
            <div
              key={index}
              className="px-4 bg-primaryYellow text-white text-[20px] font-medium flex items-center drop-shadow-lg"
            >
              {period}
            </div>
          ))}
        </div>

        <div className="p-4 flex items-center space-x-5">
          {renderDashboardCards()}
        </div>

        <div>
          <p className="p-4">ADS waiting For approval</p>
        </div>

        <div className="p-4">
          <table className="w-full border-collapse">
            <thead className="bg-white text-darkBlue text-[13px]">
              <tr>
                <th className="font-medium py-2">Image</th>
                <th className="font-medium py-2">Name</th>
                <th className="font-medium py-2">Categories</th>
                <th className="font-medium py-2">Location</th>
                <th className="font-medium py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              {dashboardTableRowData.map((item, index) => (
                <>
                  <tr className="bg-primaryBg">
                    <td colSpan="5" className="h-4"></td>
                  </tr>
                  <DashboardTableRowComponent
                    key={index}
                    image={item.image}
                    name={item.name}
                    category={item.category}
                    location={item.location}
                  />
                </>
              ))}
            </tbody>
            {/* <tbody className="text-[14px]">
              <tr className="bg-primaryBg">
                <td colSpan="5" className="h-4"></td>
              </tr>
              <tr className="border-1 py-2 rounded bg-offWhite shadow-md">
                <td className="px-4 py-3">
                  <img src={airPodsImg} alt="AirPods Image" />
                </td>
                <td className="px-4 py-3 font-semibold">
                  Apple airpods 2nd generation
                </td>
                <td className="px-4 py-3 font-semibold">Category Mian</td>
                <td className="px-4 py-3 font-semibold">USA</td>
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
              <tr className="bg-primaryBg">
                <td colSpan="5" className="h-4"></td>
              </tr>
              <tr className="border-1 py-2 rounded bg-offWhite shadow-md">
                <td className="px-4 py-3">
                  <img src={airPodsImg} alt="AirPods Image" />
                </td>
                <td className="px-4 py-3 font-semibold">
                  Apple airpods 2nd generation
                </td>
                <td className="px-4 py-3 font-semibold">Category Mian</td>
                <td className="px-4 py-3 font-semibold">USA</td>
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
              <tr className="bg-primaryBg">
                <td colSpan="5" className="h-4"></td>
              </tr>
              <tr className="border-1 py-2 rounded bg-offWhite shadow-md">
                <td className="px-4 py-3">
                  <img src={airPodsImg} alt="AirPods Image" />
                </td>
                <td className="px-4 py-3 font-semibold">
                  Apple airpods 2nd generation
                </td>
                <td className="px-4 py-3 font-semibold">Category Mian</td>
                <td className="px-4 py-3 font-semibold">USA</td>
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
            </tbody> */}
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
