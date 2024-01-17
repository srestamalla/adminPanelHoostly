import React from "react";
import Sidebar from "../../shared/sidebar";
import Header from "../../shared/header";

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="flex min-h-full">
      <Sidebar />
      <div className="flex-1 flex flex-col ">
        <Header pageTitle={pageTitle} />
        <main className="flex-1 overflow-y-auto bg-gray-100 p-0 md:p-4 ml-14 md:ml-72">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
