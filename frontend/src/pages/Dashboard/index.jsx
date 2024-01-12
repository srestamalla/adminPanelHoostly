import React from "react";
import Layout from "../../containers/layouts";
import usericon from "../../assets/icons/usericon.png";
import DashboardCardComponent from "../../components/DashboardCardComponent";
import airPodsImg from "../../assets/images/airPodsImg.png";

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
      <div>
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

        <div className="p-4 flex items-center space-x-3">
          {renderDashboardCards()}
        </div>

        <div>
          <p className="p-4">ADS waiting For approval</p>
        </div>

        <div className="p-4 table">
          <table className="table-auto">
            <thead className="bg-white">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Categories</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-1 border-black rounded-[5px] bg-offWhite mt-20">
                <td className="px-4">
                  <img src={airPodsImg} alt="AirPods Image" />
                </td>
                <td className="px-4">Apple airpods 2nd generation</td>
                <td>Category Mian</td>
                <td className="px-4 border-2 border-black ">USA</td>
                <td className="border-2 border-black px-4 flex items-center content-center space-x-4">
                  <div>Approve</div>
                  <div>Reject</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
